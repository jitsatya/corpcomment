import { useEffect } from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import HashTagList from "./components/hashtag/HashTagList";
import { useFeedbackItemsStore } from "./stores/feedbackItemsStore";

function App() {
  const fetchFeedbackItems = useFeedbackItemsStore(state=>state.fetchFeedbackItems)

  useEffect(()=>{
    fetchFeedbackItems()
  }, [fetchFeedbackItems])
  return (
    <div className="app">
      <Footer />
        <Container />
      <HashTagList />
    </div>
  );
}

export default App;
