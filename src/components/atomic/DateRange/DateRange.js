import React from 'react';
import { Col } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import moment from 'moment';
import 'moment/locale/es';
import PropTypes from 'prop-types';

function DateRange(props) {
  const { startDate, endDate, locale } = props;

  const formatDate = (ISOdate, formatPattern) => {
    let formatedString;
    formatedString = moment(ISOdate).locale(locale).format(formatPattern);
    return formatedString;
  };

  //TODO: Separate styles in another file
  return (
    <>
      <Col
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
          fontSize: '17px',
        }}
        span={4}
      >
        {formatDate(startDate, 'DD')}
      </Col>
      <Col
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        span={4}
      >
        <>
          {formatDate(startDate, 'MMMM')} <br /> {formatDate(startDate, 'YYYY')}
        </>
      </Col>
      <Col
        span={2}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ArrowRightOutlined />
      </Col>

      <Col
        span={4}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
          fontSize: '17px',
        }}
      >
        {formatDate(endDate, 'DD')}
      </Col>
      <Col
        span={4}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <>
          {formatDate(endDate, 'MMMM')} <br /> {formatDate(startDate, 'YYYY')}
        </>
      </Col>
    </>
  );
}

DateRange.propTypes = {
  locale: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
};

DateRange.defaultProps = {
  locale: 'es',
  startDate: '3000-06-10T02:00:00Z',
  endDate: '3000-06-10T02:00:00Z',
};

export default DateRange;
