const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const pedido = document.getElementById("pedido");
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", e=>{
  e.preventDefault(e);
   // formulario.addEventListener("submit", function(e){
     // e.preventDefault();

    var emailExReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if(nombre.value.length <1 ){
      alert("Completa tu nombre");
  }
  if(apellido.value.length <1){
    alert("Completa tu Apellido");
}
if (!emailExReg.test(email.value)){
    alert("El email no es valido");

 } 
 if (telefono.value === "") {
        alert("Completa tu telefono");}

if (pedido.value.length <1){
  alert("Completa tu Pedido");
  return false;
}})


