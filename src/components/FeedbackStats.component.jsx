function FeedbackStats({ feedback }) {
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  return (
    <div className="feedback-stats">
      <h5>{feedback.length} Reviews</h5>
      <p> Average Rating: {isNaN(average) ? 0 : average}</p>
    </div>
  );
}

export default FeedbackStats;
