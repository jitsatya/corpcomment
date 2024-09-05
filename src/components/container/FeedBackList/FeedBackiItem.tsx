import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedBackItem } from "../../../lib/types";
import { useState } from "react";

type FeedBackItemProps = { feedBackItem: TFeedBackItem };

export default function FeedBackiItem({ feedBackItem }: FeedBackItemProps) {
  const { badgeLetter, company, text, daysAgo } = feedBackItem;
  const [open, setOpen] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(feedBackItem.upvoteCount);

  const handleUpvote = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setUpvoteCount((prev) => prev + 1);
    event.stopPropagation();
    event.currentTarget.disabled = true;
  };
  return (
    <li
      onClick={() => setOpen((prev) => !prev)}
      className={`feedback ${open ? "feedback--expand" : ""}`}
    >
      <button onClick={() => handleUpvote}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>
      <div>
        <p>{badgeLetter}</p>
      </div>
      <div>
        <p>{company}</p>
        <p>{text}</p>
      </div>
      <p>{daysAgo === 0 ? "NEW" : `${daysAgo}d`}</p>
    </li>
  );
}
