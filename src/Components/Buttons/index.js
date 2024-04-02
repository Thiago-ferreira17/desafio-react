import React from "react";

import { Button as ContainnerButton } from "./styles";

function Button({ children, ...props }) {
  
  return <ContainnerButton {...props}>{children}</ContainnerButton>;
}

export default Button;
