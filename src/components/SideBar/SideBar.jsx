import React, { useState, useMemo } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Home as HomeIcon,
  Work as WorkIcon,
  Info as InfoIcon,
  ContactMail as ContactIcon,
  ArrowForward,
  ArrowBack,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import HomePage from "../HomePage/HomePage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import AboutMePage from "../AboutMePage/AboutMePage";
import ContactPage from "../ContactPage/ContactPage";

const menuItems = [
  { key: "home", text: "Home", icon: <HomeIcon /> },
  { key: "projects", text: "Projects", icon: <WorkIcon /> },
  { key: "aboutme", text: "About Me", icon: <InfoIcon /> },
  { key: "contact", text: "Contact", icon: <ContactIcon /> },
];

const pageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const mobilePageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const SideBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isOpen, setIsOpen] = useState(false);
  const [activeKey, setActiveKey] = useState("home");

  const handlePageChange = (key) => {
    setActiveKey(key);
    setIsOpen(false);
  };

  const renderPage = useMemo(() => {
    switch (activeKey) {
      case "home": return <HomePage onNavigate={handlePageChange} />;
      case "projects": return <ProjectsPage />;
      case "aboutme": return <AboutMePage />;
      case "contact": return <ContactPage />;
      default: return <HomePage onNavigate={handlePageChange} />;
    }
  }, [activeKey]);

  const buttonStyles = useMemo(() => ({
    position: 'fixed',
    top: '50%',
    left: isOpen
      ? (isMobile ? 'calc(100% - 40px)' : 240)
      : 20,
    transform: 'translateY(-50%)',
    zIndex: 4000,
    bgcolor: '#121212',
    color: 'orange',
    border: '1px solid orange',

    // ↓ make it semi-transparent when closed:
    opacity: isOpen ? 1 : 0.3,
    transition: 'left 0.3s ease, opacity 0.8s ease',

    // ↑ on hover, always fully visible:
    '&:hover': {
      opacity: 1,
      bgcolor: 'orange',
      color: '#121212',
    },

    ...(isMobile && {
      padding: '12px',
      left: isOpen ? 'calc(100% - 48px)' : '16px'
    })
  }), [isOpen, isMobile]);

  const drawerStyles = useMemo(() => ({
    width: isMobile ? '100%' : 300,
    maxWidth: '100%',
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: isMobile ? '100%' : 300,
      bgcolor: '#121212',
      paddingTop: isMobile ? '4rem' : '5rem',
      boxSizing: 'border-box'
    }
  }), [isMobile]);

  return (
    <>
      <IconButton
        aria-label="toggle navigation"
        onClick={() => setIsOpen(o => !o)}
        sx={buttonStyles}
      >
        {isOpen ? <ArrowBack /> : <ArrowForward />}
      </IconButton>

      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={drawerStyles}
      >
        <List>
          {menuItems.map(item => (
            <ListItem key={item.key} disablePadding>
              <ListItemButton 
                onClick={() => handlePageChange(item.key)}
                sx={{ py: 2 }}
              >
                <ListItemIcon sx={{ color: 'orange', minWidth: '40px' }}>
                  {React.cloneElement(item.icon, { fontSize: isMobile ? 'medium' : 'large' })}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: isMobile ? '1.2rem' : '1.5rem',
                    color: 'orange',
                    fontFamily: 'Orbitron, sans-serif'
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <motion.div
        key={activeKey}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={isMobile ? mobilePageVariants : pageVariants}
        transition={{ duration: 0.3 }}
        style={{ 
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          overflowX: 'hidden',
          width: '100%'
        }}
      >
        {renderPage}
      </motion.div>
    </>
  );
};

export default SideBar;