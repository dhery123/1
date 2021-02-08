import product from "./products";
import ProductManagement from "./products";
class UI{
    constructor(){
        this.form = document.getElementById("form");
        console.log("LOAD");
        this.loadEvents();
    }
    loadEvents(){
        this.form.addEventListener("submit", (e) =>{
            e.preventDefault();
        })
    }
}
var init  = new UI();