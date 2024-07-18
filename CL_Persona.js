export default class CL_Persona{
    constructor(nombre, edad, sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.sumaEdades = 0;
        this.contadorPersonas = 0;
        this.edadMayorMujer = 0;
    }

    set nombre(e){
        this._nombre = +e;
    }

    get nombre(){
        return this._nombre;
    }

    set edad(e){
        this._edad = +e;
    }

    get edad(){
        return this._edad;
    }

    set sexo(e){
        this._sexo = e;
    }

    get sexo(){
        return this._sexo;
    }

    procesarPersona(e) {
        this.sumaEdades += e.edad;
        this.contadorPersonas++;

        if (e.sexo == "F") {
            if (e.edad > this.edadMayorMujer) {
                this.edadMayorMujer = e.edad;
            }
        }
    }

    calcularEdadPromedio() {
        return this.sumaEdades / this.contadorPersonas;
    }
}