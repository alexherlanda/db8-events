import React from 'react';
import Icon from '@ant-design/icons';
import PropTypes from 'prop-types';

//Start converting SVG into React components
import { ReactComponent as MXa } from '../../../assets/countries/mx.svg';
import { ReactComponent as PEa } from '../../../assets/countries/pe.svg';
import { ReactComponent as COa } from '../../../assets/countries/co.svg';
import { ReactComponent as ESa } from '../../../assets/countries/es.svg';
import { ReactComponent as USa } from '../../../assets/countries/us.svg';
import { ReactComponent as ECa } from '../../../assets/countries/ec.svg';
import { ReactComponent as CLa } from '../../../assets/countries/cl.svg';
import { ReactComponent as PAa } from '../../../assets/countries/pa.svg';
import { ReactComponent as VEa } from '../../../assets/countries/ve.svg';
//End converting SVG into React components

function CountryIcon(props) {
  const { countryCode } = props;

  //Start of converting icons into antdIcons
  //* CMUDE Region
  const MX = (props) => <Icon component={MXa} {...props} />; //Mexico
  const PE = (props) => <Icon component={PEa} {...props} />; //Peru
  const CO = (props) => <Icon component={COa} {...props} />; //Colombia
  const ES = (props) => <Icon component={ESa} {...props} />; //Spain
  const US = (props) => <Icon component={USa} {...props} />; //United States
  const EC = (props) => <Icon component={ECa} {...props} />; //Ecuador
  const CL = (props) => <Icon component={CLa} {...props} />; //Chile
  const PA = (props) => <Icon component={PAa} {...props} />; //Chile
  const VE = (props) => <Icon component={VEa} {...props} />; //Venezuela

  //End  of converting icons into antdIcons

  let CIcon;
  switch (countryCode) {
    case 'MX':
      CIcon = <MX />;
      break;

    case 'PE':
      CIcon = <PE />;
      break;

    case 'CO':
      CIcon = <CO />;
      break;

    case 'ES':
      CIcon = <ES />;
      break;

    case 'US':
      CIcon = <US />;
      break;

    case 'EC':
      CIcon = <EC />;
      break;

    case 'CL':
      CIcon = <CL />;
      break;

    case 'PA':
      CIcon = <PA />;
      break;

    case 'VE':
      CIcon = <VE />;
      break;

    case '-':
      CIcon = null;
      break;

    default:
      CIcon = null;
      break;
  }

  return CIcon;
}

CountryIcon.propTypes = {
  countryCode: PropTypes.string.isRequired,
};

CountryIcon.defaultProps = {
  countryCode: 'MX',
};

export default CountryIcon;
