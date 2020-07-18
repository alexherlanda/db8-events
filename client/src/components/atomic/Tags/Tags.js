import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';
import { useTranslation } from 'react-i18next';

function Tags(props) {
  const { tags } = props;
  const { t } = useTranslation();

  const eventTypeEnum = {
    TOURNAMENT: 0,
    WORKSHOP: 1,
  };

  const attendanceTypeEnum = {
    FACE2FACE: 0,
    VIRTUAL: 1,
  };

  const getLabel = (key, value, text) => {
    let label;
    switch (key) {
      case 'type':
        label =
          value === eventTypeEnum.TOURNAMENT
            ? t('card-tag-typeTournament')
            : t('card-tag-type-Worshop');
        break;
      case 'attendanceType':
        label =
          value === attendanceTypeEnum.FACE2FACE
            ? t('card-tag-attendance-Face2Face')
            : t('card-tag-attendance-Virtual');
        break;
      default:
        label = text;
        break;
    }
    return label;
  };

  return (
    <>
      {tags.map((tag) => {
        return (
          <Col span={7} key={tag.key}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                background: '#595959',
                borderRadius: '4px',
                color: 'white',
              }}
            >
              {getLabel(tag.key, tag.value, tag.text)}
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
