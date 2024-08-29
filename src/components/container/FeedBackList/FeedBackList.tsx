import FeedBackiItem from "./FeedBackiItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import { FeedbackListProps } from "../../../lib/prop-types";

export default function FeedBackList({
  feedbackItems,
  isLoading,
  errorMessage,
}: FeedbackListProps) {
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
