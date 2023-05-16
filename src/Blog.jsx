function Blog ( {title, content} ) {
    return (
    <div className="blog-content">

           <h1 className="title"> {title} </h1>
           <p className="description"> {content} </p>

    </div>
    
    );
}
export default Blog;