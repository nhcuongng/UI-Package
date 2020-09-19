import React from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';

import { TProp } from './type';

export const Button: React.FC<TProp> = ({ primary, ...rest }) => {

  const className = classNames(
    rest.className,
    { [styles.primary]: primary }
  )

  const button = React.createElement('button', {
    ...rest,
    className,
  });

  return button;
}