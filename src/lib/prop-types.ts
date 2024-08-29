import { TFeedBackItem } from "./types";

export type ContainerProps = {
  handleAddToList: (text: string) => void;
  feedbackItems: TFeedBackItem[];
  isLoading: boolean;
  errorMessage: string;
};
export type FeedbackListProps = {
  feedbackItems: TFeedBackItem[];
  isLoading: boolean;
  errorMessage: string;
};
