import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = ({ isMobile }) => {
  return (
    <Grid item xs={12}>
      <Stack
        style={{
          backgroundColor: "black",
          padding: isMobile ? "50px 20px" : 50,
        }}
        gap={2}
      >
        <Stack
          direction={"row"}
          justifyContent={"center"}
          color={"white"}
          gap={1}
          alignItems={"end"}
          alignContent={"end"}
        >
          <Typography fontSize={10} marginBottom={"2px"}>
            BY
          </Typography>
          <Typography>
            <b>Israel Steveen de la Rosa Perez</b>
          </Typography>
        </Stack>
        <Stack width={isMobile ? "100%" : "50%"} margin={"0 auto"}>
          <Typography color={"white"} textAlign={"center"}>
            En Conclusion las metodologías en el desarrollo de software son
            importantes porque permiten establecer un proceso ordenado y
            estructurado que asegura la calidad del software. Los diferentes
            modelos, como el en cascada, incrementales, evolución por prototipo,
            ágiles y basado en componentes, ofrecen distintas ventajas y
            desventajas, por lo que es importante elegir el modelo adecuado
            según las necesidades y características del proyecto. En resumen,
            las metodologías son fundamentales para desarrollar software de alta
            calidad que cumpla con las expectativas de los usuarios finales.
          </Typography>
        </Stack>
        <Stack width={isMobile ? "100%" : "50%"} margin={"0 auto"}>
          <Typography color={"white"} textAlign={"center"}>
            <b>Fundamentos De Construcción De Software</b>
          </Typography>
          <Typography color={"white"} textAlign={"center"}>
            <b>Miguel Angel Guatame Medina</b>
          </Typography>
          <Typography color={"white"} textAlign={"center"}>
            <b>2023</b>
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default Footer;
