import { useTheme } from "@emotion/react";
import {ResponsiveBar} from "@nivo/bar";
import { tokens } from "../theme";
import {mockBarData as data } from "../data/mockData";
import { Box, Typography} from "@mui/material";
import { Image } from 'mui-image'


const VideoView = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{m: 2}}>
      <Image
        src="../../assets/user1.png"
        fit="contain"
        duration={3000}
        height="40vh"
        easing= "cubic-bezier(0.7, 0, 0.6, 1)"
        showLoading= { false }
        errorIcon={ true }
        shift= {null}
        distance="100px"
        shiftDuration={900}
        bgColor="inherit"
      />
    </Box>
  )
}

export default VideoView;