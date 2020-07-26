import React, { useState } from 'react';
import { Button, Row, Col, Input } from 'antd';
import LanguageSelector from '../../atomic/LanguageSelector';
import { ArrowLeftOutlined, SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { searchIsOpenStyle, searchIsCloseStyle } from './styles';
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
          <Col span={8} />
          <Col span={8} />
          <Col span={8}>
            <Row gutter={[8,8]}>
              <Col
                span={7}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button
                  onClick={handleOpenSearch}
                  type="text"
                  icon={<SearchOutlined style={{ color: 'white' }} />}
                />
              </Col>
              <Col
                span={7}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <LanguageSelector />
              </Col>
              <Col
                span={10}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button
                  href="https://forms.gle/vaknivGTW56PQ7Nx7"
                  type="primary"
                  icon={<PlusOutlined />}
                  target="_blank"
                />
              </Col>
            </Row>
          </Col>
        </>
      ) : (
        <>
          <Col xs={4} sm={4} md={4} lg={6} xl={7} xxl={7}>
            <Button
              onClick={handleCloseSearch}
              type="text"
              icon={<ArrowLeftOutlined style={{ color: 'white' }} />}
            />
          </Col>
          <Col xs={16} sm={16} md={16} lg={12} xl={10} xxl={10}>
            <div style={isSearchCollapsed ? searchIsCloseStyle : searchIsOpenStyle}>
              <Search
                autoFocus
                placeholder="Search by name or host"
                onSearch={handleSearch}
                onChange={handleSearchOnChange}
              />
            </div>
          </Col>
          <Col xs={4} sm={4} md={4} lg={6} xl={7} xxl={7} />
        </>
      )}
    </Row>
  );
}

export default connect(null, { listEventsRequest })(MainBar);
