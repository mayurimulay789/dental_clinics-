import React, { useState, useEffect } from 'react';
import { Button, Avatar, Dropdown, Menu, Switch } from 'antd';
import {
  MenuOutlined,
  CloseOutlined,
  UserOutlined,
  MoonOutlined,
  SunOutlined,
  BellOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { logout } from '../redux/action/user'; // Adjust the path as necessary

const Navbar = ({ collapsed, setCollapsed }) => {
  const { user } = useSelector((state) => state.user);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md transition-colors duration-300`}>
      <nav className="container flex items-center justify-between px-4 py-3 mx-auto">
        <div className="flex items-center">
          <Button
            type="text"
            onClick={toggleCollapsed}
            className={`mr-4 ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'}`}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <MenuOutlined /> : <CloseOutlined />}
          </Button>
          {!isMobile && (
            <motion.h1
              className="text-xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Dashboard
            </motion.h1>
          )}
        </div>

        <div className="flex items-center space-x-4">
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Switch
                checkedChildren={<SunOutlined />}
                unCheckedChildren={<MoonOutlined />}
                checked={darkMode}
                onChange={toggleDarkMode}
              />
            </motion.div>
          )}

          <Button
            type="text"
            icon={<BellOutlined />}
            className={`${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'}`}
            aria-label="Notifications"
          />

          <Dropdown overlay={userMenu} trigger={['click']} placement="bottomRight">
            <Button type="text" className={`flex items-center ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'}`}>
              <Avatar src={user.avatar} icon={<UserOutlined />} className="mr-2" />
              <span className="hidden md:inline">{user.name}</span>
            </Button>
          </Dropdown>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
