import { Grid, Stack, useMediaQuery } from "@mui/material";
import { AppContent } from "./App.style";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <AppContent container>
      <Header isMobile={isMobile} />

      <Grid item xs={12} style={{ overflowY: "scroll" }}>
        <Stack style={{ width: isMobile ? "90%" : "70%", margin: "0 auto" }}>
          <Grid container padding={"50px 0px"}>
            <Body isMobile={isMobile} />
          </Grid>
        </Stack>
        <Footer isMobile={isMobile} />
      </Grid>
    </AppContent>
  );
}

export default App;
