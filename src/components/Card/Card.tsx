import React from 'react';
import clsx from 'clsx';

import styles from './Card.module.css';

type CardProps = React.ComponentProps<'div'>;

function Card({ children, className, ...delegated }: CardProps) {
  return (
    <div className={clsx(styles.wrapper, className)} {...delegated}>
      {children}
    </div>
  );
}

export default Card;
