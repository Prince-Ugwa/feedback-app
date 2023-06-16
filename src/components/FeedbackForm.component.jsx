import { useState } from "react";
import Card from "./shared/Card.component";
import Button from "./shared/Button.component";
const Feedbackform = () => {
  /* @form input data state */
  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  /* @form  btn isDisabled  btn-state */
  const [btnDisabled,]
  /* @form error msg    state */
  return (
    <Card>
      <form>
        <h3> How would you like to rate our app?</h3>
        {/*@todo - rating component */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />

          <Button type="submit"> Send</Button>
        </div>
      </form>
    </Card>
  );
};

export default Feedbackform;
