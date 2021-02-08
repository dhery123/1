import { ProductManagement } from "./products.js";
var p = new ProductManagement();
p.addProduct("Pollo", "Pollo sofia", 12);
var lista = p.getList();
console.log(lista);