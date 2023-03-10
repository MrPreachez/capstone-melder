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
            <div className="about__title--container">
              <h2 className="about__title1">
                Transforming Group Feedback Through AI
              </h2>
              <h3 className="about__title2">
                Melder Opens the Door to Quick Analysis and Insight of
                Qualitative Data
              </h3>
            </div>
            <div className="about__card">
              <div className="about__text-wrap">
                <p className="about__text">
                  MELDER is all about harnessing the power of AI to make sense
                  of open-ended group feedback and opinion. The name MELDER
                  comes from the idea of collective mind melds, that experience
                  groups of people claim when working together harmoniously and
                  seemlessly, like one mind.
                </p>
                <p className="about__text">
                  No matter if you're an organization, business, or group, we
                  know that making sense of qualitative data can be a challenge.
                  Melder believes this is a lost opportunity in which much time
                  can be wasted. That's why MELDER is here to lend a helping
                  hand! By packaging group feedback so it can be sent through
                  an OpenAI Large Language Model(LLM), we can transform
                  the chaos of group feedback into a clear and concise summary
                  that you can use quickly and effectively. Not only that, but if you want your
                  response to make a suggesstion like 'how to bring about
                  greater harmony in the group', you can prompt Melder to make
                  suggestions, share insight or make a joke and it will do it's
                  best.
                </p>
                <p className="about__text">
                  As a prototype and passion project, this is still a work in
                  progress and we're still tweaking things to get the best
                  possible outputs for different requirements. But why not give
                  it a try and see how MELDER can help you make sense of messy
                  feedback?
                </p>
              </div>

              <div className="homeCreate__CTA">
                <div className="homeCreate__textContainer">
                  <h3 className="homeCreate__heading">
                    Feedback has Never Been So Exciting!
                  </h3>
                  <h4 className="homeCreate__subheading1">
                    With Melder, asking open-ended questions is no longer
                    daunting.
                  </h4>
                  <h4 className="homeCreate__subheading2">
                    Make a Melder, it's Simple!
                  </h4>
                </div>

                <Link to="/create">
                  <button className="homeCreate__CTA--button">
                    Create Now
                  </button>
                </Link>
              </div>
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
