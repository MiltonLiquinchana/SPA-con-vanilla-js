/*como en el index.html se esta montando el index.js
aqui tenemos que importar el archivo App.s */
import { App } from "./App.js";//como estan al mismo nivel solo colocamos el nombre
import api from "./helpers/wp_api.js";
/*en que momento quiero que se ejecute 
ya que este archivo tambien va a ejecutar sus propias funciones y eventos */
/*aqui le decimos que cuando se ejecute la carga del dom, carga el componente App */
document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", ()=>{
    api.page=1;
    App();
});//para que se ejecute cuando se detecte algun cambio en la url #
