import React, { useState } from 'react';
import { Card, Row, Col, Typography, Button, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import CountryBadge from '../../atomic/CountryBadge';
import Tags from '../../atomic/Tags';
import DateRange from '../../atomic/DateRange';

const { Title } = Typography;

function EventCard(props) {
  const { event } = props;
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const { t } = useTranslation();

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
                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                  <Modal
                    maskStyle={{ background: 'rgba(0, 0, 0, 0.95)' }}
                    title={event.name}
                    visible={showMoreInfo}
                    destroyOnClose
                    onCancel={() => setShowMoreInfo(false)}
                    footer={
                      <Button type="primary" onClick={() => setShowMoreInfo(false)}>
                        OK
                      </Button>
                    }
                  >
                    <p>
                      {`${event.description}. Esta organizado por ${event.convenorsCompleteName}`}
                    </p>
                  </Modal>
                  <Title
                    level={4}
                    style={{
                      marginRight: '10px',
                      textOverflow: 'clip',
                      maxHeight: '27px',
                      overflowY: 'hidden',
                    }}
                  >
                    {event.shortName}
                  </Title>
                  <div
                    style={{ color: 'grey', fontSize: '11px' }}
                    onClick={() => setShowMoreInfo(true)}
                  >
                    {t('card-showMore')}
                  </div>
                </div>
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
                {`${t('card-host')} ${event.convenorsShortName}`}
              </Col>

              <Col style={{ marginTop: 5 }} span={24}>
                {event.reunionSpot}
              </Col>
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center' }}>
              <DateRange
                locale={t('key-code')}
                startDate={event.startDate}
                endDate={event.endDate}
              />
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
                  disabled={event.infoLink ? false : true}
                  block
                  href={event.infoLink}
                  target="_blank"
                  style={{ borderRadius: '12px' }}
                >
                  {`${t('card-button-knowMore')} `}
                </Button>
              </Col>
              <Col xs={12} sm={12} md={12} lg={10} xl={8} xxl={8}>
                <Button
                  disabled={event.infoLink ? false : true}
                  block
                  href={event.registerLink}
                  target="_blank"
                  style={{ borderRadius: '12px' }}
                >
                  {`${t('card-button-register')} `}
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
