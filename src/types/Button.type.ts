export interface ButtonProps {
  text?: string;
  textColor?: string;
  bgColor?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
