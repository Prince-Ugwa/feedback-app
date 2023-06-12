import { useState } from "react";
import Card from "./shared/Card.component";

const Feedbackform = () => {
  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
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

          <button type="submit"> Send</button>
        </div>
      </form>
    </Card>
  );
};

export default Feedbackform;
