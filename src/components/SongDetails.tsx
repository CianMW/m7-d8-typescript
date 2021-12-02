import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { trackInfo } from "../Interfaces";
import { Col, Container, Row } from "react-bootstrap";
import ReactAudioPlayer from "react-audio-player";

const SongDetails = () => {
  const [trackInfo, setTrackInfo] = useState<trackInfo>();

  const params = useParams();
  console.log("here's the ID from the params", params.id);

  const fetchTrackDetails = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/track/${params.id}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Here is the track Info", data);
        setTrackInfo(data);
      } else {
        console.log("There is an error fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!trackInfo) {
      fetchTrackDetails();
    }
  });

  return (
    <Container>
      <Row className="d-flex justify-content-between">
        <Col></Col>

        <Col className="trackDetail-border">
          {trackInfo && (
            <div>
              <img src={trackInfo.album.cover_medium} />
              {/* // start of track info section */}
              <div className="d-flex flex-column align-items-start">
                <h2 className="song-title">{trackInfo.title}</h2>
                <small className="artist-info">
                  by {trackInfo.artist.name}
                </small>
                <ReactAudioPlayer
  src={trackInfo.preview}
  autoPlay={false}
  volume={0.5}
  controls
/>
              </div>
            </div>
          )}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
export default SongDetails;
