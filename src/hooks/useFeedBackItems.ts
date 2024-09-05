import { useEffect, useState } from "react";
import { TFeedBackItem } from "../lib/types";

export default function useFeedBackItems(){
    const [feedbackItems, setFeedbackItems] = useState<TFeedBackItem[]>([]);
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

      return { isLoading, errorMessage, feedbackItems, setFeedbackItems}
}