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
            You've been invited to respond to the question below
          </h3>
          <p className="input__subheadingB">
            Please take a moment to consider the question carefully before
            submitting.
          </p>
        </div>
      </section>
      <div className="addResponse__question">
        <h2 className="addResponse__display">
          This is where the question will be displayed
        </h2>
      </div>

      <section className="input__form">
        <form className="addResponse__form">
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
          <button className="addResponse__CTA--button">Submit Response</button>
          <button className="input__CTA--button">Submit Project</button>
        </form>
      </section>
    </main>
  );
}

export default AddInput;
