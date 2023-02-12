import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroTypewriter from "../../components/HeroTypewriter/HeroTypewriter";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";

import "./HomePage.scss";

function HomePage() {
  const [allProjects, setAllProjects] = useState(null);

  console.log(allProjects);
  useEffect(() => {
    const getAllProjects = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_URL}/project`
        );
        console.log(data);
        setAllProjects(data);
      } catch (error) {
        console.error(error);
      }
    };
    getAllProjects();
  }, []);

  return (
    <main className="section__homePage">
      <section className="hero__section">
        <div className="hero__head">
          {/* <h2>Hi! I'm</h2>
          <h1 className="hero__title">MELDER</h1>
          <h2 className="hero__subheading">
            Let's bring minds together
          </h2> */}
          <HeroTypewriter/>
        </div>
      </section>

      <section className="card__section">
        <div className="card__section--layout">
          <div className="about__card">
            <div className="about__title--container">
              <h2 className="about__title">Build Your Form /</h2>
              <h2 className="about__title">Gather Feedback /</h2>
              <h2 className="about__title3">Let Melder Do the Rest</h2>
            </div>

            <p className="about__text">
              The idea behind MELDER is to harness the support of AI in the
              processing of group qualitative feedback and opinion. The name
              Melder comes from the idea of collective mind melds, that
              experience groups of people claim when working together
              harmoniously and seemlessly, like one mind. Whether you're an
              organization, business, or group, qualitative feedback and opinion
              can be difficult to make sense of or summarise consisely. The
              belief behind MELDER is that language modelling may serve as a
              useful tool for this purpose. As this is a prototypal product, we
              are still testing the various outputs and how to adjust those to
              different requirements. Try for yourself!
            </p>
          </div>
          <div className="homeCreate__CTA">
            <h3 className="homeCreate__heading">What's your question?</h3>
            <h4 className="homeCreate__subheading">
              Creating Your own Melder Project is simple!
            </h4>
            <Link to="/create">
              <button className="homeCreate__CTA--button">Create Now</button>
            </Link>
          </div>
        </div>

        <section className="list__card">
          {allProjects && <HomeCarousel allProjects={allProjects} />}
        </section>
      </section>
    </main>
  );
}

export default HomePage;
