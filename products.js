class product{
    constructor(id, name, descripcion, quatity){
        this.id = id;
        this.name = name;
        this.descripcion = descripcion;
        this.quatity = quatity;
    }
}
class ProductManagement{
    constructor(){
        this.listproducts = new Array();
    }
    addproduct(product){
        this.listproducts.push(product)
    }
    removeProduct(product){
        for(var i=0; i< this.listproducts.length; i++){
            if(this.listproducts[i] == product){
                this.listproducts.splice(i, 1);
                return true;
            }

        }
        return false;
    }
}
export{product, ProductManagement}