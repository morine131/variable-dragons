import { Box } from "@mui/material";

import egg from "@/assets/egg.png";
export const Egg = () => {
  return (
    <Box width="100%" display={"flex"} justifyContent={"center"}>
      <img src={egg}></img>
    </Box>
  );
};
