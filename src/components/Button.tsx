import React, { FC, MouseEventHandler, memo, CSSProperties } from "react";

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}

const Button: FC<Props> = ({ style, onClick, children }) => {
  console.log('Button: rendering');
  return <button style={style} onClick={onClick}>{children}</button>;
};

export default memo<FC<Props>>(Button);