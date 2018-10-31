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
            contentType: '.js-timed-menu__content-type',
            slider: '.js-content-slider',
            sliderScroll: '.js-content-slider__scroll',
            sliderPrev: '.js-timed-menu__slider-prev',
            sliderNext: '.js-timed-menu__slider-next',
        };

        this.state = {
            layoutActive: false,
            activeIndex: 0,
            activeSliderIndex: null,
            timeout: 6000
        };

        this.modifiers = {
            contentActive: 'layout_active',
            itemActive: 'menu__item_active',
            itemSelected: 'menu__item_selected',
            sectionActive: 'layout__previews-section_active',
            typeActive: 'layout__content-type_active',
            controlHidden: 'layout__control_hidden',
        };

        this.handlers = {
            'more@click': this._handleMoreClick,
            'close@click': this._handleClose,
            'item@click': this._handleItemClick,
            'body@mousewheel': this._handleMousewheel,
        };

        this.items = root.querySelectorAll(this.selectors.item);
        this.sections = root.querySelectorAll(this.selectors.section);
        this.contents = root.querySelectorAll(this.selectors.contentType);
        this.sliders = root.querySelectorAll(this.selectors.slider);
        this.scrolls = root.querySelectorAll(this.selectors.sliderScroll);
        this.sliderPrev = root.querySelector(this.selectors.sliderPrev);
        this.sliderNext = root.querySelector(this.selectors.sliderNext);

        this.timer = null;
        this.instances = [];
    }

    _handleMousewheel = (e) => {
        if (!this.instances.length || this.state.activeSliderIndex === null) return;

        const scroll = this.scrolls[this.state.activeSliderIndex];
        scroll.scrollBy({ top: e.deltaY });
    };

    _handleClose = () => {
        const classList = this.root.classList;
        const active = this.modifiers.contentActive;

        if (this.state.layoutActive) {
            this.instances = [];
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
        this.contents.forEach(item => item.classList.remove(this.modifiers.typeActive));

        clearInterval(this.timer);
        this.setState({
            layoutActive: true,
            activeIndex: index,
        });
        targetItem.classList.add(this.modifiers.itemSelected, this.modifiers.itemActive);
        this.root.classList.add(this.modifiers.contentActive);

        this.contents[index].classList.add(this.modifiers.typeActive);

        this._initSlider(index);
    };

    _handleSliderPrev = (e) => {
        e.preventDefault();
        if (!this.instances[this.state.activeSliderIndex]) return;

        const { isFirst, isLast } = this.instances[this.state.activeSliderIndex].setPreviousSlide();

        this.sliderPrev.classList.toggle(this.modifiers.controlHidden, isFirst);
        this.sliderNext.classList.toggle(this.modifiers.controlHidden, isLast);
    };

    _handleSliderNext = (e) => {
        e.preventDefault();
        if (!this.instances[this.state.activeSliderIndex]) return;

        const { isLast, isFirst } = this.instances[this.state.activeSliderIndex].setNextSlide();

        this.sliderPrev.classList.toggle(this.modifiers.controlHidden, isFirst);
        this.sliderNext.classList.toggle(this.modifiers.controlHidden, isLast);
    };

    _initSlider = (index) => {
        if (this.state.activeSliderIndex !== null) {
            this.sliderPrev.removeEventListener('click', this._handleSliderPrev);
            this.sliderNext.removeEventListener('click', this._handleSliderNext);
        }

        if (this.instances[index]) {
            this.instances[index].unmount();
        }

        const sliderEl = this.sliders[index];
        this.instances[index] = window.AB.getInstance('ContentSlider', sliderEl, {
            onScroll: ({ isFirst, isLast }) => {
                console.log(isFirst, isLast);
                this.sliderPrev.classList.toggle(this.modifiers.controlHidden, isFirst);
                this.sliderNext.classList.toggle(this.modifiers.controlHidden, isLast);
            }
        });

        this.setState({ activeSliderIndex: index });
        this.sliderPrev.classList.add(this.modifiers.controlHidden);
        this.sliderNext.classList.remove(this.modifiers.controlHidden);
        this.sliderPrev.addEventListener('click', this._handleSliderPrev);
        this.sliderNext.addEventListener('click', this._handleSliderNext);

        this.instances[index].mount();
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