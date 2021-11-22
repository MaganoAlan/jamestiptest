import React from "react";
import { Button, CustomLink, SecondaryButton } from "./styles";

interface DefaultButtonProps {
  title: string;
  to?: string;
  secondary?: boolean;
  onClick?: () => void;
  buttonColor?: string;
}

function DefaultButton({
  title,
  to,
  secondary,
  onClick,
  buttonColor,
}: DefaultButtonProps) {
  const SelectedButton = secondary ? SecondaryButton : Button;

  return (
    <SelectedButton onClick={onClick} buttonColor={buttonColor}>
      {secondary ? title : <CustomLink to={to || "/"}>{title}</CustomLink>}
    </SelectedButton>
  );
}

export default DefaultButton;
