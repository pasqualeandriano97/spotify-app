import { Col, Button, Image } from "react-bootstrap";
import { useEffect, useState } from "react";

const SingleFavourite = (props) => {
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    setCollection(props.favourites);
  }, []);

  return (
    <>
      {collection &&
        collection.slice(0, 4).map((music) => {
          return (
            <Col key={music.id}>
              <Image src={music.album.cover_medium} alt={music.title} />
              <p>
                Track:{music.title}
                <br />
                Artist:{music.artist.name}
                <br />
              </p>
            </Col>
          );
        })}
    </>
  );
};

export default SingleFavourite;
