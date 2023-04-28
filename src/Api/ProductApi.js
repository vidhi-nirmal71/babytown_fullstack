import React, { useState, useEffect, createContext } from "react";
// import { MyContext } from "../App";
import Categories from "../containers/App/Catagories";

export const ApiContext = createContext([]);

function ProductApi() {
  
  const [data, setData] = useState([]);
  
  // console.log('data', data)

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/product");
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

  // console.log(data, "from api");

  return (
    <div>
       <Categories data={data}/>
        {/* <MyContext.Provider value={data}>
          <Categories />
        </MyContext.Provider> */}
    </div>
  );
}

export default ProductApi;
