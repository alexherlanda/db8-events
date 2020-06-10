import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';

function Tags(props) {
  const { tags } = props;

  //TODO: Separate styles in another file
  return (
    <>
      {tags.map((tag) => {
        return (
          <Col span={6} key={tag.key}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                background: '#595959',
                borderRadius: '4px',
                color: 'white',
              }}
            >
              {tag.text}
            </div>
          </Col>
        );
      })}
    </>
  );
}

Tags.protoTypes = {
  tags: PropTypes.array,
};

Tags.defaultProps = {
  tags: [],
};
export default Tags;
