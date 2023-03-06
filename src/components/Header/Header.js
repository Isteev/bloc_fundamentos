import { Grid, Typography } from "@mui/material";
import React from "react";
import { HeaderContainer } from "./Header.style";

const Header = ({ isMobile }) => {
  return (
    <Grid item xs={12}>
      <HeaderContainer>
        <Typography fontSize={"20px"} letterSpacing={2}>
          <b>BLOG</b>
        </Typography>
      </HeaderContainer>
    </Grid>
  );
};

export default Header;
