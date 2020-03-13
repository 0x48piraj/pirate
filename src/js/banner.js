/**
* David E Luna M <davidlunamontilla@gmail.com>
*
* Pueden utilizar el código en sus proyectos para cualquier propósito.
* También lo publiqué en Stack Overflow para sus usuarios y cualquier
* persona interesada en ello.
* URL: https://es.stackoverflow.com/questions/327843/texto-con-letra-cada-vez-m%c3%a1s-peque%c3%b1a/327936#327936
*/

let
  cantidad,
  nodo,
  tamanno,
  grados;

const elementosHTML = [];
const caracteres = figura.textContent.split("");

tamanno = cantidad = 121;
grados = 360;

figura.textContent = "";

const crearNodo = ( elemento ) => {
    return document.createElement( elemento );
}

const insertarNodo = ( nodo, nodoPadre ) => {
  nodoPadre.append( nodo );
}

const prepararNodo = ( nodo, caracter, tamanno, grados ) => {
  let nodoInterno = crearNodo( "div" );
  
  nodo.classList.add( "girar" );
  nodo.style.transform = `rotateZ(-${grados}deg)`;
  nodo.style.fontSize = `${tamanno * 0.3}px`;
  
  nodoInterno.classList.add( "flex" );

  nodoInterno.textContent = caracter;

  insertarNodo( nodoInterno, nodo );

  return nodo;
}

figura.classList.add( "flex", "figura" );

insertarNodo( simboloPI, figura );

for ( let i = 0; i < cantidad; i++ ) {
  tamanno--;
  grados -= tamanno * 0.05;
  
  nodo = crearNodo( "div" );
  nodo = prepararNodo( nodo, caracteres[i], tamanno, grados );
  
  elementosHTML.push( nodo );
}

for ( let nodo of elementosHTML )
  insertarNodo( nodo, figura );