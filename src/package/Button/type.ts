export type TBtnColor = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
export type TBtnSize = 'sm' | 'md' | 'lg';


export type TProp = {
  color?: TBtnColor
  size?: TBtnSize
} & React.HTMLAttributes<HTMLButtonElement>