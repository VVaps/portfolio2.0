import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
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

// Import the pages (components) for each section
import HomePage from "../HomePage/HomePage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import AboutMePage from "../AboutMePage/AboutMePage";
import ContactPage from "../ContactPage/ContactPage";

// Define menu items with keys (no stored elements)
const menuItems = [
  { key: "home",     text: "Home",     icon: <HomeIcon sx={{ color: "orange" }} /> },
  { key: "projects", text: "Projects", icon: <WorkIcon sx={{ color: "orange" }} /> },
  { key: "aboutme",  text: "About Me", icon: <InfoIcon sx={{ color: "orange" }} /> }, // Update key to "aboutme"
  { key: "contact",  text: "Contact",  icon: <ContactIcon sx={{ color: "orange" }} /> },
];

// Framer Motion variants for transitions
const pageVariants = {
  hidden:  { opacity: 0, x: 100 },
  visible: { opacity: 1, x:   0 },
  exit:    { opacity: 0, x: -100 },
};

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeKey, setActiveKey] = useState("home");

  // Change page by key
  const handlePageChange = (key) => {
    setActiveKey(key);
    setIsOpen(false);
  };

  // Render the selected component
  const renderPage = () => {
    switch (activeKey) {
      case "home":
        return <HomePage onNavigate={handlePageChange} />; // Pass callback
      case "projects":
        return <ProjectsPage />;
      case "aboutme": // Ensure this matches the key used in HomePage
        return <AboutMePage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handlePageChange} />;
    }
  };

  return (
    <>  {/* Fragment to wrap drawer & content */}
      {/* Toggle button */}
      <IconButton
        onClick={() => setIsOpen(o => !o)}
        sx={{
          position: "absolute",
          top: "50%",
          left: isOpen ? 240 : 20,
          transform: "translate(-50%, -50%)",
          zIndex: 4000,
          bgcolor: "#121212",
          color: "orange",
          border: "1px solid orange",
          transition: "left 0.3s ease",
          '&:hover': { bgcolor: 'orange', color: '#121212' },
        }}
      >
        {isOpen ? <ArrowBack /> : <ArrowForward />}
      </IconButton>

      {/* Sidebar drawer */}
      <Drawer
        variant="persistent"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{ sx: { bgcolor: '#121212', width: 300, pt: '5rem', zIndex: 1301 } }}
      >
        <List>
          {menuItems.map(item => (
            <ListItem key={item.key} disablePadding>
              <ListItemButton onClick={() => handlePageChange(item.key)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{ fontSize: '1.5rem', color: 'orange' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main content with no extra padding/margin */}
      <motion.div
        key={activeKey}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.5 }}
        style={{ margin: 0, padding: 0, minHeight: '100vh' }}
      >
        {renderPage()}
      </motion.div>
    </>
  );
};

export default SideBar;
