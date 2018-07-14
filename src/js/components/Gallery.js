import { Component } from '../lib/component';
import registry from '../lib/registry';

class Gallery extends Component {
    constructor(root) {
        super(root);

        this.selectors = {
            preview: '.js-gallery__preview',
            viewer: '.js-gallery__viewer',
            close: '.js-gallery__close',
            action: '.js-gallery__action',
            actionButton: '.js-gallery__action-button',
        };

        this.modifiers = {
          active: 'viewer_active',
          actionActive: 'viewer__action_active',
        };

        this.state = {
            active: false,
            actionActive: false,
        };

        this.handlers = {
            'close@click': this._handleClose,
            'preview@click': this._handlePreviewClick,
            'actionButton@click': this._handleActionClick,
            'window@keydown': this._handleKeyDown,
        };

        this.viewer = root.querySelector(this.selectors.viewer);
        this.action = root.querySelector(this.selectors.action);
    }

    _handleKeyDown = (e) => {
        if (e.which === 27 && this.state.active) {
            e.preventDefault();
            this.toggle(false);
        }
    };

    _handleActionClick = (e) => {
        e.preventDefault();
        this.toggleAction();
    };

    _handleClose = (e) => {
        e.preventDefault();
        this.toggle();
        this.toggleAction(false);
    };

    _handlePreviewClick = (e) => {
        e.preventDefault();
        this.toggle();
    };

    toggle = (flag) => {
        const isActive = flag !== undefined ? flag : !this.state.active;

        this.viewer.classList[isActive ? 'add' : 'remove'](this.modifiers.active);
        this.setState({ active: isActive });
    };

    toggleAction = (flag) => {
        const isActive = flag !== undefined ? flag : !this.state.actionActive;

        this.action.classList[isActive ? 'add' : 'remove'](this.modifiers.actionActive);
        this.setState({ actionActive: isActive });
    };

    onMount() {}
}

registry.register('Gallery', Gallery);