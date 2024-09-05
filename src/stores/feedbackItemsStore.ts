import { create } from "zustand";
import { TFeedBackItem } from "../lib/types";

interface FeedbackItemsState {
  feedbackItems: TFeedBackItem[];
  isLoading: boolean;
  errorMessage: string;
  selectedCompany: string;
  companyList: string[];
  getCompanyList: () => string[];
  getFilteredFeedbackItems: () => TFeedBackItem[];
  addItemToList: (text: string) => Promise<void>;
  selectCompany: (company: string) => void;
  fetchFeedbackItems: () => Promise<void>;
}

export const useFeedbackItemsStore = create<FeedbackItemsState>((set, get) => ({
  feedbackItems: [],
  isLoading: false,
  errorMessage: "",
  selectedCompany: "",
  companyList: [],
  getCompanyList: () => {
    return get().feedbackItems
      .map((item) => item.company)
      .filter((company, index, array) => array.indexOf(company) === index);
  },
  getFilteredFeedbackItems: () => {
    const { feedbackItems, selectedCompany } = get();
    return feedbackItems.filter((feedbackItem) =>
      selectedCompany === "" ? true : feedbackItem.company === selectedCompany
    );
  },
  addItemToList: async (text: string) => {
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

    set((state) => ({
      feedbackItems: [...state.feedbackItems, newItem]
    }));

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
  },
  selectCompany: (company: string) => {
    set({ selectedCompany: company });
  },
  fetchFeedbackItems: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      set({ feedbackItems: data.feedbacks });
    } catch (error) {
      set({ errorMessage: "Something Went Wrong!" });
    } finally {
      set({ isLoading: false });
    }
  },
}));
