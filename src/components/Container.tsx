import FeedBackList from "./container/FeedBackList";
import Header from "./container/Header";

export default function Container() {
  return (
    <main className="container">
      <Header />
      <FeedBackList />
    </main>
  );
}
