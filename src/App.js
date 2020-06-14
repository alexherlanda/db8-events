import React from 'react';
import { Layout, List, Card, Row, Col } from 'antd';
import './App.less';
import { realEvents } from './models/events';
import EventCard from './components/molecular/EventCard';

function App(props) {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <Header />
      <Layout>
        <Content style={{ margin: 20 }}>
          <Row>
            <Col span={24}>
              <Card
                bodyStyle={{ padding: 0 }}
                style={{ borderRadius: '22px', marginBottom: '12px', padding: 0 }}
              >
                <Row
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    minHeight: '50px',
                    alignItems: 'flex-end',
                  }}
                >
                  <Col
                    style={{
                      alignItems: 'flex-end',
                      display: 'flex',
                      justifyContent: 'center',
                      fontSize: '15px',
                      fontWeight: 'bold',
                      borderBottom: '2px solid #1890ff',
                      height: '100%',
                      padding: '10px',
                    }}
                  >
                    Explorar
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 2,
              lg: 3,
              xl: 3,
              xxl: 4,
            }}
            dataSource={realEvents}
            renderItem={(event) => (
              <List.Item>
                <EventCard event={event} />
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
