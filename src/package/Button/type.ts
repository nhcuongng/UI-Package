export type TProp ={
  primary?: boolean,
  secondary?: boolean,
  success?: boolean,
  info?: boolean,
  warning?: boolean,
  danger?: boolean,
} & React.HTMLAttributes<HTMLButtonElement>