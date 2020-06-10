import React from 'react';
import { mainContainer, countryIconContainer, countryTextContainer } from './styles';
import CountryIcon from '../CountrieIcon';
import PropTypes from 'prop-types';

function CountryBadge(props) {
  const { countryLabel, countryCode } = props;

  return (
    <div style={mainContainer}>
      <div style={countryIconContainer}>
        <CountryIcon countryCode={countryCode} style={{ fontSize: '300px' }} />
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
