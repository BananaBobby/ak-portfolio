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
        };

        this.state = {
            activeIndex: 0,
            timeout: 6000
        };

        this.modifiers = {
            contentActive: 'layout_active',
            itemActive: 'menu__item_active',
            sectionActive: 'layout__previews-section_active',
        };

        this.handlers = {
            'more@click': this._handleMoreClick,
        };

        this.items = root.querySelectorAll(this.selectors.item);
        this.sections = root.querySelectorAll(this.selectors.section);

        this.timer = null;
    }

    _handleMoreClick = (e) => {
        e.preventDefault();

        clearInterval(this.timer);
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

    onMount() {
        this._setActive(0);
        this.timer = setInterval(this._setNextActive, this.state.timeout);
    }
}

registry.register('TimedMenu', TimedMenu);