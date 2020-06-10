import React from 'react';
import { Col, Typography } from 'antd';
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

  const { Title } = Typography;

  //TODO: Separate styles in another file
  return (
    <>
      <Col
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
        span={4}
      >
        <Title level={4}> {formatDate(startDate, 'DD')} </Title>
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
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Title level={4}>{formatDate(endDate, 'DD')} </Title>
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
