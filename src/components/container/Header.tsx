import FeedbackForm from "./Header/FeedbackForm";
import Logo from "./Header/Logo";
import PageHeading from "./Header/PageHeading";
import Pattern from "./Header/Pattern";

export default function Header() {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm />
    </header>
  );
}
