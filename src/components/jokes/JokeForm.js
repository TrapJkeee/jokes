import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import Card from "../UI/Card";
import Loader from "../UI/Loader";
import styles from "./JokeForm.module.css";

const JokeForm = (props) => {
  const topicInputRef = useRef();
  const textInputRef = useRef();
  const [isFormFocused, setIsFormFocused] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredTopic = topicInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddJoke({ topic: enteredTopic, text: enteredText });
  }

  const formFocusHandler = () => {
    setIsFormFocused(true);
  };

  const sendDataHandler = () => {
    setIsFormFocused(false);
  };

  return (
    <>
      <Prompt
        when={isFormFocused}
        message={(location) => `Do you relly want to leave this page?`}
      />
      <Card>
        <form
          className={styles.form}
          onFocus={formFocusHandler}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={styles.loading}>
              <Loader />
            </div>
          )}

          <div className={styles.control}>
            <label htmlFor="topic">Topic</label>
            <input type="text" id="topic" ref={topicInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={styles.actions}>
            <button className="btn" onClick={sendDataHandler}>
              Add Joke
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default JokeForm;
