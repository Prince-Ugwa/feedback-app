import { useState } from "react";
import RatingSelect from "./RatingSelect.component";
import Card from "./shared/Card.component";
import Button from "./shared/Button.component";

const Feedbackform = ({ handleAdd }) => {
  /* @form input data state */
  const [text, setText] = useState("");
  /* @form  btn isDisabled  btn-state */
  const [btnDisabled, setBtnDisabled] = useState(true);

  /* rating select */
  const [ratig, setRating] = useState(10);

  /* @form error msg    state */
  const [erromsg, setErrormsg] = useState("");
  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setErrormsg(null);
    } else if (text !== " " && text.trim().length <= 10) {
      setErrormsg("Text must be 10 characters");
      setBtnDisabled(true);
    } else {
      setErrormsg(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        ratig,
      };
      handleAdd(newFeedback);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h3> How would you like to rate our app?</h3>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />

          <Button type="submit" isDisable={btnDisabled}>
            Send
          </Button>
        </div>
        {erromsg && <div className="message">{erromsg}</div>}
      </form>
    </Card>
  );
};

export default Feedbackform;
