import Estudiante from "./Estudiante";

export default class Menu {
  constructor() {
    this._estudiantes = new Estudiante();
  }

  imprimirEstudiantes() {
    this._estudiantes.forEach((estudiante, i) => {
      console.log(
        `${
          i + 1
        }- ${estudiante.getNombre()} ${estudiante.getApellidoPaterno()} ${estudiante.getApellidoMaterno()} ${estudiante.getGradoGrupo()}`
      );
    });
  }
}
