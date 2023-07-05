import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import Header from "./components/Header";
import CardProyect from "./components/CardProyect";
import ListProyect from "./components/ListProyect";

const App = () => {
  return (
    <>
      <Header />
      <Box
        component={"div"}
        sx={{
          mt: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ListProyect />
      </Box>
    </>
  );
};

export default App;
