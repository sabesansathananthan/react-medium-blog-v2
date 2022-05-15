import { useEffect, useState } from "react";
import axios from "axios";
import "./assets/mediumish.css";
import Cards from "./components/card";

function App() {
  const [articleData, setArticleData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://advanced-medium-api.herokuapp.com/advanced/customized/user/sabesan96"
      );

      setArticleData(result.data);
    };

    fetchData();
  }, []);
  console.log(articleData);
  return (
    <div className="container">
      <section className="recent-posts">
        <div className="container">
          <div className="row g-5 listrecent">
            {articleData.length !== 0 &&
              articleData.map((data) => <Cards data={data} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
