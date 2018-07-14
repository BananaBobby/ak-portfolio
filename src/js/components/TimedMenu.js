import { Component } from '../lib/component';
import registry from '../lib/registry';

class TimedMenu extends Component {
    constructor(root) {
        super(root);

        this.selectors = {
            item: '.js-timed-menu__item',
            progress: '.js-timed-menu__progress',
            section: '.js-timed-menu__section',
            more: '.js-timed-menu__more',
            close: '.js-timed-menu__close',
        };

        this.state = {
            layoutActive: false,
            activeIndex: 0,
            timeout: 6000
        };

        this.modifiers = {
            contentActive: 'layout_active',
            itemActive: 'menu__item_active',
            itemSelected: 'menu__item_selected',
            sectionActive: 'layout__previews-section_active',
        };

        this.handlers = {
            'more@click': this._handleMoreClick,
            'close@click': this._handleClose,
            'window@keydown': this._handleKeyDown,
            'item@click': this._handleItemClick,
        };

        this.items = root.querySelectorAll(this.selectors.item);
        this.sections = root.querySelectorAll(this.selectors.section);

        this.timer = null;
    }

    _handleKeyDown = (e) => {
        if (e.which === 27) {
            e.preventDefault();
            this._handleClose();
        }
    };

    _handleClose = () => {
        const classList = this.root.classList;
        const active = this.modifiers.contentActive;

        if (this.state.layoutActive) {
            this.items.forEach(item => item.classList.remove(this.modifiers.itemSelected));
            classList.remove(active);
            this.setState({ layoutActive: false });
            this._setNextActive();
            this._startTimer();
        }
    };

    _handleMoreClick = (e) => {
        e.preventDefault();
        this.choose(this.state.activeIndex);
    };

    _handleItemClick = (e) => {
        e.preventDefault();
        const target = e.delegateTarget;
        const index = Array.prototype.slice.call(this.items).indexOf(target);
        this.choose(index);
    };

    choose = (index) => {
        const targetItem = this.items[index];

        this.items.forEach(item => item.classList.remove(this.modifiers.itemSelected, this.modifiers.itemActive));

        clearInterval(this.timer);
        this.setState({
            layoutActive: true,
            activeIndex: index,
        });
        targetItem.classList.add(this.modifiers.itemSelected, this.modifiers.itemActive);
        this.root.classList.add(this.modifiers.contentActive);
    };

    _setActive = (index) => {
        const item = this.items[index];
        const previousItem = this.items[this.state.activeIndex];
        this.setState({ activeIndex: index });
        this.items.forEach(item => item.classList.remove(this.modifiers.itemActive));
        this.sections.forEach(section => section.classList.remove(this.modifiers.sectionActive));

        if (previousItem) previousItem.querySelector(this.selectors.progress).style.width = 0;
        item.classList.add(this.modifiers.itemActive);
        setTimeout(() => item.querySelector(this.selectors.progress).style.width = '100%', 0);

        this.sections[index].classList.add(this.modifiers.sectionActive);
    };

    _setNextActive = () => {
        const index = this.state.activeIndex;
        const total = this.items.length;

        this._setActive(index === total - 1 ? 0 : index + 1);
    };

    _startTimer = () => {
        this.timer = setInterval(this._setNextActive, this.state.timeout);
    };

    onMount() {
        this._setActive(0);
        this._startTimer();
    }
}

registry.register('TimedMenu', TimedMenu);