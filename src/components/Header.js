import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar className="flex justify-center items-center gap-2 sm:justify-between flex-col sm:flex-row dark:bg-[#212121] !px-3">
        <div className="flex items-center w-full justify-between sm:justify-start">
          <IconButton className="block sm:!hidden"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleMenu}
          >
            =
          </IconButton>
          <div className="flex items-center">
            <Link
              className="text-white"
              to="/dashboard"
              style={{ textDecoration: "none" }}
            >
              <Button className="!text-white !font-600">Home</Button>
            </Link>
            <div className="sm:hidden">
              <ToggleButton />
            </div>

          </div>
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
        <div className="hidden sm:block">
          <ToggleButton />
        </div>
      </Toolbar>
    </AppBar>
  );
}
