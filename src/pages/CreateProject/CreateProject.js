import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreateProject.scss";

function CreateProject() {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const creator_name = e.target.creator.value;
    const project_name = e.target.project.value;
    const response_type = e.target.type.value;
    const question = e.target.question.value;
    console.log(e.target.type.value);
    console.log(creator_name, project_name, response_type, question);
    if (!creator_name || !project_name || !question || !response_type) {
      alert("Please fill in all fields to submit your project");
    } else {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_URL}/project`,
          {
            creator_name,
            project_name,
            response_type,
            question,
          }
        );
        console.log(response);
        if (response.status === 201) {
          const projectId = response.data.project_id;
          alert(
            "Your project has been uploaded, you will be directed to you questionnaire"
          );

          navigate(`/input/${projectId}`);
        }
      } catch (error) {
        console.log(error);
        alert("An error occured while uploading, please try again");
      }
    }
  }
  //create handler to send form data to

  return (
    <main className="section__createPage">
      <section className="create__pageWrap">
        <section className="create__head">
          <div className="create__banner">
            <h1 className="head__title">
              Let's Create Your{" "}
              <span className="head__title--color">Melder! </span>
            </h1>
          </div>

          <h2 className="head__subhead">
            It's Simple, Just Follow These Steps
          </h2>
          <ul className="head__list">
            <li className="head__steps head__step1">
              <span className="head__stepsNums">Step 1:</span> Think of a
              project name
            </li>
            <li className="head__steps head__step2">
              <span className="head__stepsNums">Step 2:</span> Come up with a
              thought provoking question
            </li>
            <li className="head__steps head__step1">
              <span className="head__stepsNums">Step 3:</span> Use this input to
              let the AI know what type of response you'd like, check out our
              details below on prompting
            </li>
            <li className="head__steps head__step1">
              <span className="head__stepsNums">Step 4:</span> Fill in the form
              and press CREATE
            </li>
          </ul>
          <p className="head__text">
            Lastly, just invite your group to answer your question!
          </p>
        </section>
        <section className="create__form">
          <form className="addProject" onSubmit={handleSubmit}>
            <div className="create__formBorder">
              <div className="addProject__field addProject__field1">
                <label className="addProject__label-A">OWNER NAME</label>

                <input
                  className="addProject__inputA"
                  type="text"
                  id="name"
                  name="creator"
                  placeholder="Full Name"
                />
              </div>
              <div className="addProject__field addProject__field2">
                <label className="addProject__label-A">PROJECT NAME</label>

                <input
                  className="addProject__inputA"
                  type="text"
                  id="name"
                  name="project"
                  placeholder="Give your Meld a name"
                />
              </div>
              <div className="addProject__field addProject__field2">
                <label className="addProject__label-B">TYPE OF RESPONSE</label>

                <textarea
                  className="addProject__inputB"
                  id="msg"
                  name="type"
                  placeholder="Prompt the type of response you would like"
                ></textarea>
              </div>

              <div className="addProject__field addProject__field2">
                <label className="addProject__label-B">
                  THOUGHT PROVOKING QUESTION
                </label>

                <textarea
                  className="addProject__inputB"
                  id="msg"
                  name="question"
                  placeholder="Type your question here"
                ></textarea>
              </div>
            </div>
            <button className="create__CTA--button">create</button>
          </form>
        </section>
      </section>
    </main>
  );
}

export default CreateProject;
