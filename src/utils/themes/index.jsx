import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#5f2c30",
  secondary: "#d1adcc",
  success: "#4CAf52",
  info: "#00a2ff",
  danger: "#ff5277",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",

  //Grays
  dim_grey: "#696969",
  dove_grey: "#dSdSdS",
  body_bg: "#f3f6f9",
  light_grey: "rgb(230,230,230)",

  //solid color
  white: "#fff",
  black: "#000",
};

const theme = createTheme({
    palette: {
        primary:{
            main: Colors.primary
        },
        secondary:{
            main:Colors.secondary
        }
    },
    components: {
        MuiButton:{
            
        },
        MuiDrawer:{
            
            },
        
        MyShopButton:{
            
        }
    }
});
export default theme;
