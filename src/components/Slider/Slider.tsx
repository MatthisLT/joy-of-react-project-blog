import React from 'react';
import clsx from 'clsx';

import styles from './Slider.module.css';

type SliderProps = React.ComponentProps<'input'> & {};

function Slider({ className, ...delegated }: SliderProps) {
  return (
    <input
      type="range"
      className={clsx(styles.slider, className)}
      {...delegated}
    />
  );
}

export default Slider;
