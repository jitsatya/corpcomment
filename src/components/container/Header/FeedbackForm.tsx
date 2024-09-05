import { useState } from "react";
import { MAX_CHARACTERS } from "../../../lib/constants";

type FeedbackFormProps = {
  onAddToList: (text: string) => void;
};
export default function FeedbackForm({ onAddToList }: FeedbackFormProps) {
  const [feedbackText, setFeedbackText] = useState("");
  const [isValidIndicator, setIsValidIndicator] = useState(false);
  const [isInvalidIndicator, setIsInvalidIndicator] = useState(false);
  const charLeft = MAX_CHARACTERS - feedbackText.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setFeedbackText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (feedbackText.includes("#") && feedbackText.length >= 5) {
      setIsValidIndicator(true);
      setTimeout(() => setIsValidIndicator(false), 2000);
    } else {
      setIsInvalidIndicator(true);
      setTimeout(() => setIsInvalidIndicator(false), 2000);
      return;
    }
    onAddToList(feedbackText);
    setFeedbackText("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`form ${isValidIndicator ? "form--valid" : ""} ${
        isInvalidIndicator ? "form--invalid" : ""
      }`}
    >
      <textarea
        value={feedbackText}
        onChange={handleChange}
        id="feedback-textarea"
        placeholder="blabla"
        spellCheck={false}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{charLeft}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
