import React, { useState, useEffect } from 'react';
import { Layout as AntLayout, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const { Content } = AntLayout;

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setCollapsed(mobile);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setDrawerVisible(!drawerVisible);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <AntLayout className="min-h-screen bg-gray-100">
      {!isMobile && (
        <motion.div
          initial={{ x: collapsed ? -200 : 0 }}
          animate={{ x: collapsed ? -200 : 0 }}
          transition={{ duration: 0.3 }}
          className="fixed left-0 top-0 h-full z-20"
        >
          <Sidebar collapsed={collapsed} />
        </motion.div>
      )}

      <Drawer
        placement="left"
        closable={false}
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
        bodyStyle={{ padding: 0 }}
      >
        <Sidebar collapsed={false} />
      </Drawer>

      <AntLayout className={`transition-all duration-300 ${!isMobile && !collapsed ? 'ml-64' : 'ml-0'}`}>
        <Navbar collapsed={collapsed} setCollapsed={toggleSidebar} />
        <Content className="p-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </Content>
      </AntLayout>

      {isMobile && (
        <Button
          type="primary"
          icon={<MenuOutlined />}
          onClick={toggleSidebar}
          className="fixed bottom-4 right-4 z-30 rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
          aria-label="Toggle sidebar"
        />
      )}
    </AntLayout>
  );
};

export default Layout;
