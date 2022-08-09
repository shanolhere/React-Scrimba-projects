import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [formData, setformData] = useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg"
  });
  const [memeData, setMemeData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    async function getMeme() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setMemeData(data.data.memes);
    }
    getMeme();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const randomNum = Math.floor(Math.random() * memeData.length);
    //console.log(formData);
    setformData((prevData) => ({
      ...prevData,
      randomImg: memeData[randomNum].url
    }));
  }

  return (
    <div className="App">
      <nav>
        <h1>ReactMeme</h1>
        <h3>React-project6</h3>
      </nav>
      <main>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="topText"
              value={formData.topText}
              placeholder="Enter Top Text"
              onChange={handleChange}
            />
            <input
              type="text"
              name="bottomText"
              value={formData.bottomText}
              placeholder="Enter Bottom Text"
              onChange={handleChange}
            />
          </div>

          <input type="submit" value="Generate a new meme image" />
        </form>

        <div className="meme">
          <img src={formData.randomImg} alt="" className="meme--image" />
          <h2 className="memeText top-text">{formData.topText}</h2>
          <h2 className="memeText bottom-text">{formData.bottomText}</h2>
        </div>
      </main>
    </div>
  );
}
