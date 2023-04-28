import { Box, Grid } from "@mui/material";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { MyContext } from "../../../App";
import ProductCard from "../../../Components/ProductCards";
import ResponsiveDrawer from "../../../Components/sidebar";
// import { products } from "../../../utils/Constant";



function Categories({category}) {
 const data = useContext(MyContext);
 console.log(data,'data');
  return (
    <>
      <ResponsiveDrawer />
      <Box sx={{ flexGrow: 1, display: "flex", flexWrap: "wrap"}} ml={{lg:7}}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 , lg:5 }}
          columns={{ xs: 2, sm: 6, md: 8, lg: 12 }}
        >
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
            {data.filter((data) => data.category === category ).map((product,index) => (
              <>
                <ProductCard
                key={index}
                image={product.image}
                name={product.name}
                id={product.id}
                price={product.price}
              />
              </>
            ))}
          </Box>
        </Grid>
      </Box>
      <Outlet />
    </>
  );
}

export default Categories;
