import React from 'react';
import { Layout, List, Card, Typography, Row, Col, Button } from 'antd';
import './App.css';
import { events } from './models/events';
import CountryBadge from './components/CountryBadge';
import Tags from './components/atomic/Tags';
import DateRange from './components/atomic/DateRange';
function App(props) {
  const { Title } = Typography;
  const { Header, Content } = Layout;

  return (
    <Layout>
      <Header />
      <Layout>
        <Content style={{ margin: 20 }}>
          <Row>
            <Col span={24}>
              <Card style={{ borderRadius: '12px', marginBottom: '12px' }} />
            </Col>
          </Row>
          <List
            grid={{
              gutter: 8,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 3,
              xxl: 3,
            }}
            dataSource={events}
            renderItem={(event) => (
              <List.Item>
                <Card
                  hoverable
                  style={{
                    borderRadius: '15px',
                    minHeight: 400,
                    backgroundImage: event.coverUrl,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  bodyStyle={{ padding: '10px' }}
                >
                  <Row gutter={8} style={{ display: 'flex', alignItems: 'bottom' }}>
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
                          <Title level={4}>{event.name}</Title>
                        </Row>

                        <Row>
                          <Col xs={7} sm={7} md={6} lg={6} xl={6} xxl={4}>
                            <CountryBadge
                              countryLabel={event.country}
                              countryCode={event.countryCode}
                            />
                          </Col>

                          <Col style={{ marginTop: 5 }} span={24}>
                            {'By ' + event.convenors}
                          </Col>

                          <Col style={{ marginTop: 5 }} span={24}>
                            {event.reunionSpot}
                          </Col>
                        </Row>

                        <Row style={{ display: 'flex', justifyContent: 'center' }}>
                          <DateRange
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
                            <a href={event.infoLink}>
                              <Button block style={{ borderRadius: '12px' }}>
                                Saber más
                              </Button>
                            </a>
                          </Col>
                          <Col xs={12} sm={12} md={12} lg={10} xl={8} xxl={8}>
                            <a href={event.registerLink}>
                              <Button block style={{ borderRadius: '12px' }}>
                                Registrarse
                              </Button>
                            </a>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                </Card>
              </List.Item>
            )}
          />
        </Content>
      </Layout>
    </Layout>
  );
}

App.prototypes = {};

App.defaultProps = {};

export default App;
