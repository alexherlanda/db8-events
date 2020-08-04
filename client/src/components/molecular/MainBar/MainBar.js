import React, { useState } from 'react';
import { Button, Row, Col, Input } from 'antd';
import LanguageSelector from '../../atomic/LanguageSelector';
import { ArrowLeftOutlined, SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { listEventsRequest } from '../../../redux/actions/eventsActions';

function MainBar(props) {
  const { listEventsRequest: listEventsReq } = props;
  const { Search } = Input;
  const [isSearchCollapsed, setSearchCollpased] = useState(true);

  const handleCloseSearch = () => {
    setSearchCollpased(true);
  };

  const handleOpenSearch = () => {
    setSearchCollpased(false);
  };

  const handleSearch = (value) => {
    console.log(value);
    listEventsReq({ search: value, all: false });
  };

  const handleSearchOnChange = (event) => {
    if (event.target) listEventsReq({ search: event.target.value, all: false });
  };

  //TODO: Add a cool animation when search bar enters. Exit search when clicking in the secreen o ESC"
  //TODO: Translate placeholder text
  return (
    <Row
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        height: '100%',
      }}
    >
      {isSearchCollapsed ? (
        <>
          <Col span={6} />
          <Col span={6} />
          <Col span={12}>
            <Row gutter={[16, 0]} justify="end">
              <Col
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button
                  onClick={handleOpenSearch}
                  type="text"
                  size="large"
                  icon={<SearchOutlined style={{ color: 'white' }} />}
                />
              </Col>
              <Col
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <LanguageSelector />
              </Col>
              <Col
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                  }}
                  href="https://forms.gle/vaknivGTW56PQ7Nx7"
                  type="primary"
                  icon={<PlusOutlined />}
                  target="_blank"
                  size="large"
                />
              </Col>
            </Row>
          </Col>
        </>
      ) : (
        <>
          <Col
            xs={2}
            sm={2}
            md={4}
            lg={6}
            xl={7}
            xxl={7}
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Button
              size="large"
              onClick={handleCloseSearch}
              type="text"
              icon={<ArrowLeftOutlined style={{ color: 'white' }} />}
            />
          </Col>
          <Col xs={20} sm={20} md={16} lg={12} xl={10} xxl={10}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Search
                style={{ width: '95%' }}
                autoFocus
                placeholder="Search by name or host"
                onSearch={handleSearch}
                onChange={handleSearchOnChange}
                size="large"
              />
            </div>
          </Col>
          <Col xs={2} sm={2} md={4} lg={6} xl={7} xxl={7} />
        </>
      )}
    </Row>
  );
}

export default connect(null, { listEventsRequest })(MainBar);
