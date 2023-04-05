import Home from "./pages/Home";
import Header from "./components/Header/Header";
import { Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "white" }}>
      <Header />
      <Home />
    </Container>
  );
}

export default App;
