const { readFileSync } = require('fs');

// import app from './js/app';
class Tabs {
  constructor({ rootSelector, activeControlClass = 'active' }) {
    this._refs = this._getRefs(rootSelector);
    this._activeControlClass = activeControlClass;
    this._bindEvents();
  }
  _getRefs(root) {
    const refs = {};
    refs.controls = document.querySelector(`${root} [data-controls]`);
    refs.panes = document.querySelector(`${root} [data-panes]`);
    return refs;
  }
  _bindEvents() {
    this.refs.controls.addEventListener(
      'click',
      this.onControlsClick.bind(this),
    );
  }
  _onControlsClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'A') {
      return;
    }
    const currentActiveControlItem = refs.controls.querySelector(
      `.${this._activeControlClass}`,
    );
  }
}
const tabs1 = new Tabs({
  rootSelector: '#tabs-1',
  activeControlClass: 'control-item--active',
});
console.log(tabs1);
