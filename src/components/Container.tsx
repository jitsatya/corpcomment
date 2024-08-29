import { ContainerProps } from "../lib/prop-types";
import FeedBackList from "./container/FeedBackList/FeedBackList";
import Header from "./container/Header";

export default function Container({
  handleAddToList,
  feedbackItems,
  isLoading,
  errorMessage,
}: ContainerProps) {
  return (
    <main className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedBackList
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </main>
  );
}
