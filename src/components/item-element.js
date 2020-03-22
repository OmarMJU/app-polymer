import {LitElement, html} from "lit-element";

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
                done: false
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
        <div>
            <input value="${this.todoItem}" @keyup="${(e) => this.presionaTecla(e)}">
            <button @click="${() => this.presionaBoton()}">Agrega Item</button>
        </div>
        `
    }
}

/**
 * Se define el elemento personalizado.
 */
customElements.define("item-element", ItemElement);