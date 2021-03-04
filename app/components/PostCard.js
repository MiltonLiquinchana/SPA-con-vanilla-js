export function PostCard(props) {
    let { date, id, _embedded, slug, title } = props;
    let dateFormat = new Date(date).toLocaleString(),
        /*esta url es la que traera la imgane de la api de wordres
        decimos que si el objeto _embedded trae la propiedad wp:featured entonces nos ponga la imagen quee trae
        caso contrario carge cualquier imagen de nuestra ruta app/assets/favicon.png*/
        urlPoster = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"][0].source_url : "https:/placeimg.com/200/200/any"

    /*delegacion de eventos */
    document.addEventListener("click", e => {
        if (!e.target.matches(".post-card a")) return false;
        localStorage.setItem("wpPostId", e.target.dataset.id);
    })


    return `
<article class="post-card">
    <img src="${urlPoster}" alt="${title.rendered}">
    <h2>${title.rendered}</h2>
    <p>
        <time datetime="${date}">${dateFormat}</time>
        <a href="#/${slug}" data-id="${id}">Ver Publicacion</a>
    </p>
</article>
`;
}