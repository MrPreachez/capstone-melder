import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
          <h2>Hi! I'm</h2>
          <h1 className="hero__title">MELDER</h1>
          <h2 className="hero__subheading">
            Together, we can bring minds together
          </h2>
        </div>
      </section>

      <section className="card__section">
        <div className="card__section--layout">
          <div className="about__card">
            <h2 className="about__title">
              Ask your question
              <br />
              Gather Feedback
              <br />
              And let Melder do the rest
            </h2>
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
              Creating Your own Melder Project is simple!{" "}
            </h4>
            <Link to="/create">
              <button className="homeCreate__CTA--button">Create Now</button>
            </Link>
          </div>
        </div>

        <div className="list__card">
          <h2 className="list__title">Explore Some Past Melder's</h2>
          <div>
            <ul className="list__group">
              <li>
                {/* <p>{allProjects.project_name}</p> */}
                <p>Question</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div>
        {allProjects && <HomeCarousel allProjects={allProjects} />}
      </div>
      

    </main>
  );
}

export default HomePage;
