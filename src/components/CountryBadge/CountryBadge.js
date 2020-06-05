import React from 'react';
import { mainContainer, countryIconContainer, countryTextContainer } from './styles';
import PropTypes from 'prop-types';
import Icon from '@ant-design/icons';
import CountryIcon from '../atomic/CountrieIcon';

//Start converting SVG into React components
import { ReactComponent as MXa } from '../../assets/countries/mx.svg';
//End converting SVG into React components

//Start of converting icons into antdIcons
const MX = (props) => <Icon component={MXa} {...props} />;
//End  of converting icons into antdIcons

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
