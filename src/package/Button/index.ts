import React from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';

import { TProp } from './type';

export const Button: React.FC<TProp> = ({ primary, secondary, success, info, warning, danger, ...rest }) => {

  const className = classNames(
    rest.className,
    { [styles.primary]: primary,
      [styles.secondary]: secondary,
      [styles.success]: success,
      [styles.info]: info,
      [styles.warning]: warning,
      [styles.danger]: danger,
    }
  )

  const button = React.createElement('button', {
    ...rest,
    className,
  });

  return button;
}