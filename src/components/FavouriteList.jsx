import { Container, Row, Col } from "react-bootstrap";

import { useSelector } from "react-redux";
import SingleFavourite from "./singleFavourites";

const FAvouriteList = () => {
  const favouritesList = useSelector((state) => state.favourites.content);
  console.log("preferiti", favouritesList);
  return (
    <Container className="col-12 col-md-9 offset-md-3 mainPage">
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
              <SingleFavourite favourites={favouritesList} />
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FAvouriteList;
