import React, { useEffect, useState } from "react";
import { githubApi } from "../api/projectApi";
import CardProyect from "./CardProyect";
import { Grid } from "@mui/material";
import Preloader from "./Preloader";
const ListProyect = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  // UTILIZANDO ASYNC AND AWAIT
  const fetchData = async () => {
    try {
      const response = await githubApi.get();
      const jsonData = await response.data;
      setLoading(false);
      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // UTILIZANDO THEN

    // githubApi.get().then((res) => {
    //   console.log(res.data);
    //   setData(res.data);
    // });
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Grid container spacing={1} maxWidth={1200}>
          {data.map((value, index) => (
            <Grid key={index} item md={3} sm={6} xs={12}>
              <CardProyect {...value} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default ListProyect;
