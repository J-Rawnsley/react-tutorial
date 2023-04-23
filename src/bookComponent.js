function BookComponent(props) {
    const { imgLink, imgDesc, title, author, children, rank} = props;
    return (
      <article className="book">
        <span className="rank">#{rank}</span>
        <img src={imgLink} alt={imgDesc} />
        <h2>{title}</h2>
        <h4>{author}</h4>
        
        {children}
      </article>
    );
  }

  export default BookComponent