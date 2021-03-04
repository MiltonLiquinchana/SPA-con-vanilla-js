/*este archivo va a guardar todas las variables que
que nos van a permiter poder consultar asia un dominio de wordpres */
const NAME = "css-tricks",//nombre del sitio
    DOMAIN = `https://${NAME}.com`,//aqui ya contrimos dinamicamente el nombre del dominio
    SITE = `${DOMAIN}/wp-json`,//esta variable va a hacer referencia a la url de la worpres res api que permite obtener informacion del sitio en particular, para acceder a la infomacion del siot agregamos wp-json
    API_WP = `${SITE}/wp/v2`,//en caso de que se quiera acceder a toda la informacion que me da la api de wordpress
    PER_PAGE = 6,//para decirle a worpres cuantos post vamos a traer por cada pagina esto nos servira para implemetar el post infinito
    //en este ejercicio vamos a acceder al nodo que nos permita buscar informacion, es decir tener disponible mediante nuestra SPA el buscador que nos proporciona wordpres en cualquier sitio que este echo en wordpres
    POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`,//nececitamos una varible que permita guardar el end point , que permita obtener la informacion de todos los posts, agregamos ?_embed para que se traiga toda la informacion referente al post ya que si dejamos solo posts solo nos traera el id
    POST = `${API_WP}/posts`,//esta nos permite obtener infomacion de un post en particular
    SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`;/*end point para la consulta de las busquedas agregamos /search? para que si tengo que buscar categorias etiquetas, etc agregamos envend para que traiga toda la informacion &search= esto permitira que cuando agamos nuestro input de busqueda lo que se esciba en ese input va a ser lo que tomara como variable search= y es lo que permitira que
busque en la base de datos  del sitio echo en wordpress*/




let page = 1;/*la pagina con la que vamos a inicializar la carga inicial que por logica es la pagina 1
para que cuando llegemos al final del scroll y llame los siguientes 6 posts, entonces pase a la pagina 2 y 
asi sucecivamente  */


/*todas estas variables las vamos a poder utilizar en los componentes
ejemplo cuando agamos el componente de busqueda utilizaremos el acceso al end point de search, cuando estemos pindando la informacion de post accederemos al end point de post
y asi sucecibamente , por eso se necesita exportar todas estas variables */

/*pero lo que se puede hacer es exportar todas estas variables en un objeto
, lo vamos a exportar de manera por default */

export default {
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    PER_PAGE,
    POSTS,
    POST,
    SEARCH,
    page

    /*hay que recordar que en las versiones anteriores 
    se colocaba el nombre: valor, pero con la actualizacion
    vino la optimisacion si el nombre del parametro de la propiedad del objeto es igual al nombre donde esta 
    guardado la variable se puede hacer como esta escrito ahorita*/
}