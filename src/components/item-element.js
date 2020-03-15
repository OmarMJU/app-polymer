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
        this.addEventListener("keyup", this.presionaTecla);
        this.addEventListener("click",  this.presionaBoton);
    }

    presionaTecla(e) {
        if(e.keyCode == 13) {
            console.log("Te caché, presionaste enter!!");
        } else {
            this.todoItem = e.originalTarget.value;
        }
    }

    presionaBoton() {
        console.log("Has presionado el boton.");
    }

    render() {
        const props = this;

        return html`
        <div>
            <input value="${props.todoItem}" keyup="${(e) => this.presionaTecla(e)}">
            <button click="${() => props.presionaBoton}">Presioname</button>
        </div>
        `
    }
}

customElements.define("item-element", ItemElement);