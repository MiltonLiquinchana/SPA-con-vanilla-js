import api from "../helpers/wp_api.js";

export function Title() {
    /*creamos una variable del dom recordar que cuando se ase referencia a variables que hacen referencia a elementos del dom
    se antepone el signo de $  */
    /*creamos un elemento de tipo h1 */
    const $h1 = document.createElement("h1");
    /*el elemento h1 su contenido va a ser igual a un elemento a, en donde dice toopercase solo convertimos a mayusculas  */
    $h1.innerHTML = `<a href="${api.DOMAIN}" target="_blank" rek="noopener">
    ${api.NAME.toUpperCase()}
    </a>`;
    /*esta funcion retorna este nodo que esta guardado en el nodo h1 */
    return $h1;
}