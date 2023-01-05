var inputhora = document.getElementById("hora").value;
var inputminuto = document.getElementById("minuto").value;
var inputsegundo = document.getElementById("segundo").value;

class Reloj {
    constructor(hora, minuto, segundo) {
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
        this.sentido = true;
        this.estado = true;
    };

}