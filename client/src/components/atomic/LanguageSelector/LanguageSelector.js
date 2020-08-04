import React from 'react';
import { Dropdown, Menu, Button } from 'antd';
import { TranslationOutlined, DownOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function LanguageSelector(props) {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = ({ key }) => {
    i18n.changeLanguage(key);
  };

  const menu = (
    <Menu onClick={handleLanguageChange} icon={<TranslationOutlined />}>
      <Menu.Item key="en">English</Menu.Item>
      <Menu.Item key="es">Español</Menu.Item>
      <Menu.Item key="pt">Português</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown size="large" icon={<TranslationOutlined />} overlay={menu} trigger={['click']}>
      <Button
        type="text"
        size="large"
        icon={<TranslationOutlined  style={{ color: 'white'}} />}
      />
      
    </Dropdown>
  );
}

LanguageSelector.propTypes = {
  lng: PropTypes.string,
};

LanguageSelector.defaultProps = {
  lng: 'es',
};

export default LanguageSelector;
