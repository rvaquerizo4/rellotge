class Clock {
    constructor(h = new Date().getHours(), m = new Date().getMinutes(), s = new Date().getSeconds()) {
      this.hora = h;
      this.minut = m;
      this.segon = s;
      this.sentit = true;
      this.estat = false;
    }
  
    arrenca(sentit = true) {
      this.sentit = sentit;
      this.estat = true;
    }
  
    atura() {
      this.estat = false;
    }
  
    pausa() {
      this.estat = false;
    }
  
    reset() {
      this.hora = 0;
      this.minut = 0;
      this.segon = 0;
      this.estat = false;
    }
  
    set(h, m, s) {
      this.hora = h;
      this.minut = m;
      this.segon = s;
    }
  
    formata() {
      let h = this.hora.toString().padStart(2, '0');
      let m = this.minut.toString().padStart(2, '0');
      let s = this.segon.toString().padStart(2, '0');
      return `${h}:${m}:${s}`;
    }
  }
  

// Creem les instàncies de Clock
let clock1 = new Clock();
let clock2 = new Clock(0, 0, 0);
let clock3 = new Clock(0, 5, 0);

// Arrenquem el primer rellotge
clock1.arrenca();

// Després de 10 segons, arrenquem el segon rellotge com a cronòmetre
setTimeout(() => {
    clock2.arrenca();
    //Para que el tiempo avance
      setInterval(() => {
          if (clock2.segon == 59){
              clock2.minut += 1;
              clock2.segon = 0;
          }
          else{
              clock2.segon += 1;
          }
  
          if (clock2.minut == 59){
              clock2.hora += 1;
              clock2.minut = 0;
          }
          document.getElementById("clock2").innerHTML = clock2.formata();
    }, 1000);
  }, 10000);

// Arrenquem el tercer rellotge com a temporitzador
clock3.arrenca(false);
setInterval(() => {
    if (clock3.minut == 05 && clock2.minut % 2 != 0 && clock3.minut > -1){
        clock3.minut -= 1;
        clock3.segon = 59;
    }
    if (clock3.segon < 60 && clock2.minut % 2 != 0 && clock3.minut > -1){
        clock3.segon -= 1;
    }

    if (clock3.segon == 00 && clock2.minut % 2 != 0 && clock3.minut > -1){
        clock3.minut -= 1;
        clock3.segon = 59;
    }
    document.getElementById("clock2").innerHTML = clock2.formata();
}, 1000);

// Mentre el segon rellotge tingui minuts parells, el tercer rellotge entra en mode pausa
setInterval(() => {
  if (clock2.minut % 2 === 0) {
    clock3.pausa();
  } else {
    clock3.arrenca(false);
  }
  document.getElementById("clock3").innerHTML = clock3.formata();
}, 1000);

//Actualizamos el valor en el DIV
setInterval(() => {
    document.getElementById("clock1").innerHTML = clock1.formata();
    document.getElementById("clock2").innerHTML = clock2.formata();
  }, 1000);

//Para que el tiempo avance
setInterval(() => {
    let d = new Date();
    clock1.hora = d.getHours();
    clock1.minut = d.getMinutes();
    clock1.segon = d.getSeconds();
    document.getElementById("clock1").innerHTML = clock1.formata();
  }, 1000);


function para1(){
    clock1.atura()
}

function para2(){
    clock2.atura()
}

function para3(){
    clock3.atura()
}

function arrenca1(){
    clock1.arrenca();
}

function arrenca2(){
    clock2.arrenca();
}

function arrenca3(){
    clock3.arrenca();
}

function reset1(){
    clock1.reset();
}

function reset2(){
    clock2.reset();
}

function reset3(){
    clock3.reset();
}


//tests
function test() {
    // Inicializar relojes
    var reloj1 = new Clock();
    var reloj2 = new Clock(0, 0, 0);
    var reloj3 = new Clock(0, 5, 0);
  
    // Comprobar que se han inicializado correctamente
    console.log(reloj1.formata());
    console.log(reloj2.formata());
    console.log(reloj3.formata());
  
    // Comprobar que se pueden arrancar los relojes
    reloj1.arrenca();
    reloj2.arrenca();
    reloj3.arrenca(false);
  
    // Comprobar que se pueden parar los relojes
    reloj1.atura();
    reloj2.atura();
    reloj3.atura();
  
    // Comprobar que se pueden resetear los relojes
    reloj1.reset();
    reloj2.reset();
    reloj3.reset();
}