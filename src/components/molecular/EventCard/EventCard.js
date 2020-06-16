import React from 'react';
import { Card, Row, Col, Typography, Button, Popover } from 'antd';
import CountryBadge from '../../atomic/CountryBadge';
import Tags from '../../atomic/Tags';
import DateRange from '../../atomic/DateRange';

const { Title } = Typography;

function EventCard(props) {
  const { event } = props;
  return (
    <Card
      hoverable
      style={{
        borderRadius: '15px',
        minHeight: 400,
        backgroundImage: `url('${event.coverUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      bodyStyle={{ padding: '10px' }}
    >
      <Row
        gutter={8}
        style={{
          display: 'flex',
          alignItems: 'bottom',
          //paddingLeft: '10px',
        }}
      >
        <Tags tags={event.tags} />
      </Row>
      <Row
        style={{
          marginTop: '33%',
        }}
      >
        <Col span={24}>
          <Card
            style={{
              borderRadius: '12px',
              minHeight: 250,
            }}
            bodyStyle={{ padding: '10px' }}
          >
            <Row>
              <Col span={24}>
                <Popover
                  title={event.name}
                  content={`${event.description}. Esta organizado por ${event.convenorsCompleteName}`}
                  placement="top"
                  trigger={'click'}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline' }}>
                    <Title
                      level={4}
                      style={{
                        marginRight: '10px',
                        textOverflow: 'clip',
                        maxHeight: '27px',
                      }}
                    >
                      {event.shortName}
                    </Title>
                    <div style={{ color: 'grey', fontSize: '11px' }}>...ver más</div>
                  </div>
                </Popover>
              </Col>
            </Row>

            <Row>
              <Col xs={7} sm={7} md={6} lg={6} xl={6} xxl={4}>
                <CountryBadge
                  countryLabel={event.country}
                  countryCode={event.countryCode}
                />
              </Col>

              <Col style={{ marginTop: 5 }} span={24}>
                {'By ' + event.convenorsShortName}
              </Col>

              <Col style={{ marginTop: 5 }} span={24}>
                {event.reunionSpot}
              </Col>
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center' }}>
              <DateRange startDate={event.startDate} endDate={event.endDate} />
            </Row>
            <Row
              gutter={[8, 8]}
              style={{
                marginTop: '22px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Col xs={12} sm={12} md={12} lg={10} xl={8} xxl={8}>
                <Button
                  block
                  href={event.infoLink}
                  target="_blank"
                  style={{ borderRadius: '12px' }}
                >
                  Saber más
                </Button>
              </Col>
              <Col xs={12} sm={12} md={12} lg={10} xl={8} xxl={8}>
                <Button
                  block
                  href={event.registerLink}
                  target="_blank"
                  style={{ borderRadius: '12px' }}
                >
                  Registrarse
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

export default EventCard;
