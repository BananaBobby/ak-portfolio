import { Component } from '../lib/component';
import registry from '../lib/registry';

const infoTemplate = (data) => `
    <div class="viewer__action-title">${data.title}</div>
    <div class="viewer__action-text">${data.description}</div>
`;

const mediaTemplate = (data) => {
    if (data.video) {
        return `
            <iframe src="https://player.vimeo.com/video/251643698?autoplay=1&muted=1" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        `;
    }

    let res = '';

    data.photos.forEach((photo, index) => {
        res += `<img class="viewer__src js-gallery__src ${!index && 'viewer__src_active'}" src="${photo}" />`;
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
            src: '.js-gallery__src'
        };

        this.modifiers = {
          active: 'viewer_active',
          actionActive: 'viewer__action_active',
          typePhoto: 'viewer_photo',
          typeVideo: 'viewer_video',
          photoActive: 'viewer__src_active',
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
                e.preventDefault();
                this.toggle(false);
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
        this.toggleAction(false);
    };

    _handlePreviewClick = (e) => {
        e.preventDefault();

        const post = JSON.parse(e.delegateTarget.getAttribute('data-post'));

        this.post = post;
        this.info.innerHTML = infoTemplate(post);
        this.media.innerHTML = mediaTemplate(post);
        this.viewer.classList.remove(this.modifiers.typePhoto, this.modifiers.typeVideo);
        this.viewer.classList.add(post.video ? this.modifiers.typeVideo : this.modifiers.typePhoto);

        this.photos = this.media.querySelectorAll(this.selectors.src);

        this.setActivePhoto(0);
        this.toggle();
    };

    _handlePrevClick = (e) => {
        e.preventDefault();

        const nextIndex = this.state.activeIndex - 1;
        this.setActivePhoto(nextIndex < 0 ? this.photos.length - 1 : nextIndex);
    };

    _handleNextClick = (e) => {
        e.preventDefault();

        const nextIndex = this.state.activeIndex + 1;
        this.setActivePhoto(nextIndex > this.photos.length - 1 ? 0 : nextIndex);
    };

    setActivePhoto = (index) => {
        if (!this.post || !this.post.photos || !this.photos) return;
        // if (index < 0 || index > this.post.photos.length - 1) return;

        this.photos.forEach(el => el.classList.remove(this.modifiers.photoActive));
        this.photos[index].classList.add(this.modifiers.photoActive);

        // this.prev.classList[index === 0 ? 'add' : 'remove'](this.modifiers.controlHidden);
        // this.next.classList[index === this.post.photos.length - 1 ? 'add' : 'remove'](this.modifiers.controlHidden);

        this.setState({ activeIndex: index });
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