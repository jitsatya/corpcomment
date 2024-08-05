import { TriangleUpIcon } from "@radix-ui/react-icons";
import { FeedBackItem } from "../../../lib/types";

type FeedBackItemProps = { feedBackItem: FeedBackItem };

export default function FeedBackiItem({ feedBackItem }: FeedBackItemProps) {
  const { upvoteCount, badgeLetter, company, text, daysAgo } = feedBackItem;
  return (
    <li className="feedback">
      <button>
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
      <p>{daysAgo}d</p>
    </li>
  );
}
