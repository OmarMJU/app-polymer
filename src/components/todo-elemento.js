import {LitElement, html} from "lit-element";

class TodoElemento extends LitElement {
    static get properties() {
        return {
            elemento: { type: Object }
        }
    }

    constructor() {
        super();
        this.elemento = {};
    }

    render() {
        return html`
        <li>${this.elemento.item}</li>
        `;
    }
}

customElements.define("todo-elemento", TodoElemento);