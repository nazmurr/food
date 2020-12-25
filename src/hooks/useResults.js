import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [costEffective, setCostEffective] = useState([]);
  const [pricier, setPricier] = useState([]);
  const [bigSpender, setBigSpender] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const filterResultsByPrice = (data, price) => {
    return data.filter((result) => {
      return result.price === price;
    });
  };

  const searchApi = async (searchTerm) => {
    try {
      //console.log('api called');
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "San Jose",
        },
      });
      setCostEffective(filterResultsByPrice(response.data.businesses, '$'));
      setPricier(filterResultsByPrice(response.data.businesses, '$$'));
      setBigSpender(filterResultsByPrice(response.data.businesses, '$$$'));
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("steak");
  }, []);

  return [searchApi, costEffective, pricier, bigSpender, errorMessage];
};
