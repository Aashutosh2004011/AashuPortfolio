export interface ContainerProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
  }
  
  export interface SocialLinksProps {
    className?: string;
    orientation?: 'horizontal' | 'vertical';
  }
  
  export interface LayoutProps {
    children: React.ReactNode;
  }
  