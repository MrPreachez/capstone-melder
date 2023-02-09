import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AddInput.scss";

function AddInput() {
  const navigate = useNavigate;
  const { projectID } = useParams();
  const [currentProject, setCurrentProject] = useState(null);

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

  if (!currentProject) {
    return (
      <div>
        Hmm... something doesn't seem write. Please come back later if the page
        does not load shortly
      </div>
    );
  }

  async function inputSubmit(e) {
    e.preventDefault();
    const respondent_name = e.target.respondent.value;
    const response_input = e.target.response.value;

    if (!respondent_name || !response_input) {
      alert("Please fill in all fields to submit your response");
    } else {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_URL}/input`,
          {
            respondent_name,
            response_input,
            project_id: projectID,
          }
        );
        console.log(response);
        if (response.status === 200) {
          alert(
            `Thank you for answering the ${currentProject.project_name} Melder`
          );
          e.target.reset();
        }
      } catch (error) {
        console.log(error);
        alert("An error occured while uploading, please try again");
      }
    }
  }
  async function projectSubmit(e) {
    e.preventDefault();

    try {
        const response = await axios.post(
          `${process.env.REACT_APP_URL}/project/${projectID}`
        );
        if (response.status === 200) {
            alert(
            `The ${currentProject.project_name} Melder has been submitted, you'll now be directed to your generated result`
            );
            navigate(`/result/${projectID}`);
        } else if (response.status === 400){
            alert("There was an error generating your request.  Sorry! ")
        }
    } catch (error) {
        console.error(error);
        alert("An error occurred while submitting the project. Please try again later.");
    }
}

  return (
    <main className="section section__inputPage">
      <section className="input__head">
        <div className="input__banner">
          <h1 className="input__heading">
            Welcome, to the {currentProject.project_name} Melder,
          </h1>
        </div>
        <div className="input__subhead">
          <h3 className="input__subheadingA">
            Your response to the following questionaire has been requested by{" "}
            {currentProject.creator_name}
          </h3>
          <p className="input__subheadingB">
            Please take a moment to consider the question carefully before
            submitting.
          </p>
        </div>
      </section>
      <div className="addResponse__question">
        <p className="addResponse__display">{currentProject.question}</p>
      </div>

      <section className="input__form">
        <form className="addResponse__form" onSubmit={inputSubmit}>
          <div className="addResponse__formBorder">
            <label className="addResponse__label">ENTER YOUR NAME</label>
            <input
              className="addResponse__name"
              type="text"
              name="respondent"
              placeholder="Type name here"
            />
            <textarea
              className="addResponse__input"
              name="response"
              placeholder="Enter your response here"
            ></textarea>
          </div>

          <button className="addResponse__CTA--button" >Submit Response</button>
          <div className="input__CTA">
            <p className="input__submitText">
              When all your responses have been gathered, submit the project and
              await your summary
            </p>
            <button className="input__CTA--button"onClick={projectSubmit}>Submit Project</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default AddInput;
