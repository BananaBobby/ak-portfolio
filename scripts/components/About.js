import { Component } from '../lib/component';
import registry from '../lib/registry';

class About extends Component {
  constructor(root) {
    super(root);

    this.selectors = {
      open: '.js-about__open',
      close: '.js-about__close',
      content: '.js-about__content',
    };

    this.modifiers = {
      contentActive: 'layout_about',
      linkActive: 'layout__share_active'
    };

    this.handlers = {
      'open@click': this._handleOpen,
      'close@click': this._handleClose,
    };

    this.openEl = root.querySelector(this.selectors.open);
  }

  _handleOpen = (event) => {
    event.preventDefault();
    this.openEl.classList.add(this.modifiers.linkActive);
    this.root.classList.add(this.modifiers.contentActive);
  };

  _handleClose = (event) => {
    event.preventDefault();
    this.openEl.classList.remove(this.modifiers.linkActive);
    this.root.classList.remove(this.modifiers.contentActive);
  };
}

registry.register('About', About);
