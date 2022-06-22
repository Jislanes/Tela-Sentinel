import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  StyledInputBase,
  SearchIconWrapper,
  ContainerAppBar,
} from "./Styles";

import sentinel from "../AppBar/sentinel.png";

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ContainerAppBar>
        <AppBar
          position="static"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            background: " #2D2A26",
          }}
        >
          <Toolbar>
            <Box
              sx={{
                "@media (min-width: 300px)": {
                  paddingTop: "10px",
                  height: "25px",
                  cursor: "pointer",
                  padding: "20px",
                },
                "@media (min-width: 820px)": {
                  paddingTop: "10px",
                  height: "30px",
                  padding: "20px",
                },
              }}
            >
              <img
                src={sentinel}
                alt="ambevtech"
                height="30px"
                className="justify-content-start"
              />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Sentinela
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Pesquisar..."
                inputProps={{ "aria-label": "pesquisar" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </ContainerAppBar>{" "}
    </Box>
  );
}
