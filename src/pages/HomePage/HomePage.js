import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroTypewriter from "../../components/HeroTypewriter/HeroTypewriter";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";

import "./HomePage.scss";

function HomePage() {
  const [allProjects, setAllProjects] = useState(null);
  console.log(process.env.REACT_APP_URL);
  useEffect(() => {
    const getAllProjects = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_URL}/project`
        );
        setAllProjects(data);
      } catch (error) {
        console.error(error);
      }
    };
    getAllProjects();
  }, []);

  return (
    <main className="section__homePage">
      <div className="section__homePage--wrapper">
        <section className="hero__section">
          <div className="hero__head">
            <HeroTypewriter />
          </div>
        </section>
        <section className="card__section">
          <div className="card__section--layout">
            <div className="about__card">
              <div className="about__title--container">
                <h2 className="about__title1">Build Your Form /></h2>
                <h2 className="about__title2">Gather Feedback /></h2>
                <h2 className="about__title3">Let Melder Do the Rest</h2>
              </div>

              <p className="about__text">
                MELDER is all about harnessing the power of AI to make sense of
                group qualitative feedback and opinion. The name MELDER comes
                from the idea of collective mind melds, that experience groups
                of people claim when working together harmoniously and
                seemlessly, like one mind.
              </p>
              <p className="about__text">
                No matter if you're an organization, business, or group, we know
                that making sense of qualitative feedback and opinions can be a
                challenge. That's why MELDER is here to lend a helping hand! By
                leveraging the power of language modeling, we aim to transform
                the chaos of group feedback into a clear and concise summary
                that you can make use of in a variety of situations.
              </p>
              <p className="about__text">
                As a prototype, this is still a work in progress and we're still
                tweaking things to get the best possible outputs for different
                requirements. But why not give it a try and see how MELDER can
                help you make sense of your feedback?
              </p>
            </div>
            <div className="homeCreate__CTA">
              <div className="homeCreate__textContainer">
                <h3 className="homeCreate__heading">What's your question?</h3>
                <h4 className="homeCreate__subheading">
                  Creating Your own Melder Project is simple!
                </h4>
              </div>

              <Link to="/create">
                <button className="homeCreate__CTA--button">Create Now</button>
              </Link>
            </div>
          </div>

          <section className="list__card">
            {allProjects && <HomeCarousel allProjects={allProjects} />}
          </section>
        </section>
      </div>
    </main>
  );
}

export default HomePage;
