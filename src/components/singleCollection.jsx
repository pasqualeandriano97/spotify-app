import { Col } from "react-bootstrap";
import SearchApi from "../searchApi";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TO_FAVOURITES,
  CURRENT_SONG,
  REMOVE_FROM_FAVOURITES,
} from "../redux/actions";

const SingleCollection = (query) => {
  const [collection, setCollection] = useState([]);
  const [like, setLike] = useState(false);

  const query1 = query.query;
  const dispatch = useDispatch();

  useEffect(() => {
    SearchApi(query1).then((data) => {
      return setCollection(data);
    });
  }, []);

  const handleadd = (music) => {
    setLike(!like);
    dispatch({ type: ADD_TO_FAVOURITES, payload: music });
  };
  //   const handleremove = (music) => {
  //     dispatch({ type: REMOVE_FROM_FAVOURITES, payload: music });
  //     setLike(!like);
  //   };
  console.log(collection);
  const handlePlayer = (music) => {
    dispatch({ type: CURRENT_SONG, payload: music });
  };

  return (
    <>
      {collection &&
        collection.slice(0, 4).map((music) => {
          return (
            <Col key={music.id}>
              <Image
                src={music.album.cover_medium}
                alt={music.title}
                onClick={() => {
                  handlePlayer(music);
                }}
              />
              <p>
                Track:{music.title}
                <br />
                Artist:{music.artist.name}
                <br />
                <Button
                  variant="outline-danger "
                  className="mt-1"
                  onClick={() => handleadd(music)}
                >
                  Add to Playlist
                </Button>
              </p>
            </Col>
          );
        })}
    </>
  );
};

export default SingleCollection;
