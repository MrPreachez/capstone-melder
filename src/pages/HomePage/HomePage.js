import "./HomePage.scss";

function HomePage() {
  return (
    <main className="section section__homePage">
      <section className="hero__section">
        <h1 className="hero__title">MELDER</h1>
        <h2 className="hero__subheading">
          Melding the many thoughts, ideas and opinions together
        </h2>
      </section>
      
        <section className="card__section">
          <div className="about__card">
            <h2 className="about__title">MELDER brings minds together.</h2>
            <p className="about__text">
              The idea behind MELDER is to use AI to support the process of
              collective mind melds. Whether your an organization, business, or
              group, qualitative feedback and opinion can be difficult to make
              sense of or summarise consisely. The belief behind MELDER is that
              language modelling may serve as a useful tool for this purpose.
            </p>
          </div>
          <div className="list__card">
            <h2 className="list__title">Explore Past Melds</h2>
            <ul className="list__group">
              <li>What do you think of this...</li>
              <li>How was the event for you?</li>
              <li>What do you feel about politics</li>
            </ul>
          </div>
        </section>
      
    </main>
  );
}

export default HomePage;
