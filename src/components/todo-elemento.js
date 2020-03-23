import {LitElement, html} from "lit-element";

/**
 * Clase para definir el elemento que tendrá los items
 * de la lsta.
 */
class TodoElemento extends LitElement {
    /**
     * Se definene las propiedades del elemento.
     */
    static get properties() {
        return {
            elemento: { type: Object }
        }
    }

    /**
     * Se define el constructor. Acá van las variables o elementos que
     * se tienen que inicializar.
     */
    constructor() {
        super();
        this.elemento = {};
    }

    /**
     * Función para eliminar los elementos del LocalStorage.
     * @param {*} id 
     */
    borraElemento(id) {
        this.dispatchEvent(new CustomEvent("eliminaElemento", {
            bubbles: true,
            composed: true,
            detail: {
                elementoEl: id
            }
        }));
    }

    /**
     * Se define el tipo de elemento.
     */
    render() {
        return html`
        <li>${this.elemento.item}</li>
        <button @click="${() => this.borraElemento(this.elemento.id)}">x</button>
        `;
    }
}

/**
 * Se publica el elemento.
 */
customElements.define("todo-elemento", TodoElemento);