import { useState } from "react";
import { MuiTelInput } from "mui-tel-input";

export default function TelInput() {
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <MuiTelInput
      value={value}
      onChange={handleChange}
      placeholder="Enter your number"
    />
  );
}
