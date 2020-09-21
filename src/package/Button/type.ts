export type TBtnColor = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';

export type TProp = {
  color?: TBtnColor
} & React.HTMLAttributes<HTMLButtonElement>