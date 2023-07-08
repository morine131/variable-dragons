import { Box } from "@mui/material";

import { ButtonName } from "../containers/ButtonName/ButtonName";
import { InputName } from "../containers/InputName/InputName";
import { EggImage } from "../presentations/EggImage";

export const Egg = () => {
  return (
    <Box
      width="100%"
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <EggImage />
      <InputName />
      <Box mt={2}>
        <ButtonName />
      </Box>
    </Box>
  );
};
