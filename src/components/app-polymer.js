import {LitElement, html} from "lit-element";
import "./item-element"

class AppPolymer extends LitElement {
    static get properties() {
        return {
            todoList: { type: Array }
        }
    }

    constructor() {
        super();
        this.todoList = [];
    }

    render() {
        return html`
        <h1>Hola mundo</h1>
        <item-element></item-element>
        `;
    }
}

customElements.define("app-polymer", AppPolymer);