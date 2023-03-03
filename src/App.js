import React, { useEffect, useState } from "react";
import "./App.css";
import User from "./User";
// import users from "./users.json";

const App = () => {
  const [randomUsers, setRandomUsers] = useState([])
  const [gender, setGender] = useState('')
  const [range, setRange] = useState(10)

  const baseurl = 'https://randomuser.me/api/?'

  useEffect(() => {
    let url = baseurl
    url += `results=${range}`
    if (gender) url += `&gender=${gender}`
    fetch(url)
    .then(response => response.json())
    .then(data => setRandomUsers(data.results))
    .catch(err => console.log(err))
  }, [gender, range])
  
  const user = randomUsers.map((item) => {
    return <User {...item} />;
  });

  return (
    <div className="App">
      <button onClick={() => setGender('female')}>Show Only Women</button>
      <button onClick={() => setGender('male')}>Show Only Men</button>
      <button onClick={() => setGender()}>Show Both</button>
      <input type="range" min="1" max="100" onChange={(e) => setRange(e.target.value)} value={range}></input>
      {range}
      {user}
    </div>
  );
};

export default App;
