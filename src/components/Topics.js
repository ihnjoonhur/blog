
const Topics = () => {
  return (
    <section className="section topics" id="topics">
      <div className="section-title">
        <h2>our <span>topics</span></h2>
      </div>
      <div className="section-center topics-center">
        <article className="topic">
          <span className="topic-icon"><i className="fas fa-wallet fa-fw"></i></span>
          <div className="topic-info">
            <h4 className="topic-title">Finance</h4>
            <p className="topic-text">
            From humble immigrant beginnings to financial liberation, come with me on this intertwined journey of coding and finance as powerful tools for achieving true freedom.
            </p>
          </div>
        </article>

        <article className="topic">
          <span className="topic-icon"><i className="fas fa-tree fa-fw"></i></span>
          <div className="topic-info">
            <h3 className="topic-title">Fitness</h3>
            <p className="topic-text">
            Exploring the parallels between coding and fitness: how mastering both can enhance problem-solving, discipline, and overall life skills.
            </p>
          </div>
        </article>

        <article className="topic">
          <span className="topic-icon"><i className="fas fa-socks fa-fw"></i></span>
          <div className="topic-info">
            <h4 className="topic-title">Food</h4>
            <p className="topic-text">
            Delving into a world where culinary passions intertwine seamlessly with technological marvels, creating a rich tapestry of flavors and innovations for the modern age.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Topics;
