import "./App.scss";
import Header from "./Header/header.jsx";
import Request from "./Request/request.jsx";

import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const config = {
        method: "get",
        url: "http://localhost:3000/requests",
        headers: {
          Accept: "application/json",
        },
      };
      await axios(config).then((res) => setData(res?.data));
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Request data={data} />
    </div>
  );
}

export default App;
