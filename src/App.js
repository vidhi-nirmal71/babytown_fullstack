import "./App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./utils/themes";
import { Container } from "@mui/material";
import Routing from "./routes";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="xl"
          sx={{
            background: "#fff",
          }}
        >
          <Routing/>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
