import "./AddInput.scss";

function AddInput() {
  return (
    <main className="section section__inputPage">
      <section className="input__head">
        <div className="input__banner">
          <h1 className="input__heading">
            Welcome, to the "project name" Melder
          </h1>
        </div>
        <div className="input__subhead">
          <h3 className="input__subheadingA">
            Your response to the following questionaire has been requested
          </h3>
          <p className="input__subheadingB">
            Please take a moment to consider the question carefully before
            submitting.
          </p>
        </div>
      </section>
      <div className="addResponse__question">
        <p className="addResponse__display">
          This is where the question will be displayed?
        </p>
      </div>

      <section className="input__form">
        <form className="addResponse__form">
          <div className="addResponse__formBorder">
            <label className="addResponse__label">ENTER YOUR NAME</label>
            <input
              className="addResponse__name"
              type="text"
              name="name"
              placeholder="Type name here"
            />
            <textarea
              className="addResponse__input"
              name="question"
              placeholder="Enter your response here"
            ></textarea>
          </div>

          <button className="addResponse__CTA--button">Submit Response</button>
          <div className="input__CTA">
            <p className="input__submitText">
              When all your responses have been gathered, submit the project and
              await your summary
            </p>
            <button className="input__CTA--button">Submit Project</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default AddInput;
