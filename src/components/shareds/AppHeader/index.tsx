import React, { ChangeEvent, useEffect, useRef } from 'react';
import { Input, InputRef } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

import './AppHeader.scss';

const AppHeader = () => {
  const searchInputRef = useRef<InputRef>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => console.log(e);

  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'k' && e.metaKey) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    document.body.addEventListener('keydown', keydownHandler);
    return () => {
      document.body.removeEventListener('keydown', keydownHandler);
    };
  }, []);

  return (
    <header className="component is-app-header">
      <div className="container-fluid">
        <div className="app-header--columns">
          <div className="app-header--columns__item is-logo">
            <Link to="/">
              <img src={logo} alt="productscatalogue" />
            </Link>
          </div>
          <div className="app-header--columns__item is-search">
            <Input
              ref={searchInputRef}
              onChange={onChange}
              placeholder="type here for search..."
              allowClear
              size="large"
              bordered={false}
              prefix={<SearchOutlined className="site-form-item-icon" />}
              suffix={
                <span className="keybindings">
                  <span className="ant-typography keybinding">
                    <kbd>⌘</kbd>
                  </span>
                  <span className="ant-typography keybinding">
                    <kbd>K</kbd>
                  </span>
                </span>
              }
            />
          </div>
          <div className="app-header--columns__item is-menu">
            <nav>
              <Link to="/">Start</Link>
              <Link to="/">Retail</Link>
              <Link to="/">Hospitality</Link>
              <Link to="/">Highlights</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
