class Calculadora {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  sumar(a: number, b: number): number {
    return a + b;
  }

  restar(a: number, b: number): number {
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  dividir(a: number, b: number): number {
    if (b === 0) {
      throw new Error("No se puede dividir entre cero");
    }
    return a / b;
  }

  calcular(operacion: string, a: number, b: number): number {
    switch (operacion) {
      case "sumar":
        return this.sumar(a, b);
      case "restar":
        return this.restar(a, b);
      case "multiplicar":
        return this.multiplicar(a, b);
      case "dividir":
        return this.dividir(a, b);
      default:
        throw new Error("Operación no válida");
    }
  }
}

const calc = new Calculadora("Mi calculadora");

console.log(calc.calcular("sumar", 10, 5));        
console.log(calc.calcular("restar", 10, 5));       
console.log(calc.calcular("multiplicar", 10, 5));   
console.log(calc.calcular("dividir", 10, 5));      