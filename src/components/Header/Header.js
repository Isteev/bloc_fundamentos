import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { HeaderContainer } from "./Header.style";

const Header = ({ isMobile }) => {
  return (
    <Grid item xs={12}>
      <HeaderContainer>
        <Typography fontSize={"20px"} letterSpacing={2}>
          <b>BLOG</b>
        </Typography>

        {!isMobile && (
          <Stack direction={"row"} gap={2} marginRight={4}>
            <Typography>Modelos</Typography>
            <Typography>Metodologías</Typography>
            <Typography>Conclusiones</Typography>
            <Typography>Contacto</Typography>
          </Stack>
        )}
      </HeaderContainer>
    </Grid>
  );
};

export default Header;
