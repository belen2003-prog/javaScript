//declaracion de las var a , b y c
let a = 5;
let b= 10;
let c =a+b;
//mostrar en consola
console.log("la suma de a y b es : "+c);
//ingresa nombre y lo saludo
  let nombre = prompt("Por favor, ingresa tu nombre:");
console.log("Hola, " + nombre + "!");


/*comparadores
== veo que de los dos lados del igual tenga el mismo valor
=== comparo el tipo y el valor 
!= comparo contenidos
!== comparo contenido y tipo de dato
*/

//operadores logicos y condicionales
if(a>b && a>c){
 console.log("el mayor de los 3 numeros es:  " + a);
 
}else if (b>a && b>c){
 
    console.log("el mayor de los 3 numeroses : "+b);
  
}else if(c>a && c>b){
    console.log("el mayor de los 3 es :"+c);
}
//decir si es impar
let numero = prompt("ingrese un numero y t dire si es par p impar")
if (numero % 2 ==0){
  console.log("el nimero "+ numero +", es par");
}else {
  console.log("el numero "+ numero +", es impar")
}


//operadores de asignacion y bucles
console.log("Ejercicio 3");
let bandera =10;
while(bandera>0){
  console.log(bandera);
  bandera--;
}

//ingresar numero mayor que 100 y do while hasta que ingrese uno mayor que 100
let numerodw;
do{
   numerodw = prompt("ingresa un numero mayor a 100:")
}while (numerodw<=100){
  console.log("ingresaste un numero mayor a 100: "+ numerodw);
}



//funciones
//ej1
const esPar = (num) => {
  if(num%2 ==0){
    let bool = true;
    console.log("El numero "+num+" es par: "+bool)
  }else{
    let bool = false;
    console.log(" El numero "+num+" es par: "+bool)
  }
}
 esPar(8);
 esPar(7);
//ej2
let f ;
const convertirCelsiusAFahremheit = (cels) => {
  f= cels * (1.8) + 32 ;
  console.log(cels+"°C son equivalentes a " + f +"°F")
}
 
convertirCelsiusAFahremheit(30);

//objetos en jS
let persona ={
  nombre: "belen",
  edad:21,
  ciudad:"bs as" 

}
const ActualizarCiudad = (ciu) => {
 persona.ciudad=ciu;
}
ActualizarCiudad("barcelona");
console.log("persona:"+persona.nombre +", edad: "+ persona.edad+", ciudad: " + persona.ciudad)

//ej obj 2

let libro ={
  titulo:"El Quijote",
  autor:"servantes",
  año:1990,
}
let antiguedad=false;
const antiguo = (añ)=>{
  if (libro.año< 2014){
    antiguedad =true;
    console.log("El libro "+libro.titulo +" es antiguo: "+ antiguedad)
  }else{
    antiguedad =false;
    console.log("El libro "+libro.titulo +" es antiguo: "+ antiguedad)
  }
}
antiguo(libro.año);

//6.arrays
//ej1
let numeros = [1,2,3,4,5,6,7,8,9,10];
console.log("numeros originales: "+numeros);
let elemento;
let arrNumeros = numeros.map((elemento) =>{
return elemento*2;
});
console.log("numeros multiplicados por 2 :"+arrNumeros);

//ej2
let pares = [];
for (let i=1; i<=20; i++){
  if(i % 2===0){
    if(pares.length<10){
      pares.push(i);
    }
  }
}
console.log("primeros 10 numeros pares: "+pares);

//introduccion al dom:arbol de nodos que compone todo mi html.puedo alterar todo mi html con javascript
//7.1
//const button = document.getElementById("button");
//console.log(button);

function azulbutton(){
  const texto = document.getElementsByTagName("p");
  for (let i = 0; i < texto.length; i++) {
    texto[i].style.color = "blue";
  }
}

//7.2
  function alerta(){
  const t =document.getElementById("textoo").value;
  alert("has ingresado: "+ t);

}   //no me sale hacer que luego de ingresar algo me muestre la alerta y no antes
//8.1 eventos en el dom
const lista = document.getElementsByTagName("li");
for(let i=0; i< lista.length; i++){
  lista[i].addEventListener("click", function() {
    console.log(this.textContent);
  });
}

//8.2

function deshabilitarCampo(){
   document.getElementById("texto3").disabled = true;
}

function habilitarCampo(){
  const campo = document.getElementById("texto3").disabled = false;
}

//local storage 9
function guardar(){
  const email =document.getElementById("email").value;
  localStorage.setItem("datos",
    JSON.stringify({
      email
    })
  );
  console.log("correo guardado "+email);

}

function eliminar(){
  const result =localStorage.getItem("datos");
  if(result){
    localStorage.removeItem("datos");
    console.log("correo eliminado");

  }else{
    console.log("no hay datos")
  }
}

