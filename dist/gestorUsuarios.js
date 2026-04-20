"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuarioService {
    usuarios;
    constructor(usuariosIniciales = []) {
        this.usuarios = usuariosIniciales;
    }
    crear(usuario) {
        const existe = this.usuarios.some(u => u.id === usuario.id);
        if (existe) {
            throw new Error("El usuario con ese ID ya existe");
        }
        this.usuarios.push(usuario);
    }
    desactivar(id) {
        const usuario = this.usuarios.find(u => u.id === id);
        if (!usuario) {
            throw new Error("Usuario no encontrado");
        }
        usuario.activo = false;
    }
    listarActivos() {
        return this.usuarios.filter(u => u.activo);
    }
}
const service = new UsuarioService([
    { id: 1, nombre: "Juan", correo: "juan@mail.com", activo: true },
    { id: 2, nombre: "Ana", correo: "ana@mail.com", activo: true },
    { id: 3, nombre: "Luis", correo: "luis@mail.com", activo: false }
]);
console.log("Activos:", service.listarActivos());
service.desactivar(1);
console.log("Activos después:", service.listarActivos());
