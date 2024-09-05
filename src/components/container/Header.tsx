import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
import FeedbackForm from "./Header/FeedbackForm";
import Logo from "./Header/Logo";
import PageHeading from "./Header/PageHeading";
import Pattern from "./Header/Pattern";

export default function Header() {

const addItemToList = useFeedbackItemsStore(state => state.addItemToList);
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={addItemToList  } />
    </header>
  );
}
