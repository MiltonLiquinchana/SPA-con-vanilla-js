export async function ajax(props) {
    let { url, cbSuccess } = props;
    /*una ves que la respuesta la debuelva fetch
     si el parametro ok(res.ok) de la respuesta(res) que nos esta mandando fetch
     viene correcto(res.ok=true) entonces convierte esos datos en json(res.json()) caso contrario(:)
     rechasamos la promesa(Promise.reject)*/
    await fetch(url)
        .then(res => res.ok ? res.json() : Promise.reject(res))
        /*en el caso positivo si la promesa se cumple ejecutamos la funcion que el usuario nos envie cbSuccess(los datos que la funcion necesita para procesar)*/
        .then(json => cbSuccess(json))
        /*si existe algun error  configuramos un mensaje de error alucibo*/
        .catch(err => {
            /*configuramos un mensaje de error predeterminado
            la variable local le decimos que es igual a si el error trae la propiedad estatusText configurada entonces ese seria el error
            else(||) le ponemos un mensaje generico "Ocurrio un error al acceder a la API"*/
            let message = err.statusText || "Ocurrio un error al acceder a la API";
            /*agregamos ese mensaje al elemento root*/
            document.getElementById("main").innerHTML = `<div class="error">
            <p>Error ${err.status}: ${message}</p>
            </div>`;
            document.querySelector(".loader").style.display = "none";
            /*al finalizar es bueno mostrar por consola el mensaje de error que nos manda fetch*/
            console.log(err);
        });
}