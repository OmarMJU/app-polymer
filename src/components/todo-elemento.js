import {LitElement, html, css} from "lit-element";

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

    static get styles() {
        return css`
            .lista-elemento {
                list-style: none;
                font-family: 'Abel', sans-serif;
                border: 1px solid black;
                margin: 10px 0;
                padding: 5px 0;
                border-radius: 5px;
            }

            .lista-elemento .contenedor-entradas-hijos {
                display: flex;
                justify-content: space-between;
            }

            .lista-elemento .contenedor-entradas-hijos .etiqueta {
                text-align: center;
            }
        `;
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
     * Revisa el cambio del checkbox.
     * El estatus del checker funciona algo raro.
     * Para más información ver: https://stackoverflow.com/questions/55962214/litelement-not-updating-checkbox-in-list
     * @param {*} id 
     */
    cambBand(id) {
        this.dispatchEvent(new CustomEvent("cambiaElemento", {
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
        <li class="lista-elemento">
            <div class="contenedor-entradas-hijos custom-control custom-checkbox">
                <input id="checkEntrada" class="custom-control-input" type="checkbox" .checked="${this.elemento.bandera}" @click="${() => this.cambBand(this.elemento.id)}" />
                <label class="custom-control-label etiqueta" for="checkEntrada">
                    ${this.elemento.item}
                </label>
                <button @click="${() => this.borraElemento(this.elemento.id)}">x</button>
            </div>
        </li>
        `;
    }
}

/**
 * Se publica el elemento.
 */
customElements.define("todo-elemento", TodoElemento);