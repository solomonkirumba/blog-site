function Article({ title, date, preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      {date && <p>{date}</p>}
      <p>{preview}</p>
      <small>{minutes} min read</small>
    </article>
  );
}

export default Article;
