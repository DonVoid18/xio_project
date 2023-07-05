import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarBorderIcon from "@mui/icons-material/StarBorder";
const CardProyect = ({
  name,
  language,
  stargazers_count,
  description,
  html_url,
}) => {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 2,
        ":hover": {
          boxShadow: 5,
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 250,
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" component="div" noWrap>
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {language ? language : "Javascript"}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
          }}
        >
          {description ? (
            description
          ) : (
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              eveniet, nesciunt neque excepturi voluptatum exercitationem quam
              quisquam omnis totam rerum ipsam officia minima adipisci laborum!
              Maiores harum voluptas impedit libero totam dolor ducimus dicta?
              Eum quas dolor incidunt placeat obcaecati deleniti iure rerum
              ipsum, inventore quos officiis, sequi suscipit temporibus.
            </>
          )}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" sx={{ p: 1 }}>
            {stargazers_count}
          </Typography>
          <StarBorderIcon color="primary" />
        </Box>
        <Box>
          <IconButton
            aria-label="Ir al github"
            component="a"
            href={html_url}
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CardProyect;
