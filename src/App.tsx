import "./App.css";
import HomeFeed from "./HomeFeed/HomeFeed";
import Header from "./components/header";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="flex justify-center py-4">
        <HomeFeed />
      </div>
    </>
  );
}

export default App;
