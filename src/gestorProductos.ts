class Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;

  constructor(id: number, nombre: string, precio: number, stock: number) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

class Inventario {
  private productos: Producto[] = [];

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }

  buscarPorNombre(nombre: string): Producto[] {
    return this.productos.filter(p =>
      p.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
  }

  listarProductos(): Producto[] {
    return this.productos;
  }

  calcularValorTotal(): number {
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