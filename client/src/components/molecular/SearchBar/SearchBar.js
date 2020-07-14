import React, { useState } from 'react'
import { Card, Row, Col, Collapse } from 'antd'
import { ColStyle, CardStyle, CollapseStyle } from './styles'

import SearchBarBody from '../SearchBarBody'
import SearchBarHeader from '../SearchBarHeader'

const { Panel } = Collapse

export const SearchBar = ({ handlers }) => {
  const [active, setActive] = useState(1)

  const handleCollapse = (e) => {
    e.preventDefault()
    setActive(active === 1 ? 0 : 1)
  }

  return (
    <Row>
      <Col span={24} style={ColStyle}>
        <Card bodyStyle={{ padding: 0 }} style={CardStyle}>
          <Collapse bordered={false} ghost activeKey={[active]}>
            <Panel
              header={
                <SearchBarHeader handleCollapse={handleCollapse} value={active} handlers={handlers} />
              }
              showArrow={false}
              style={CollapseStyle}
            >
              <SearchBarBody handlers={handlers} />
            </Panel>
          </Collapse>
        </Card>
      </Col>
    </Row>
  )
}
