import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Results.scss";

function Result() {
  const { projectID } = useParams();
  const [currentResult, setCurrentResult] = useState(null);
  const [currentProject, setCurrentProject] = useState(null);

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

  useEffect(() => {
    const getProject = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_URL}/project/${projectID}`
        );
        setCurrentProject(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProject();
  }, [projectID]);

  // useEffect(() => {
  //   const getAllProjectData = async () => {
  //     try {
  //       const { data } = await axios.get(
  //     `${process.env.REACT_APP_URL}/project/${projectID}/result`
  //       );
  //       setCurrentResult(data);
  //       setCurrentProject(data)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getAllProjectData();
  // },[projectID])

  if (!currentResult && !currentProject) {
    return (
      <div>
        Hmm... something doesn't seem write. Please come back later if the page
        does not load shortly
      </div>
    );
  }

  return (
    <main className="section section__resultPage">
      <section className="result__pageWrap">
        <section className="result__head">
          <h2 className="result__heading">
            {currentProject.project_name} Meld
          </h2>

          <h3 className="result__question">
            Question: {currentProject.question}
          </h3>

          <h3 className="result__subheading">Melder has spoken!</h3>
        </section>
        <label className="result__label">GENERATED RESULT FROM MELDER</label>
        <section className="result__generate">
          <p className="result__generate--text">{currentResult.result}</p>
        </section>
        <section className="inputs__container">
          <div className="inputs__list">
            <h3 className="inputs__title">Included Inputs</h3>
            <div className="inputs__card">
              <p className="inputs__name"> name:{} </p>
              <p className="inputs__response"> response:{}</p>
            </div>
          </div>
          <Link className="link" to="/">
            <p className="link__home">RETURN HOME</p>
          </Link>
        </section>
      </section>
    </main>
  );
}

export default Result;
