// const App = () => {
//   const title = "my App";
//   const text = "this is my first app";
//   const comments = [
//     { id: 1, text: "one" },
//     { id: 2, text: "two" },
//     { id: 3, text: "three" },
//   ];

//   const showComment = true;
//   const commentText = (
//     <div className="comm">
//       <h3>comments({comments.length})</h3>
//       <ul>
//         {comments.map((comment, index) => (
//           <li key={comment.id}> {comment.text}</li>
//         ))}
//       </ul>
//     </div>
//   );

//   return (
//     <div className="container">
//       <h1> {title} </h1>
//       <p>{text}</p>
//       {
//         //showComment ? (
//         //   <div className="comm">
//         //     <h3>comments({comments.length})</h3>
//         //     <ul>
//         //       {comments.map((comment, index) => (
//         //         <li key={comment.id}> {comment.text}</li>
//         //       ))}
//         //     </ul>
//         //   </div>
//         // ) : null
//         // we can use the && insead of ternary operators to get rid of the else condition
//       }

//       {showComment && commentText}
//     </div>
//   );
// };
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import Header from "./components/Header.component";
// import FeedbackItemComponent from "./components/FeedbackItem.component";
import FeedbackList from "./components/FeedbackList.component";
import FeedbackData from "./Data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats.component";
import Feedbackform from "./components/FeedbackForm.component";
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
  };
  //this function filter through the feebacklist using
  //the setfeedback to update feedback and remove when the close icon is clicked
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete feedback?")) {
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
    }
  };
  return (
    <div>
      <Header />
      <div className="container">
        <Feedbackform handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        {/*<FeedbackItemComponent />*/}
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </div>
  );
};

export default App;
