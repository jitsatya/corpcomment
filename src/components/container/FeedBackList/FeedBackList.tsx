import { useEffect, useState } from "react";
import FeedBackiItem from "./FeedBackiItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

export default function FeedBackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const fetchFeedbackItems = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      setFeedbackItems(data.feedbacks);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage("Something Went Wrong");
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchFeedbackItems();
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {feedbackItems.map((feedBackItem) => {
        return (
          <FeedBackiItem key={feedBackItem.id} feedBackItem={feedBackItem} />
        );
      })}
    </ol>
  );
}
