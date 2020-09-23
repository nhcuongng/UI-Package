import React from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';

import { TProp } from './type';

export const Button: React.FC<TProp> = (props) => {
	const { color = 'primary', size = 'md', ...rest } = props;

	const className = classNames(rest.className, styles[color], styles[size]);

	const button = React.createElement('button', {
		...rest,
		className,
		type: 'button',
	});

	return button;
};
