import "./styles.css";
import { useState } from "react";

export default function App() {
  const [formData, setformData] = useState({});
  const [error, setError] = useState(false);
  const [data, setData] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    //console.log(formData);
    const { username, email, password, subscribe } = formData;
    if (!username || !email || !password || !subscribe) {
      setError(true);
      setData("Enter data");
    } else {
      setError(false);
      setData("Login Successful");
    }
  }

  return (
    <div className="App">
      <nav>
        <h1>ReactForm</h1>
        <h3>React-project5</h3>
      </nav>
      <main>
        <h2>Login form</h2>
        {error ? (
          <p>{data}</p>
        ) : (
          <div>
            <h2>{data}</h2>
            <p>username: {formData.username}</p>
            <p>email: {formData.email}</p>
            <p>password: {formData.password}</p>
            <p>
              Subscribe: {formData.subscribe ? "Subscribed" : "Not Subscribed"}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={formData.username}
            placeholder="Enter username"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter password"
            onChange={handleChange}
          />
          <div>
            <input
              type="checkbox"
              name="subscribe"
              value={formData.password}
              id="subscribeId"
              onChange={handleChange}
            />
            <label htmlFor="subscribeId">
              {" "}
              Subscribe our weekly newsLetter
            </label>
          </div>
          <input type="submit" />
        </form>
      </main>
    </div>
  );
}
