import {blogs} from '../data';


const Blogs = () => {
  return (
    <section className="section" id="blogs">
      <div className="section-title">
        <h2>My <span>blogs</span></h2>
      </div>

      <div className="section-center featured-center">
        {blogs.map((blog)=>{
          const{id, image, date, title, info, location, duration, cost} = blog
          return (
            <article className="blog-card" key={id}>
            <div className="blog-img-container">
              <img src={image} className="blog-img" alt={title} />
              <p className="blog-date">{date}</p>
            </div>
            <div className="blog-info">
              <div className="blog-title">
                <h4>{title}</h4>
              </div>
              <p>
                {info}
              </p>
              <div className="blog-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span> {''}
                {location}
                </p>
                <p>{duration}days</p>
                <p>from ${cost}</p>
              </div>
            </div>
          </article>
          );
        })}


        
      </div>
    </section>
  )
}

export default Blogs