import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between">
        <div className="flex items-center flex-col sm:flex-row">
          <IconButton className="block sm:hidden"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography className="hidden sm:block" variant="h6" component="div">
            GeeksforGeeks Header
          </Typography>
        </div>

        <div
          className={`${isMenuOpen ? "block" : "hidden"
            } sm:flex sm:space-x-4`}
        >
          <Link
            className="text-white"
            to="/blog"
            style={{ textDecoration: "none" }}
          >
            <Button className="!text-white">Blog</Button>
          </Link>
          <Link
            className="text-white"
            to="/contact"
            style={{ textDecoration: "none" }}
          >
            <Button className="!text-white">contact</Button>
          </Link>
          <Link
            className="text-white"
            to="/login"
            style={{ textDecoration: "none" }}
          >
            <Button className="!text-white">Logout</Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
