import React, { useEffect } from 'react'
import { Layout, List, Card, Row, Col } from 'antd'
import { useTranslation } from 'react-i18next'
import './App.less'
import { useQuery } from './hooks/useQuery'
import SearchBar from './components/molecular/SearchBar'
import EventCard from './components/molecular/EventCard'
import { listEventsRequest } from '../src/redux/actions/eventsActions'
import { connect } from 'react-redux'
import MainBar from './components/molecular/MainBar'
function App (props) {
  const { events: eventsR, listEventsRequest: listEventsReq } = props
  const { Header, Content } = Layout
  const [handlers, events, isLoading] = useQuery([])
  const { t } = useTranslation()

  useEffect(() => {
    listEventsReq({ all: true })
  }, [listEventsReq])

  return (
    <Layout>
      <Header style={{ padding: '0 22px' }}>
        <MainBar />
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
                    alignItems: 'flex-end'
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
                      padding: '10px'
                    }}
                  >
                    {t('main-bar-explore')}
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          {false && <SearchBar handlers={handlers} />}
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 2,
              lg: 3,
              xl: 3,
              xxl: 4
            }}
            loading={eventsR.isLoading}
            dataSource={eventsR.data}
            renderItem={(event) => (
              <List.Item>
                <EventCard event={event} />
              </List.Item>
            )}
          />
        </Content>
      </Layout>
    </Layout>
  )
}

App.prototypes = {}

App.defaultProps = {}

function mapStateToProps (state) {
  return {
    events: state.events.eventsList
  }
}

export default connect(mapStateToProps, { listEventsRequest })(App)
