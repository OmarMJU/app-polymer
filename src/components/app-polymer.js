import {LitElement, html} from "lit-element";
import "./item-element"

/**
 * Elemento base para la aplicación.
 * Clase que representa el elemento.
 */
class AppPolymer extends LitElement {
    /**
     * Se agregan las propiedades del elemento.
     */
    static get properties() {
        return {
            todoList: { type: Array }
        }
    }

    /**
     * Se agrega el constructor del elemento.
     * Todo lo que se defina aquí sera creado antes de que el elemento sea
     * agregado al DOM.
     */
    constructor() {
        super();
        this.todoList = [];
    }

    /**
     * Se publica el contendio que tendrá el elemento "app-polymer".
     */
    render() {
        return html`
        <h1>Hola mundo</h1>
        <item-element></item-element>
        `;
    }
}

/**
 * Se define el elemento personalizado.
 */
customElements.define("app-polymer", AppPolymer);