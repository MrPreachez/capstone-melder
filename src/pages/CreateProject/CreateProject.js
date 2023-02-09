import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./CreateProject.scss";


function CreateProject() {
 const navigate = useNavigate(); 
 
async function handleSubmit(e) {
  e.preventDefault();
  const creator_name = e.target.creator_name.value;
  const project_name = e.target.project.value;
  const question = e.target.question.value;
  
  if ( !creator_name || !project_name || !question ) {
    alert('Please fill in all fields to submit a project');
  }else {
    try {
      const response = await axios.post(`${process.env.REACT_APP_URL}/project`, {
        creator_name,
        project_name,
        question,
      });
      
      if (response.status ===201) {
        alert("Your project has been uploaded, you will be directed to you questionnaire");
        const projectId = response.id;
        navigate(`input/${projectId}`);
      }
    } catch (error) {
      console.log(error);
      alert('An error occured while uploading, please try again')
    }
  }
}
  //create handler to send form data to 
  
  return (
    <main className="section section__createPage">
      <section className="create__head">
        <div className="create__banner">
          <h1 className="head__title">Let's Create Your Project!</h1>
        </div>

        <h2 className="head__subhead">Building a MELDER is simple!</h2>
        <ul className="head__list">
          <li className="head__steps head__step1">
            <span>Step 1:</span> Think of a project name
          </li>
          <li className="head__steps head__step2">
            <span>Step 2:</span> Come up with a thought provoking question
          </li>
          <li className="head__steps head__step1">
            <span>Step 3:</span> Fill in the form and press CREATE
          </li>
        </ul>
        <p className="head__text">
          Lastly, just invite your group to answer your question!
        </p>
      </section>
      <section className="create__form">
        <form className="addProject">
          <div className="create__formBorder">
            <div className="addProject__field addProject__field1">
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
          
            <button className="create__CTA--button" onSubmit={handleSubmit}>create</button>
          

          
        </form>
      </section>
    </main>
  );
}

export default CreateProject;
