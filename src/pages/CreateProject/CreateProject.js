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
              <span className="head__stepsNums">Step 3:</span> Create a prompt,
              this tells Melder what kind of response you want. Check out the
              details below on Prompts.
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
            <div className="create__CTA--wrapper">
              <button className="create__CTA--button">create</button>
            </div>
          </form>
          <section className="prompts__container">
            <h3 className="prompts__heading">Prompts</h3>
            <p className="prompts__text">
              The prompt input is where you can structure the type of response
              you would like to receive from the AI. This includes providing
              guidance on factors such as the perspective, tone, and any
              additional suggestions you would like the AI to consider. It's
              important to consider your prompt carefully and strike a balance
              between providing enough information for the AI to generate a
              useful response, while not overloading the prompt with too much
              information. To help guide you, we've provided a template that can
              be used as a starting point. Additionally, we recommend that you
              be clear and concise with your language to ensure that the AI can
              accurately interpret the prompt. Here's the template:
            </p>
            <ul className="prompts__list">
              <li className="prompts__item">
                <span className="prompts__item--bold">Context:</span> ie. Survey
                asking local constituents their opinions on matters of concern
              </li>
              <li className="prompts__item">
                <span className="prompts__item--bold">Question:</span> ie. What
                are your top concerns for our community in 2023?{" "}
              </li>
              <li className="prompts__item">
                <span className="prompts__item--bold">Reply length:</span> 1000
                words
              </li>
              <li className="prompts__item">
                <span className="prompts__item--bold">Tone:</span> dry but witty
              </li>
              <li className="prompts__item">
                <span className="prompts__item--bold">Perspective:</span> ie.
                imagine you are government official reporting on the sentiments
                of consituents{" "}
              </li>
              <li className="prompts__item">
                <span className="prompts__item--bold">Outcome:</span> ie.
                summarize key points mentioned, elaborate on challenges and how
                to find common ground
              </li>
            </ul>
            <p className="prompts__lastText">
              Remember, the more specific and focused your prompt is, the more
              likely it is that the AI will generate a response that meets your
              needs.
            </p>
          </section>
        </section>
      </section>
    </main>
  );
}

export default CreateProject;
