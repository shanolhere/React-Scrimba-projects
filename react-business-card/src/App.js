import "./styles.css";
//components
import Profile from "./components/profile";
import Data from "./components/data";

export default function App() {
  return (
    <div className="App">
      <nav>
        <h1>ReactBusiness</h1>
        <h3>React-project2</h3>
      </nav>
      <main>
        <Profile />
        <Data />
      </main>
    </div>
  );
}
