import {LitElement, html} from "lit-element";
import "./item-element"
import "./list-elements"

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
        let lista = JSON.parse(localStorage.getItem("lista-todo"));
        this.todoList = lista === null ? [] : lista;
    }
    
    firstUpdated() {
        this.addEventListener("agergaItem", arg => this.todoList = arg.detail.elementHijo);
    }
    /**
     * Se publica el contendio que tendrá el elemento "app-polymer".
     */
    render() {
        return html`
        <h1>Hola mundo</h1>
        <item-element></item-element>
        <list-elements todoList="${JSON.stringify(this.todoList)}"></list-elements>
        `;
    }
}

/**
 * Se define el elemento personalizado.
 */
customElements.define("app-polymer", AppPolymer);