import { Container, Row, Col } from "react-bootstrap";
import SingleCollection from "./singleCollection";

function MainPage() {
  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <Container>
        <Row>
          <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <div id="rock">
              <h2>Rock Classics</h2>
              <Row
                className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="rockSection"
              >
                <SingleCollection query={"ACDC"} />
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <div id="pop">
              <h2>Pop Culture</h2>
              <Row
                className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="popSection"
              >
                <SingleCollection query={"BRITNEY SPEARS"} />
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <div id="hiphop">
              <h2>HipHop</h2>
              <Row
                className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="hipHopSection"
              >
                <SingleCollection query={"50 CENT"} />
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default MainPage;
