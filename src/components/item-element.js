import {LitElement, html, css} from "lit-element";

/**
 * Calse que define el elemento hijo.
 */
class ItemElement extends LitElement  {
    /**
     * Se definen las propiedades del elemento.
     */
    static get properties() {
        return {
            todoList: { type: Array },
            todoItem: { type: String }
        }
    }

    /**
     * Agrega los estilos CSS del elemento.
     */
    static get styles() {
        return css`
            .contenedor-entrada {
                background-color: #5EB2EA;
                border-radius: 5px;
                padding: 5px;
                width: 100%;
            }
            
            .container-inputs {
                display: flex;
                flex-flow: column wrap;
                align-items: center;
                margin: 20px 0;
            }
            
            .container-inputs * {
                width: 90%;
                border: 0;
            }

            .container-inputs input {
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                border-bottom: 0;
                padding: 20px 0;
                font-family: 'Gotu', sans-serif;
            }
            
            .container-inputs button {
                padding: 10px 0;
                border-top: 0;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
                background-color: #ffffff;
                color: #5EB2EA;
                font-family: 'Montserrat', sans-serif;
            }

            .container-inputs button:hover {
                cursor: pointer;
                color: #2E86C1;
            }
        `;
    }

    /**
     * Se agrega el constructor del elemento.
     * Todo lo que se defina aquí sera creado antes de que el elemento sea
     * agregado al DOM.
     */
    constructor() {
        super();
        this.todoItem = "";
    }

    /**
     * Función que toma el valor del input.
     * @param {*} e 
     */
    presionaTecla(e) {
        if(e.keyCode == 13) {
            this.presionaBoton();
            e.originalTarget.value = "";
        } else {
            this.todoItem = e.originalTarget.value;
        }
    }

    /**
     * Función que toma los datos del input y los almacena dentro del "Local Storage".
     */
    presionaBoton() {
        if(this.todoItem.length > 0) {
            let listaAlmacenada = JSON.parse(localStorage.getItem("lista-todo"));
            listaAlmacenada = listaAlmacenada === null ? [] : listaAlmacenada;
    
            listaAlmacenada.push({
                id: new Date().valueOf(),
                item: this.todoItem,
                bandera: false
            });
    
            localStorage.setItem("lista-todo", JSON.stringify(listaAlmacenada));
            
            this.dispatchEvent(new CustomEvent("agergaItem", {
                bubbles: true,
                composed: true,
                detail: {
                    elementHijo: listaAlmacenada
                }
            }));

            this.todoItem = "";
        }
    }

    /**
     * Se publica el contendio que tendrá el elemento "app-polymer".
     * NOTA: Para aislar los veventos y que no afecten a todo el elemento
     * es ne necesario agregar el operador "œ" para solo aplicar el evento
     * al elemento que se requiere.
     * Ejemplo: @keyup, @click, etc.
     */
    render() {
        return html`
        <div class="contenedor-entrada">
            <div class="container-inputs">
                <input value="${this.todoItem}" @keyup="${(e) => this.presionaTecla(e)}">
                <button @click="${() => this.presionaBoton()}">Agrega Item</button>
            </div>
        </div>
        `
    }
}

/**
 * Se define el elemento personalizado.
 */
customElements.define("item-element", ItemElement);