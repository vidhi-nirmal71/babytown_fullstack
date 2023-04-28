import "./App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./utils/themes";
import { Container } from "@mui/material";
import Routing from "./routes";
import React, { useState, useEffect, createContext } from "react";

export const MyContext = React.createContext();
export const ApiContext = createContext([]);

function App() {
  const [data, setData] = useState([]);
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="xl"
          sx={{
            background: "#fff",
          }}
        >
          <MyContext.Provider value={data}>
            <Routing />
          </MyContext.Provider>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
