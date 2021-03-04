/*nota al haber exportado por defecto en el wp_api.js o cualquier otro archivo js
al momento de importar se puede poner cualquier nombre*/
import { Header } from "./components/Header.js";
import { Loader } from "./components/Loader.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";
import { InfiniteScroll } from "./helpers/infinite_scroll.js";
//creamos un componente llamado app
export function App() {
    /*este componente me regurese algo, este componente se ejecuta y se monta en el archivo index.js*/
    //document.getElementById("root").innerHTML = `<h1>Bienvenidos a mi primer SPA con Vanilla JS</h1>`;
    /*lo que se hiso es que cuando se ejecute la  la funcion app
      introdusca en la propiedad inerhtml del elemento root*/
    /*ejecutamos la funcion ajax esta funcion necesita un objeto*/
    //ajax({
    //    url: api.POSTS,
    //    /*recordar que este objeto tambien debe llevar una funcion
    //    en este caso es una arrow funtion que se ejecuta en caso de tener exito */
    //    cbSuccess: (post) => {//nombre cualquiera este objeto lo envia ajax es el json que envia
    //        console.log(post);
    //    }
    //});

    /*recordar cuando se hace referencia a un elemento de dom
      hay que anteponer el signo de dolar $ */
    const $root = document.getElementById("root");
    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Loader());

    Router();
    InfiniteScroll();
}
