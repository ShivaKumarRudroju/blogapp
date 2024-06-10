import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import Bloglist from "../bloglist";

import "./index.css";

const Homepage = () => {
  const [details, setDetails] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch("https://apis.ccbp.in/blogs");
        const data = await response.json();
        console.log(data);
        setDetails(data);
        setLoader(false);
      } catch (e) {
        console.log(`${e.message}`);
        setLoader(false);
      }
    };
    fetchingData();
  }, []);

  return (
    <div className="Home-page">
      {loader ? (
        <div className="loader">
          <Circles height={50} width={50} type="tail-spinner" color="#00BFFF" />
        </div>
      ) : (
        <div>
          <Bloglist list={details} />
        </div>
      )}
    </div>
  );
};
export default Homepage;
