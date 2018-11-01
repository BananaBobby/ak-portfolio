import { Component } from '../lib/component';
import registry from '../lib/registry';

class ContentSlider extends Component {
    constructor(root, props) {
        super(root);

        this.selectors = {
            scroll: '.js-content-slider__scroll',
            item: '.js-content-slider__item',
            control: '.js-content-slider__control',
            reset: '.js-content-slider__reset',
            prev: '.js-content-slider__control-prev',
            next: '.js-content-slider__control-next',
        };

        this.modifiers = {
            controlHidden: 'layout__control--hidden',
        };

        this.props = {
            ...props,
        };

        this.state = {
            activeIndex: 0,
            prevIndex: -1,
            nextIndex: 1,
        };

        this.handlers = {
            'reset@click': this._handleReset,
            'window@keydown': this._handleKeyDown,
            'scroll@scroll': this._handleScroll,
        };

        this.items = this.root.querySelectorAll(this.selectors.item);
        this.scroll = this.root.querySelector(this.selectors.scroll);
    }

    _handleScroll = () => {
        const height = this.scroll.clientHeight;
        const scroll = this.scroll.scrollTop;
        const remain = scroll % height;
        let prevIndex = Math.floor(scroll / height);
        if (remain === 0) prevIndex -= 1;

        let nextIndex = Math.floor(scroll / height) + 1;
        // if (remain === 0) nextIndex += 1;

        this.setState({ prevIndex, nextIndex });

        if (this.props.onScroll) {
            this.props.onScroll({
              isFirst: prevIndex < 0,
              isLast: nextIndex >= this.items.length,
            })
        }
    };

    _handleReset = () => {
        this.setSlide(0);
    };

    _handleKeyDown = (e) => {
        switch (e.which) {
            case 40: {
                e.preventDefault();
                this.setNextSlide();
                break;
            }

            case 38: {
                e.preventDefault();
                this.setPreviousSlide();
                break;
            }

            case 27: {
                // this._handleReset();
                // break;
            }
        }
    };

    setNextSlide = () => {
        const index = this.setSlide(this.state.nextIndex);

        return { index, isLast: index === this.items.length - 1, isFirst: index === 0 };
    };

    setPreviousSlide = () => {
        const index = this.setSlide(this.state.prevIndex);

        return { index, isLast: index === this.items.length - 1, isFirst: index === 0 };
    };

    setSlide = (index) => {
        const realIndex = Math.min(Math.max(0, index), this.items.length - 1);
        const item = this.items[realIndex];

        if (!item) return;

        const prevIndex = realIndex - 1;
        const nextIndex = realIndex + 1;

        item.scrollIntoView({ behavior: 'smooth' });
        this.setState({ prevIndex, nextIndex });

        return realIndex;
    };

    onMount() {}
}

registry.register('ContentSlider', ContentSlider);