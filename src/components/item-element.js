import {LitElement, html} from "lit-element";

class ItemElement extends LitElement {
    static get properties() {
        return {
            todoList: { type: Array },
            todoItem: { type: String }
        }
    }

    constructor() {
        super();
        this.todoItem = "";
    }

    presionaTecla(e) {
        if(e.keyCode == 13) {
            this.presionaBoton();
        } else {
            this.todoItem = e.originalTarget.value;
        }
    }

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
            this.todoItem = "";
        }
    }

    render() {
        return html`
        <div>
            <input value="${this.todoItem}" @keyup="${(e) => this.presionaTecla(e)}">
            <button @click="${() => this.presionaBoton()}">Agrega Item</button>
        </div>
        `
    }
}

customElements.define("item-element", ItemElement);