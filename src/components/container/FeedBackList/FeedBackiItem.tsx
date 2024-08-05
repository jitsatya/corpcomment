import { TriangleUpIcon } from "@radix-ui/react-icons";

type FeedBackItem = {
  upvote: number;
  iconChar: string;
  company: string;
  feedback: string;
  timestamp: number;
};

type FeedBackItemProps = { feedBackItem: FeedBackItem };

export default function FeedBackiItem({ feedBackItem }: FeedBackItemProps) {
  const { upvote, iconChar, company, feedback, timestamp } = feedBackItem;
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{upvote}</span>
      </button>
      <div>
        <p>{iconChar}</p>
      </div>
      <div>
        <p>{company}</p>
        <p>{feedback}</p>
      </div>
      <p>{timestamp}d</p>
    </li>
  );
}
