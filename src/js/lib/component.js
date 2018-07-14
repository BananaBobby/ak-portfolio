import registry from './registry';
import { delegate } from './helpers';

if (!window.AK) window.AK = {};

export class Component {
    constructor(root, props) {
        this.root = root;
        this.props = props || {};
        this.handlers = null;
        this.selectors = {};
        this.modifiers = {};

        this._removeHandlersMap = {};
    }

    setState(statePartial) {
        if (!this.state) {
            throw new Error(`
                You are trying to update a state that wasn't initialised yet.
                Create it in the init method of your component first e.g. this.state = { foo: 'bar' };
            `);
        }

        this.state = Object.assign({}, this.state, statePartial);
    };

    _toggleHandlers(isAdd) {
        const handlers = this.handlers;
        const selectors = this.selectors;

        if (!handlers) return;

        Object.keys(handlers).forEach(key => {
            const handlerParams = key.split('@');
            const elName = handlerParams[0];
            const eventName = handlerParams[1];

            if (!elName || !eventName) throw new Error('Wrong syntax for component');

            const handler = handlers[key].bind(this);

            let presetEl;

            if (elName === 'window') presetEl = window;
            if (elName === 'root') presetEl = this.root;

            if (presetEl) {
                const method = isAdd ? 'addEventListener' : 'removeEventListener';
                presetEl[method](eventName, handler);
                return;
            }

            const selector = selectors[elName];

            if (!selector) throw new Error('Selector for element not found');

            if (isAdd) {
                if (eventName === 'scroll') {
                    this.root.querySelector(selector).addEventListener(eventName, handler);
                } else {
                    this._removeHandlersMap[key] = delegate(this.root, eventName, selector, handler);
                }
            } else {
                if (eventName === 'scroll') {
                    this.root.querySelector(selector).removeEventListener(eventName, handler);
                } else {
                    const removeHandler = this._removeHandlersMap[key];
                    if (removeHandler) removeHandler();
                }
            }
        });
    };

    onMount() {}
    onUnmount() {}

    mount() {
        this._toggleHandlers(true);
        this.onMount();
    };

    unmount() {
        this._toggleHandlers(false);
        this.onUnmount();
    }
}

export function getInstance(name, el, props) {
    const Component = registry.get(name);
    return new Component(el, props);
}

export function initComponents(el) {
    const rootEl = el || document.body;
    const componentAttr = 'data-component';
    const componentEls = rootEl.querySelectorAll(`[${componentAttr}]`);

    componentEls.forEach(el => {
        const names = el.getAttribute(componentAttr);
        const namesArr = names.split(',');

        namesArr.forEach(name => {
            if (!name) return;

            const instance = getInstance(name, el);
            instance.mount();
        });
    });
}

window.AK.getInstance = getInstance;
window.AK.initComponents = initComponents;
