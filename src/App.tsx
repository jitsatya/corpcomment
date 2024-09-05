import { useEffect, useMemo, useState } from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import HashTagList from "./components/hashtag/HashTagList";
import { TFeedBackItem } from "./lib/types";
import HashTagItem from "./components/hashtag/HashTagItem";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedBackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  const selectedFeedbackItems = useMemo(
    () =>
      feedbackItems.filter((feedbackItem) =>
        selectedCompany === "" ? true : feedbackItem.company === selectedCompany
      ),
    [feedbackItems, selectedCompany]
  );

  const companyList = useMemo(
    () =>
      feedbackItems
        .map((item) => item.company)
        .filter((company, index, array) => array.indexOf(company) === index),
    [feedbackItems]
  );

  const handleAddToList = async (text: string) => {
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

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
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
        feedbackItems={selectedFeedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
      <HashTagList>
        {companyList.map((company) => (
          <HashTagItem onSelect={setSelectedCompany}>{company}</HashTagItem>
        ))}
      </HashTagList>
    </div>
  );
}

export default App;
