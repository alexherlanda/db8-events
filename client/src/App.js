import React from 'react';
import { Layout, List, Card, Row, Col, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../src/components/atomic/LanguageSelector';
import './App.less';
import { useQuery } from './hooks/useQuery';
import SearchBar from './components/molecular/SearchBar';
import EventCard from './components/molecular/EventCard';
import { realEvents } from './models/events';

function App() {
  const { Header, Content } = Layout;
  const [handlers, events, isLoading] = useQuery([]);
  const { t } = useTranslation();

  return (
    <Layout>
      <Header style={{ padding: '0 22px' }}>
        <Row justify="end" gutter={[8, 8]}>
          <Col>
            <LanguageSelector />
          </Col>
          <Col>
            <Button
              href="https://forms.gle/vaknivGTW56PQ7Nx7"
              size="large"
              type="primary"
              icon={<PlusOutlined />}
              target="_blank"
            >
              {t('main-addButton')}
            </Button>
          </Col>
        </Row>
      </Header>
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
                    {t('main-bar-explore')}
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <SearchBar handlers={handlers} />
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
            loading={isLoading}
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
