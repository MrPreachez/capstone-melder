import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Results.scss";


function Result() {
  const { projectID } = useParams();
  const [ currentResult, setCurrentResult] = useState(null);
  

  useEffect(() => {
    const getResult = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_URL}/project/${projectID}/result`
        );
        setCurrentResult(data);
      } catch (error) {
        console.error(error);
      }
    };
    getResult();
  }, [projectID]);

  if (!currentResult) {
    return (
      <div>
        Hmm... something doesn't seem write. Please come back later if the page
        does not load shortly
      </div>
    );
  }


  return (
    <main className="section section__resultPage">
      <section className="result__head">
        <h2 className="result__heading">THE BIG EVENT Result</h2>
        <h3 className="result__subheading">Melder has spoken!</h3>
        <div className="result__question">
          <p className="result__display">
            What was your highlight at the event?
          </p>
        </div>
      </section>
      <section className="result__generate">
        <p className="result__generate--text">generated response</p>
      </section>
      <section className="names__container">
        <div className="names__list">
          <p className="names__name"> name of participants </p>
          <p className="names__answer"> participants answer</p>
        </div>
        <Link to="/">
          <p className="link">RETURN HOME</p>
        </Link>
      </section>
    </main>
  );
}

export default Result;
