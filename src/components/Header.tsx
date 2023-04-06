import Typography from "@mui/material/Typography";
import Logo from "../../assets/red-tech-logo.png";
import styles from "./Header.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { FC } from "react";

const Header: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              component={"div"}
              sx={{
                width: 50,
              }}
            >
              <img width={"100%"} src={Logo} />
            </Box>
            <Typography
              component="div"
              sx={{
                marginLeft: 2,
              }}
            >
              <Box fontWeight="medium" display="inline">
                Home
              </Box>
            </Typography>
          </Box>
          <nav>
            <IconButton edge="end">
              <SettingsIcon sx={{ my: 1, mx: 1.5 }} />
            </IconButton>
            <IconButton>
              <AccountCircleIcon sx={{ my: 1, mx: 1.5 }} />
            </IconButton>
          </nav>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
