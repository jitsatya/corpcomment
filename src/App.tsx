import { useEffect, useState } from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import HashTagList from "./components/HashTagList";
import { TFeedBackItem } from "./lib/types";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedBackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddToList = (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);
    const newItem: TFeedBackItem = {
      id: new Date().getTime(),
      text: text,
      daysAgo: 0,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
      upvoteCount: 0,
      company: companyName,
    };

    setFeedbackItems([...feedbackItems, newItem]);
  };
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
    <div className="app">
      <Footer />
      <Container
        handleAddToList={handleAddToList}
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
      <HashTagList />
    </div>
  );
}

export default App;
