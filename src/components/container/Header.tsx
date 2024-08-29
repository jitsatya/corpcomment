import FeedbackForm from "./Header/FeedbackForm";
import Logo from "./Header/Logo";
import PageHeading from "./Header/PageHeading";
import Pattern from "./Header/Pattern";

type HeaderProps = {
  handleAddToList: (text: string) => void;
};

export default function Header({ handleAddToList }: HeaderProps) {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={handleAddToList} />
    </header>
  );
}
