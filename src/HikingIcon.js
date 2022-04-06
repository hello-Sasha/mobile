import { useMediaQuery } from "@mui/material";
import React from "react";
import HikingIcon from '@mui/icons-material/Hiking';


export const HikingIconComp = () => {
    const sm = useMediaQuery("(max-width:987px)");
    const md = useMediaQuery("(max-width:1219px)");
    if (sm) {
      return (
        <HikingIcon  sx={{ fontSize: 40,  color: "#FFFFFF" }} />
      )
    } else if (md){
        return (
            <HikingIcon  sx={{ fontSize: 60,  color: "#FFFFFF" }} />
          )
    }else {
        return (
            <HikingIcon  sx={{ fontSize: 60,  color: "#FFFFFF" }} />
          )
    }
}
  