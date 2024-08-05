import { useState } from "react";
import { MAX_CHARACTERS } from "../../../lib/constants";

export default function FeedbackForm() {
  const [feedbackText, setFeedbackText] = useState("");
  const charLeft = MAX_CHARACTERS - feedbackText.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setFeedbackText(event.target.value);
  };
  return (
    <form className="form">
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
