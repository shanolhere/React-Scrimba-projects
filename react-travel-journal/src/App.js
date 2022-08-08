import "./styles.css";
import Card from "./components/card";
import data from "./components/data";

export default function App() {
  const places = data.map((item, idx) => {
    //console.log(item);
    return <Card key={idx} {...item} />;
  });
  // console.log(places);
  return (
    <div className="App">
      <nav>
        <h1>
          <ion-icon
            name="globe-outline"
            style={({ color: "#0ab4f7" }, { padding: "4px 5px 0 " })}
          ></ion-icon>
          ReactTravelJournal
        </h1>
        <h3>React-project3</h3>
      </nav>
      <main>{places}</main>
    </div>
  );
}
