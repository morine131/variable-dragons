import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";

export const InputName = () => {
  const [name, setName] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setName(e.target.value);
  };

  return (
    <TextField
      fullWidth={false}
      value={name}
      placeholder="Your dragon's name"
      onChange={(e) => onChange(e)}
      inputProps={{ maxLength: 10 }}
      sx={{ bgcolor: "white" }}
    />
  );
};
