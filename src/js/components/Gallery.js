import Player from '@vimeo/player';
import { Component } from '../lib/component';
import registry from '../lib/registry';

const infoTemplate = (data) => `
    <div class="viewer__action-title">${data.title}</div>
    <div class="viewer__action-text">${data.description}</div>
`;

const isVideo = url => url.includes('vimeo.com');

const mediaTemplate = (data) => {
    let res = '';

    if (!data.media) return res;

    data.media.forEach((url, index) => {
        if (isVideo(url)) {
            res += `
                <div class="viewer__slide js-gallery__slide ${!index && 'viewer__slide_active'}">
                  <iframe src="${url}" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
            `;
            return;
        }

        res += `
            <div class="viewer__slide js-gallery__slide ${!index && 'viewer__slide_active'}">
                ${data.soon ? `<div class="viewer__badge">Coming soon</div>` : ''}    
                <img class="viewer__src" src="${url}" />
            </div>
        `;
    });

    return res;
};

class Gallery extends Component {
    constructor(root) {
        super(root);

        this.selectors = {
            preview: '.js-gallery__preview',
            viewer: '.js-gallery__viewer',
            close: '.js-gallery__close',
            action: '.js-gallery__action',
            actionButton: '.js-gallery__action-button',
            actionInfo: '.js-gallery__info',
            media: '.js-gallery__media',
            prev: '.js-gallery__prev',
            next: '.js-gallery__next',
            slide: '.js-gallery__slide'
        };

        this.modifiers = {
          active: 'viewer_active',
          actionActive: 'viewer__action_active',
          actionHidden: 'viewer__action-button_hidden',
          typePhoto: 'viewer_photo',
          typeVideo: 'viewer_video',
          slideActive: 'viewer__slide_active',
          controlHidden: 'viewer__control_hidden'
        };

        this.state = {
            active: false,
            actionActive: false,
            activeIndex: 0,
        };

        this.handlers = {
            'close@click': this._handleClose,
            'preview@click': this._handlePreviewClick,
            'actionButton@click': this._handleActionClick,
            'prev@click': this._handlePrevClick,
            'next@click': this._handleNextClick,
            'window@keydown': this._handleKeyDown,
        };

        this.viewer = root.querySelector(this.selectors.viewer);
        this.action = root.querySelector(this.selectors.action);
        this.actionButton = root.querySelector(this.selectors.actionButton);
        this.info = root.querySelector(this.selectors.actionInfo);
        this.media = root.querySelector(this.selectors.media);
        this.prev = root.querySelector(this.selectors.prev);
        this.next = root.querySelector(this.selectors.next);
    }

    _handleKeyDown = (e) => {
        if (!this.state.active) return;

        switch (e.which) {
            case 37: {
                this._handlePrevClick(e);
                break;
            }

            case 39: {
                this._handleNextClick(e);
                break;
            }

            case 27: {
                this._handleClose(e);
                break;
            }
        }
    };

    _handleActionClick = (e) => {
        e.preventDefault();
        this.toggleAction();
    };

    _handleClose = (e) => {
        e.preventDefault();
        this.toggle();
        this.togglePlayer(false);
        this.toggleAction(false);
    };

    _handlePreviewClick = (e) => {
        e.preventDefault();

        const post = JSON.parse(e.delegateTarget.getAttribute('data-post'));

        this.post = post;
        this.info.innerHTML = post.description ? infoTemplate(post) : '';
        this.actionButton.classList.toggle(this.modifiers.actionHidden, !post.description);
        this.media.innerHTML = mediaTemplate(post);
        this.viewer.classList.remove(this.modifiers.typePhoto, this.modifiers.typeVideo);
        this.viewer.classList.add(post.video ? this.modifiers.typeVideo : this.modifiers.typePhoto);

        this.slides = this.media.querySelectorAll(this.selectors.slide);

        this.setActiveSlide(0);
        this.toggle();
        this.togglePlayer(true);
    };

    _handlePrevClick = (e) => {
        e.preventDefault();

        const nextIndex = this.state.activeIndex - 1;
        this.togglePlayer(false);
        this.setActiveSlide(nextIndex);
        this.togglePlayer(true);
    };

    _handleNextClick = (e) => {
        e.preventDefault();

        const nextIndex = this.state.activeIndex + 1;
        this.togglePlayer(false);
        this.setActiveSlide(nextIndex);
        this.togglePlayer(true);
    };

    setActiveSlide = (index) => {
        if (!this.post || !this.post.media || !this.slides) return;
        if (index < 0 || index > this.post.media.length - 1) return;

        this.player = null;

        this.slides.forEach(el => el.classList.remove(this.modifiers.slideActive));
        this.slides[index].classList.add(this.modifiers.slideActive);

        this.prev.classList[index === 0 ? 'add' : 'remove'](this.modifiers.controlHidden);
        this.next.classList[index === this.post.media.length - 1 ? 'add' : 'remove'](this.modifiers.controlHidden);

        this.setState({ activeIndex: index });

        if (isVideo(this.post.media[index])) {
            const iframe = this.slides[index].querySelector('iframe');
            this.player = new Player(iframe);
        }
    };

    togglePlayer = (isActive) => {
      if (this.player && !isActive) this.player.pause();
      if (this.player && isActive) this.player.play();
    };

    toggle = (flag) => {
        const isActive = flag !== undefined ? flag : !this.state.active;

        this.viewer.classList[isActive ? 'add' : 'remove'](this.modifiers.active);
        this.setState({ active: isActive });

        if (isActive) {
            this._preventBodyScroll()
        } else {
            this._releaseBodyScroll();
        }
    };

    _preventBodyScroll() {
        this._overflowStyle = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
    }

    _releaseBodyScroll() {
        document.body.style.overflow = this._overflowStyle;
    }

    toggleAction = (flag) => {
        const isActive = flag !== undefined ? flag : !this.state.actionActive;

        this.action.classList[isActive ? 'add' : 'remove'](this.modifiers.actionActive);
        this.setState({ actionActive: isActive });
    };

    onMount() {}
}

registry.register('Gallery', Gallery);