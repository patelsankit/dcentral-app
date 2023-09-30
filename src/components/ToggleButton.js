import React, { useState } from "react";
import { Switch } from "@radix-ui/react-switch";

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center space-x-2">
      <span className="text-red-800 text-30">Toggle:</span>
      <Switch checked={isChecked} onCheckedChange={handleChange} />
      <span
        className={`rounded-full w-6 h-6 ${
          isChecked ? "bg-green-400" : "bg-gray-300"
        }`}
      />
    </label>
  );
};

export default ToggleButton;
