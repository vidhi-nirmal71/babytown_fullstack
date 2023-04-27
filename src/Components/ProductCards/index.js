import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Button, Grid } from "@mui/material";
import { Colors } from "../../utils/themes";


export default function ProductCard({image,name,index,id,price}) {
  return (
    <>
          <Grid item xs={2} sm={4} md={4} key={index} >
             <Card sx={{ maxWidth: 365, mt: 1 }}>
              <CardMedia
                component="img"
                height="300"
                image={image}
                alt="Product"
                sx={{objectFit:'contain'}}
              />
              <CardContent sx={{display:'flex',gap:20,}}>
                <Typography variant="body2" color={Colors.primary}>
                 <b>{name}</b>
                </Typography>
                <Typography variant="body2" color={Colors.primary}>
                 Price:<b>{price} </b>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" sx={{':hover':{bgcolor:Colors.secondary ,color:Colors.primary}}}>
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share" sx={{':hover':{bgcolor:Colors.secondary ,color:Colors.primary}}}>
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="share" sx={{':hover':{bgcolor:Colors.secondary ,color:Colors.primary}}}>
                  
                </IconButton>
                <Button sx={{ ml: 16, background: Colors.secondary , ":hover":{bgcolor:Colors.primary , color:Colors.secondary}}} id={id} >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
         </Grid>   
    </>
  );
}
