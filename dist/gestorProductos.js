"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Producto {
    id;
    nombre;
    precio;
    stock;
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}
class Inventario {
    productos = [];
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    buscarPorNombre(nombre) {
        return this.productos.filter(p => p.nombre.toLowerCase().includes(nombre.toLowerCase()));
    }
    listarProductos() {
        return this.productos;
    }
    calcularValorTotal() {
        return this.productos.reduce((total, p) => {
            return total + (p.precio * p.stock);
        }, 0);
    }
}
const inventario = new Inventario();
inventario.agregarProducto(new Producto(1, "Laptop", 3000, 5));
inventario.agregarProducto(new Producto(2, "Mouse", 50, 10));
inventario.agregarProducto(new Producto(3, "Teclado", 100, 7));
console.log("Listado:", inventario.listarProductos());
console.log("Buscar 'lap':", inventario.buscarPorNombre("lap"));
console.log("Valor total:", inventario.calcularValorTotal());
