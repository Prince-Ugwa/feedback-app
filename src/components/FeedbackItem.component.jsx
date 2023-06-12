// {
//   //   import { useState } from "react";
//   //   function FeedbackItem() {
//   //   const [rating, setrating] = useState(5);
//   //   const [text, setText] = useState(" this is a text display ui");
//   //   const handleClick = () => {
//   //     setrating((curValue) => {
//   //       return curValue + 1;
//   //     });
//   //     setText("A click was fired 💥");
//   //   };
//   //   return (
//   //     <div className="card">
//   //       <div className="num-display">{rating}</div>
//   //       <div className="text-display">{text}</div>
//   //       <button onClick={handleClick}> Click</button>
//   //       </div>
//   //       );
//   //     }
//   //     export default FeedbackItem;
//   //
// }

import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card.component";

function FeedbackItem({ feedback, handleDelete }) {
  console.log(feedback);
  // const handleClick = (id) => {
  //   console.log(id);
  // };
  return (
    <Card>
      <div className="num-display"> {feedback.rating}</div>
      <button onClick={() => handleDelete(feedback.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display"> {feedback.text}</div>
    </Card>
  );
}
FeedbackItem.prototype = {
  feedback: PropTypes.object,
};

export default FeedbackItem;
