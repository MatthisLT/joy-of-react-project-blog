import React from 'react';
import clsx from 'clsx';

import styles from './VisuallyHidden.module.css';

type VisuallyHiddenProps<As extends React.ElementType> = {
  as?: As;
} & React.ComponentPropsWithoutRef<As>;

function VisuallyHidden<As extends React.ElementType = 'div'>({
  as,
  className,
  children,
  ...delegated
}: VisuallyHiddenProps<As>) {
  const Element = as || 'span';

  return (
    <Element
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      {children}
    </Element>
  );
}

export default VisuallyHidden;
