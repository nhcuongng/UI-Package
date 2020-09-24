import React from 'react';

export type TBtnColor =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'info'
	| 'warning'
	| 'danger';
export type TBtnSize = 'sm' | 'md' | 'lg';

export type TProp = {
	color?: TBtnColor;
	size?: TBtnSize;
	outline?: boolean;
	active?: boolean;
	disabled?: boolean;
	block?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;
