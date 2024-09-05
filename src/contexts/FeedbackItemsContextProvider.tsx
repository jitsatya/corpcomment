import { createContext, useContext, useMemo, useState } from "react";
import { TFeedBackItem } from "../lib/types";
import useFeedBackItems from "../hooks/useFeedBackItems";

type TFeedbackItemContext = {
  isLoading: boolean;
  errorMessage: string;
  handleAddToList: (text:string) => void;
  companyList: string[],
  filteredFeedbackItems: TFeedBackItem[];
  setSelectedCompany: (company: string) => void

}

type FeedBackItemsContextProviderProps = {
  children: React.ReactNode;
}

export const FeedbackItemsContext = createContext<TFeedbackItemContext | null>(null)

function FeedBackItemsContextProvider({children}: FeedBackItemsContextProviderProps) {
  const [selectedCompany, setSelectedCompany] = useState("");
const { isLoading, errorMessage, feedbackItems, setFeedbackItems} = useFeedBackItems()
  const filteredFeedbackItems = useMemo(
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
  return <FeedbackItemsContext.Provider value={{
    isLoading,
    errorMessage,
    handleAddToList,
    companyList,
    filteredFeedbackItems,
    setSelectedCompany
  }}>
{children}
  </FeedbackItemsContext.Provider>;
}

export default FeedBackItemsContextProvider;

export function useFeedbackItemsContext(){
  const context = useContext(FeedbackItemsContext)
  if(!context){
    throw new Error("FeedbackItemsContext is not defined in Feedback list component")
  }
  return context
}
