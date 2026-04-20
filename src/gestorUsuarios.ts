interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  activo: boolean;
}

class UsuarioService {
  private usuarios: Usuario[];

  constructor(usuariosIniciales: Usuario[] = []) {
    this.usuarios = usuariosIniciales;
  }

  crear(usuario: Usuario): void {
    const existe = this.usuarios.some(u => u.id === usuario.id);
    if (existe) {
      throw new Error("El usuario con ese ID ya existe");
    }

    this.usuarios.push(usuario);
  }

  desactivar(id: number): void {
    const usuario = this.usuarios.find(u => u.id === id);

    if (!usuario) {
      throw new Error("Usuario no encontrado");
    }

    usuario.activo = false;
  }

  listarActivos(): Usuario[] {
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