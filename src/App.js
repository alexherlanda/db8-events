import React from 'react';
import { Layout, List, Card, Typography, Row, Col, Button } from 'antd';
import './App.css';
import { events } from './models/events';
import EventCard from './components/molecular/EventCard';
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
                <EventCard event={event} />{' '}
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
