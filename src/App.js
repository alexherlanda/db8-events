import React from 'react';
import { Layout, List, Card, Typography, Row, Col, Button } from 'antd';
import './App.css';
import { ArrowRightOutlined } from '@ant-design/icons';
import { events } from './models/events';
import CountryBadge from './components/CountryBadge';

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
              <Card style={{ borderRadius: '12px', marginBottom: '12px' }}>
                Barra de tareas aqui
              </Card>
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
                  style={{
                    borderRadius: '15px',
                    minHeight: 400,
                  }}
                  bodyStyle={{ padding: '10px' }}
                >
                  <Row gutter={8} style={{ display: 'flex', alignItems: 'bottom' }}>
                    <Col span={6}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          background: 'lightgrey',
                          borderRadius: '4px',
                          color: 'white',
                        }}
                      >
                        {event.tags.category}
                      </div>
                    </Col>
                    <Col span={6}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          background: 'lightgrey',
                          borderRadius: '4px',
                          color: 'white',
                        }}
                      >
                        {event.tags.attendanceType}
                      </div>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      marginTop: '33%',
                    }}
                  >
                    <Col span={24}>
                      <Card
                        hoverable
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
                          <Col span={5}>
                            <CountryBadge countryLabel={event.country} />
                          </Col>
                          <Col span={24}>{event.host}</Col>
                          <Col span={24}>{event.reunionSpot}</Col>
                        </Row>
                        <Row style={{ display: 'flex', justifyContent: 'center' }}>
                          <Col
                            style={{
                              display: 'flex',
                              justifyContent: 'flex-end',
                              alignItems: 'center',
                            }}
                            span={4}
                          >
                            <Title level={4}>25 </Title>
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
                              mayo <br /> 2020
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
                            <Title level={4}>25 </Title>
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
                              mayo <br /> 2020
                            </>
                          </Col>
                        </Row>
                        <Row
                          style={{
                            marginTop: '22px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <Col span={6}>
                            <Button
                              block
                              type="primary"
                              style={{ borderRadius: '12px' }}
                            >
                              Book
                            </Button>
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
