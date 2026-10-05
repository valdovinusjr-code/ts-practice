type Producto = {
    producto: string[]
    prodprecio: any[]
}

const logistica: Producto = {
    producto: ["Laptop", "Mouse", "Teclado"],
    prodprecio: [1000, 25, "50"]
}


function calculateTotal(precio: number[], applyDiscount: boolean) {
    let Total = 0
    for(let i = 0; i < precio.length; i++){
        Total+=precio[i]
    }

    if(applyDiscount === true){
        Total=Total*0.9
    }

    return "Total $: " + Total
}

const logica = calculateTotal([2, 3, 4], true)
console.log(logica)