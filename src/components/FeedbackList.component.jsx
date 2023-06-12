import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem.component";

const FeedbackList = ({ feedback, handleDelete }) => {
  console.log(feedback);
  if (!feedback || feedback.length === 0) {
    return <p> No feedback yet! Add one..</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((feedback) => (
        <FeedbackItem
          key={feedback.id}
          feedback={feedback}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      rating: PropTypes.number,
    })
  ),
};
export default FeedbackList;
