import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `app-polymer`
 * Aplicación creada desde un elemento
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class AppPolymer extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'app-polymer',
      },
    };
  }
}

window.customElements.define('app-polymer', AppPolymer);
