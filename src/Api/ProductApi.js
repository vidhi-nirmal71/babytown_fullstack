import React, { useState, useEffect, createContext } from "react";
import ProductCards from "../Components/ProductCards";

export const ApiContext = createContext([]);

function ProductApi() {
  const [data, setData] = useState([]);
  
  console.log('data', data)

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/users");
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchData()
      .then((res) => {
        setData(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  console.log(data, "from api");

  return (
    <div>
      <ApiContext.Provider value={data}>
        <ProductCards/>
      </ApiContext.Provider>
    </div>
  );
}

export default ProductApi;
