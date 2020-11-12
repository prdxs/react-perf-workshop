import React, { FC, MouseEventHandler, memo } from "react";

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Props> = ({ onClick, children }) => {
  console.log('Button: rendering');
  return <button onClick={onClick}>{children}</button>;
};

export default memo<FC<Props>>(Button);