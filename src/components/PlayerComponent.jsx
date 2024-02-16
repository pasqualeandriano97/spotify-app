import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

function PlayerControls() {
  const [current, setCurrent] = useState(null);
  const currentSong =
    useSelector((state) => state.currentSong.currentSong) || null;

  useEffect(() => {
    setCurrent(currentSong);
  }, [currentSong]);
  console.log("current", current);
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <Container fluid>
        <Row className="h-100">
          <Col lg={10} className="offset-lg-2">
            <Row className="h-100 flex-column justify-content-center align-items-center">
              <Col xs={6} md={4} className="playerControls">
                <div className="d-flex">
                  <a href="#">
                    <img
                      src={"/src/assets/playerbuttons/shuffle.png"}
                      alt="shuffle"
                    />
                  </a>
                  <a href="#">
                    <Image
                      src={"/src/assets/playerbuttons/prev.png"}
                      alt="prev"
                    />
                  </a>
                  <a href="#">
                    <Image
                      src={"/src/assets/playerbuttons/play.png"}
                      alt="play"
                    />
                  </a>
                  <a href="#">
                    <Image
                      src={"/src/assets/playerbuttons/next.png"}
                      alt="next"
                    />
                  </a>
                  <a href="#">
                    <Image
                      src={"/src/assets/playerbuttons/repeat.png"}
                      alt="repeat"
                    />
                  </a>
                </div>
                <div>
                  {current && (
                    <Row>
                      <Col>
                        <Image
                          src={current.album.cover}
                          alt="album_cover"
                          fluid
                        />
                      </Col>
                      <Col>
                        <Row>
                          <Col>
                            <h5 className="text-white">{current.title}</h5>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  )}
                </div>
                <ProgressBar className="mt-3" now={90} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PlayerControls;
