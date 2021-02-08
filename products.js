class Product{
    constructor(id, name, descripcion, quatity){
        this.id = id;
        this.name = name;
        this.descripcion = descripcion;
        this.quatity = quatity;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getDescripcion(){
        return this.descripcion;
    }
    getQuantity(){
        return this.quatity;
    }
}
class ProductManagement{
    constructor() {
        this.listproducts = new Array();
    }
    addProduct(name, descripcion, quatity) {
        var date = new Date();
        var product = new Product(date, name, descripcion, quatity);
        this.listproducts.push(product);
    }
    
    removeProduct(product)
    {
        for (var i=0; i< this.listproducts.length; i++){
            if(this.listproducts[i] == product){
                this.listproducts.splice(i, 1);
                return true;
            }

        }
        return false;
    }
    updateProducts(product, updateproduct){
        for(var i=0; i < this.listproducts.length; i++){
            if (this.listproducts[i] == product){
                this.listproducts[i] = updateproduct;
                return true
            }
        }
        return false
    }
    getList(){
        return this.listproducts;
    }
}
export {ProductManagement};