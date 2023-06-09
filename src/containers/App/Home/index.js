import { Box, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { MyContext } from "../../../App";
import ProductCard from "../../../Components/ProductCards";
import ResponsiveDrawer from "../../../Components/sidebar";
import { Colors } from "../../../utils/themes";
import SwipeableTextMobileStepper from "../../../widgets";
// import Categories from "../Catagories";

function Home() {
  const data = useContext(MyContext);

  return (
    <>
      <ResponsiveDrawer />
      <SwipeableTextMobileStepper />
      <Box sx={{ flexGrow: 1, display: "flex", flexWrap: "wrap" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 6, md: 8, lg: 12 }}
        >
           <Typography variant={"h3"} color={Colors.primary} sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - 250px)` },
              ml: { sm: "250px" },
              justifyContent: "center",
              display: "flex",
              flexWrap: "wrap",
              mt:4
            }}>
              All Products
            </Typography>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - 250px)` },
              ml: { sm: "250px" },
              justifyContent: "center",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
           
            {data.map((product,index) => (
              <>
                <ProductCard
                key={index}
                image={product.image}
                name={product.name}
                id={product.id}
                price={product.price}
              />
              </> ))}
          </Box>
        </Grid>
      </Box>
      
      {/* <Categories category='boy'/> */}
      <Outlet />
    </>
  );
}

export default Home;
