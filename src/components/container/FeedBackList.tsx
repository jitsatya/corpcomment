import FeedBackiItem from "./FeedBackList/FeedBackiItem";

const feedBackItem1 = {
  upvote: 546,
  iconChar: "B",
  company: "Satyajit",
  feedback:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ad cumque est exercitationem sequi quod.",
  timestamp: 4,
};
const feedBackItem2 = {
  upvote: 546,
  iconChar: "B",
  company: "Satyajit",
  feedback:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ad cumque est exercitationem sequi quod.",
  timestamp: 4,
};
const feedBackItem3 = {
  upvote: 546,
  iconChar: "B",
  company: "Satyajit",
  feedback:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ad cumque est exercitationem sequi quod.",
  timestamp: 4,
};

const feedbackItems = [feedBackItem1, feedBackItem2, feedBackItem3];

export default function FeedBackList() {
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedBackItem) => {
        return <FeedBackiItem feedBackItem={feedBackItem} />;
      })}
    </ol>
  );
}
