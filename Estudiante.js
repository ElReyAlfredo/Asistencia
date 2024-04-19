class Estudiante {
  constructor(nombres, apellidoPa, apellidoMa, numCuenta, gradoGrupo) {
    this.setNombre(nombres);
    this.setApellidoPaterno(apellidoPa);
    this.setApellidoMaterno(apellidoMa);
    this.setNumeroCuenta(numCuenta);
    this.setGradoGrupo(gradoGrupo);
    this.asistencia = 0; // Inicializamos la asistencia en 0
  }

  // Métodos para obtener los atributos
  getNombre() {
    return this.nombres;
  }

  getApellidoPaterno() {
    return this.apellidoPa;
  }

  getApellidoMaterno() {
    return this.apellidoMa;
  }

  getNumeroCuenta() {
    return this.numCuenta;
  }

  getGradoGrupo() {
    return this.gradoGrupo;
  }

  // Métodos para establecer los atributos si se necesitan
  setNombre(nombres) {
    const expresionRegular = /^[a-zA-Z]+(\s[a-zA-Z]+)?$/;
    if (!expresionRegular.test(nombres)) {
      alert("Favor de introducir tus nombres en texto plano.");
      return false;
    } else {
      this.nombres = nombres;
      return true;
    }
  }

  setApellidoPaterno(apellidoPa) {
    const expresionRegular = /^[a-zA-Z]+$/;
    if (!expresionRegular.test(apellidoPa)) {
      alert("Apellido paterno inválido. Puras letras por favor.");
      return false;
    } else {
      this.apellidoPa = apellidoPa;
      return true;
    }
  }

  setApellidoMaterno(apellidoMa) {
    const expresionRegular = /^[a-zA-Z]+$/;
    if (!expresionRegular.test(apellidoMa)) {
      alert("Apellido materno inválido. Puras letras por favor.");
      return false;
    } else {
      this.apellidoMa = apellidoMa;
      return true;
    }
  }

  setNumeroCuenta(numCuenta) {
    const expresionRegular = /^[0-9]{8}$/;
    if (!expresionRegular.test(numCuenta)) {
      alert(
        "En el número de cuenta solo se admiten caracteres numéricos y deben ser 8 dígitos."
      );
      return false;
    } else {
      this.numCuenta = numCuenta;
      return true;
    }
  }

  setGradoGrupo(gradoGrupo) {
    const expresionRegular = /^[1-8][A-K]$/;
    if (!expresionRegular.test(gradoGrupo)) {
      alert("Ese grupo no existe.");
      return false;
    } else {
      this.gradoGrupo = gradoGrupo;
      return true;
    }
  }

  // Método para establecer la asistencia
  setAsistencia(asistenciaMarcada) {
    if (asistenciaMarcada) {
      // Asignar la asistencia con base en las condiciones
      let grado = parseInt(this.gradoGrupo[0]);
      let grupo = this.gradoGrupo[1];

      // Verificar si el estudiante pertenece al grupo 7G
      if (this.gradoGrupo === "7G") {
        this.asistencia = 0;
      } else {
        // Asistencia cuenta doble si el grupo es A, B o C
        let cuentaDoble = grupo === "A" || grupo === "B" || grupo === "C";
        // Asistencia cuenta triple si el grado es 4 o mayor
        let cuentaTriple = grado >= 4;

        // Calcular la asistencia según las condiciones
        this.asistencia = 1;
        if (cuentaDoble && cuentaTriple) {
          this.asistencia *= 5;
        } else if (cuentaDoble) {
          this.asistencia *= 2;
        } else if (cuentaTriple) {
          this.asistencia *= 3;
        }
      }
    } else {
      // Si la asistencia no está marcada, no se cuenta la asistencia
      this.asistencia = 0;
    }
  }

  esValido() {
    if (
      this.setNombre(this.nombres) &&
      this.setApellidoPaterno(this.apellidoPa) &&
      this.setApellidoMaterno(this.apellidoMa) &&
      this.setNumeroCuenta(this.numCuenta) &&
      this.setGradoGrupo(this.gradoGrupo)
    ) {
      return;
    } else {
      return false;
    }
  }
}

// Exportar la clase Estudiante
export default Estudiante;
