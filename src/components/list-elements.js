import {LitElement, html} from "lit-element";

class ListaElementos extends LitElement  {
    /**
     * Se crean las propiedades para el elemento.
     */
    static get properties() {
        return {
            todoList: { type: Array }
        }
    }

    /**
     * Se define el constructor de la clase.
     */
    constructor() {
        super();
        this.todoList = [];
    }
    
    /**
     * función render para publicar el elemento.
     */
    render() {
        return html`
        <ul>${this.todoList.map(hijo => html`<li>${hijo.item}</li>`)}</ul>
        `
    }
}

/**
 * Se publica el elemento.
 */
customElements.define("list-elements", ListaElementos);