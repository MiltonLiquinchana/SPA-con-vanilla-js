export function Post(props) {
  /*re estructuracion */
  let { content,date,title } = props;
  let dateFormat = new Date(date).toLocaleString();
  return `
    <section class="post-page">
      <aside>
        <h2>${title.rendered}</h2>
        <time datetime="${dateFormat}">12/11/2020</time>
      </aside>
      <hr>
      <article>${content.rendered}</article>
    </section>
    `;
}
