import { useState, useEffect } from "react";
import {
  FormGroup,
  Form,
  FormControl,
  Button,
  Container,
  Col,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { singleSong, songs } from "../Interfaces";

const MainSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<singleSong[]>();

  const fetchData = async () => {
    try {
      if (query.length > 3) {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
        );
        if (response.ok) {
          let results = await response.json();
             let newResults: singleSong[] = results.data
          console.log("This is the data!! :", newResults);
          setData(newResults);
        } else {
          console.log("couldn't fetch data ");
        }
      } else {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=random`
        );
        if (response.ok) {
          let results = await response.json();
           let newResults: singleSong[]  = results.data
          console.log("This is the data!! :", newResults);
          setData(newResults);
        } else {
          console.log("couldn't fetch data ");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
      if (query.length > 3){
           fetchData();
      }
   
  }, [query]);

  return (
    <div>
      <Container className="mb-4">
        <Row className="mt-5 d=flex flex-row-reverse">
          <Col sm={3}>
            <FormGroup className="search-group">
              <Form className="d-flex">
                <FormControl
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button
                  onClick={() => console.log(query)}
                  variant="outline-info"
                >
                  Search
                </Button>
              </Form>
            </FormGroup>
          </Col>
        </Row>
      </Container>

      <Container>
          <Row>
        {data && (
          data.map((data) => 
          <Col>
          <Link to={`/songDetails/${data.id}`}>
              <div >
                  <img className="track-image" src={data.album.cover_medium}/>
                  <div><h5>{data.title}</h5></div>
              </div>
            </Link>
          </Col>
          )
        )}
        </Row>
      </Container>
    </div>
  );
};

export default MainSearch;
