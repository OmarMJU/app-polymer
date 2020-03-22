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
    
    /**
     * Método de Polymer que detecta cuaando un cambio a ocurrido.
     */
    firstUpdated() {
        // Evento para agregar items y mostrarlos de forma dinámica.
        this.addEventListener("agergaItem", arg => this.todoList = arg.detail.elementHijo);
    }

    /**
     * Se publica el contendio que tendrá el elemento "app-polymer".
     * Nota: Para pasar datos de propiedades a atributos o atributos a propedades
     * es necesario convertirlos a tipo de dato "String", para este caso se está
     * pasando un tipo de dato "Array" y para ello usamos JSON.stringfy.
     * Para mejor referencia ver: https://20190108t174118-dot-polymer-lit-element.appspot.com/guide/properties
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