import React from 'react';
import { mainContainer, countryIconContainer, countryTextContainer } from './styles';
import PropTypes from 'prop-types';
import CountryIcon from '../atomic/CountrieIcon';

function CountryBadge(props) {
  const { countryLabel, countryCode } = props;

  return (
    <div style={mainContainer}>
      <div style={countryIconContainer}>
        <CountryIcon countryCode={countryCode} />
      </div>
      <div style={countryTextContainer}>{countryLabel}</div>
    </div>
  );
}

CountryBadge.propTypes = {
  country: PropTypes.string,
  countryCode: PropTypes.string,
};

CountryBadge.defaultProps = {
  countryLabel: 'México',
  countryCode: 'MX',
};

export default CountryBadge;
