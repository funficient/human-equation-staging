export interface ButtonProps {
  variant: "primary" | "secondary";
  onClick: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
}

export interface HeroBannerProps {
  title: string;
}
