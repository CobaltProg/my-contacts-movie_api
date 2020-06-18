/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Rating from './Rating';
import './display.css';

// eslint-disable-next-line react/prefer-stateless-function
class Display extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <Container fluid>
          <Row>
            {data.results.map((element) => (
              <Col
                id={element.id}
                style={{ padding: 50 }}
                xs={6}
                md={3}
                key={element.id}
              >
                <div className="cover_photo">
                  <Image src={`https://image.tmdb.org/t/p/original/${element.poster_path}`} fluid />
                  <div style={{ position: 'absolute', top: 70, right: 60 }}>
                    <Rating rate={element.vote_average} />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

// const Display = ({ data }) => (

// );

Display.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Display;
