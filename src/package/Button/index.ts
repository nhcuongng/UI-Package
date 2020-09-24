import React from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';

import { TProp } from './type';

export const Button: React.FC<TProp> = (props) => {
	const {
		color = 'primary',
		size = 'md',
		outline = false,
		active = false,
		disabled = false,
		block = false,
		...rest
	} = props;

	const className = classNames(
		rest.className,
		styles[color],
		styles[size],
		styles[outline ? `btn-outline-${color}` : ''],
		styles[active ? 'btn-active' : ''],
		styles[disabled ? 'btn-disabled' : ''],
		styles[block ? 'btn-block' : ''],
	);

	const button = React.createElement('button', {
		...rest,
		className,
		type: 'button',
	});

	return button;
};
