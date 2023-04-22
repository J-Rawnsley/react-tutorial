function EventExamples() {
    const handleFormInput = (e) => {
      console.log(`changed -> ${e.target.value}`);
    };
    const handleButtonClick = (e) => {
      alert(`Button clicked at ${Math.floor(e.timeStamp)}`)
    }
    const handleFormSubmission = (e) => {
      e.preventDefault()
      console.log("form submitted");
      console.log(e.target.inputBox.value);
    }
    return (
      <section>
        <form onSubmit={handleFormSubmission}>
        <h1>My Form</h1>
        <input
          type="text"
          placeholder="please don't type here."
          name="inputBox"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        ></input>
        </form>
        <button onClick = {handleButtonClick}>Don't Click the Button!</button>
        </section>
    );
  }