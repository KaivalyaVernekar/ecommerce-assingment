import React from "react";
import "./HomePage.css";
//import { fetchAPIData } from "../../api/index";

// Components
import Product from "../../components/Product/Product";

//import axios from "axios";
//import { useSessionStorageObject } from "react-use-window-sessionstorage";

/*const url = "http://localhost:9000/productsAPI";
let apiResponse;

const fetchAPIData = async () => {
  apiResponse = sessionStorage.getItem("nodeAPIResponse");
  if (!apiResponse) {
    try {
      const apiResponse = await axios.get(url);
      console.log(apiResponse);
      sessionStorage.setItem("nodeAPIResponse", JSON.stringify(apiResponse));
    } catch (error) {
      console.log("error");
    }
  }

  console.log(sessionStorage.getItem("nodeAPIResponse"));
  return apiResponse;
};*/

const HomePage = ({ homeData }) => {
  /* const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setApiData(await fetchAPIData());
    };
    fetchAPI();
  }, []);
  console.log(apiData);*/
  return (
    <div className="homepage">
      <h2 className="homepage__title">Latest Products....</h2>

      <div className="homepage__products">
        {homeData.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            productId={product.id}
            ratings={product.ratings}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
