import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Menu, Button, Avatar, Typography, Tooltip } from 'antd';
import {
  DashboardOutlined,
  FileTextOutlined,
  AppstoreOutlined,
  MenuOutlined,
  CloseOutlined,
  UserOutlined,
  MessageOutlined,
  PictureOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { logout } from '../redux/action/user';

const { Sider } = Layout;
const { Text } = Typography;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };

  const allMenuItems = [
    {
      key: '/admin',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
      to: '/admindashboard',
      permission: 'AdminDashboard',
    },
    {
      key: '/admin/sliderimage',
      icon: <PictureOutlined />,
      label: 'Slider Images',
      to: '/admin/sliderimage',
      permission: 'SliderImage',
    },
    {
      key: '/admin/appointment',
      icon: <PictureOutlined />,
      label: 'appointment',
      to: '/admin/appointment',
      permission: 'Appointment',
    },
    {
      key: '/admin/youtubeshorts',
      icon: <FileTextOutlined />,
      label: 'YouTubeVideo',
      to: '/admin/youtubeshorts',
      permission: 'YouTubeShorts',
    },
    {
      key: '/admin/usermanagement',
      icon: <UserOutlined />,
      label: 'User Management',
      to: '/admin/usermanagement',
      permission: 'UserManagement',
    },
    {
      key: '/admin/blog',
      icon: <MessageOutlined />,
      label: 'blog',
      to: '/admin/blog',
      permission: 'blog',
    },
  ];

  const filterMenuItems = (items, permissions) =>
    items.filter(item => item.permission ? permissions.includes(item.permission) : true)
      .map(item => ({
        ...item,
        children: item.children ? filterMenuItems(item.children, permissions) : undefined,
      }));

  const menuItems = user ? filterMenuItems(allMenuItems, user.permissions) : allMenuItems;

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      breakpoint="lg"
      collapsedWidth={isMobile ? 0 : 80}
      onBreakpoint={(broken) => {
        setCollapsed(broken);
      }}
      className="min-h-screen text-white bg-gradient-to-b from-blue-600 to-blue-800"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4">
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <img src="/placeholder.svg?height=40&width=160" alt="Logo" className="h-10" />
              </motion.div>
            )}
          </AnimatePresence>
          <Button
            type="text"
            icon={collapsed ? <MenuOutlined /> : <CloseOutlined />}
            onClick={toggleCollapsed}
            className="text-white"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          />
        </div>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          className="flex-grow bg-transparent border-r-0"
        >
          {menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.to}>
                <span className="text-white transition-colors hover:text-blue-200">
                  {item.label}
                </span>
              </Link>
            </Menu.Item>
          ))}
        </Menu>

        <div className="p-4 border-t border-blue-400">
          {user && (
            <div className="flex items-center mb-4">
              <Avatar src={user.avatar} icon={<UserOutlined />} />
              <AnimatePresence>
                {!collapsed && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="ml-3"
                  >
                    <Text className="font-medium text-white">{user.name}</Text>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
          <Tooltip title={collapsed ? 'Logout' : ''} placement="right">
            <Button
              type="text"
              icon={<LogoutOutlined />}
              onClick={logoutHandler}
              className="flex items-center justify-center w-full text-white transition-colors hover:text-red-400 hover:bg-blue-700"
            >
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    Logout
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </Tooltip>
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;
