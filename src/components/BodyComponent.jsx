import { Container, Row } from "react-bootstrap";
import SidebarComponent from "./SidebarComponent";
import MainComponent from "./MainComponent";
import PlayerControls from "./PlayerComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavouriteList from "./FavouriteList";

const BodyComponent = () => {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <aside>
            <SidebarComponent />
          </aside>
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/favourite" element={<FavouriteList />} />
          </Routes>
        </Row>
      </Container>
      <footer>
        <PlayerControls />
      </footer>
    </BrowserRouter>
  );
};

export default BodyComponent;
