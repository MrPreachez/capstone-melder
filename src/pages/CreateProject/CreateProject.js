import "./CreateProject.scss";
function CreateProject() {
  return (
    <section>
      <h1>Build a MELDER</h1>
      <h2>
        To launch this project, we've made building your first MELDER extremely
        simple!
      </h2>
      <h3>Step 1: Come up with a project name</h3>
      <h3>Step 2: Figure out a thought provoking question</h3>
      <form>
        <label>PROJECT NAME</label>
        <input
          className=""
          type="text"
          id="name"
          name="project"
          placeholder="Give Your Meld a Name"
        />
        <label>THOUGHT PROVOKING QUESTION</label>
        <textarea
          className="" 
          id="msg" 
          name="question"
          placeholder="Type your question here">
        </textarea>
      </form>
    </section>
  );
}

export default CreateProject;
