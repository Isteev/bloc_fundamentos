import { Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

//style
import { Title } from "./Body.style.js";

//utils
import { GreyColor } from "../../utils/misc";
import items from "../../utils/items";

//banner
import banner from "../../assets/banner.jpg";
import References from "../../utils/references.js";

const Body = ({ isMobile }) => {
  return (
    <Grid item xs={12}>
      <Stack alignItems="center" gap={2}>
        <Typography
          fontSize={"30px"}
          width={isMobile ? "100%" : "60%"}
          textAlign={"center"}
        >
          <b>
            Explorando los modelos y metodologías en el desarrollo de software:
            del enfoque en cascada al enfoque ágil
          </b>
        </Typography>

        <Stack alignItems={"center"}>
          <Typography fontSize={12}>
            <b>Steveen de la Rosa</b>
          </Typography>
          <Typography fontSize={12} color={GreyColor}>
            4 Mar 2023
          </Typography>
        </Stack>

        <Stack width={"100%"}>
          <img style={{ objectFit: "cover" }} src={banner} alt={`banner`} />
        </Stack>

        <Grid
          container
          padding={isMobile ? "20px 0px" : "20px 80px"}
          spacing={2}
        >
          <Grid item xs={12}>
            <Typography
              textAlign={isMobile ? "justify" : "left"}
              color={GreyColor}
            >
              El desarrollo de software requiere de un modelo o metodología
              adecuada para gestionar el proyecto. ¡Acompáñanos en esta
              exploración por el mundo del desarrollo de software!
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          {items.map((v) => (
            <>
              {v.title && (
                <Grid item xs={12}>
                  <Title>{v.title}</Title>
                </Grid>
              )}
              <Grid item xs={12}>
                <Typography
                  textAlign={isMobile ? "justify" : "left"}
                  color={GreyColor}
                >
                  {v.body}
                </Typography>
              </Grid>
              {v.image && (
                <Grid item xs={12}>
                  <Stack width={isMobile ? "100%" : "80%"} margin={"10px auto"}>
                    <img src={v.image} alt={`item ${v.name}`} />
                  </Stack>
                </Grid>
              )}
              {v.pros && v.contras && (
                <>
                  <Grid item xs={isMobile ? 12 : 6}>
                    <Typography>
                      <b>Pros</b>
                    </Typography>
                    {v.pros.map((v) => (
                      <Typography color={GreyColor} marginLeft="25px">
                        <li>{v}</li>
                      </Typography>
                    ))}
                  </Grid>
                  <Grid item xs={isMobile ? 12 : 6}>
                    <Typography>
                      <b>Contras</b>
                    </Typography>
                    {v.contras.map((v) => (
                      <Typography color={GreyColor} marginLeft="25px">
                        <li>{v}</li>
                      </Typography>
                    ))}
                  </Grid>
                </>
              )}
            </>
          ))}

          <Grid item xs={12}>
            <Title>Referencias</Title>
            {References.map((v) => (
              <Typography color={GreyColor}>
                <li>{v.value}</li>
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Stack>
    </Grid>
  );
};

export default Body;
