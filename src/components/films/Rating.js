import React from 'react';
import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';

const Rating = ({ rate }) => (
  <div style={{
    backgroundColor: '#fff',
    display: 'flex',
    width: 70,
    justifyContent: 'space-around',
    alignContent: 'center',
    paddingTop: 12,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  }}
  >
    <div>
      <AiFillStar size={20} color="#ffbf00" />
    </div>
    <div>
      <p>{rate}</p>
    </div>
  </div>
);

Rating.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default Rating;
