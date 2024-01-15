'use client';

import React from 'react';
import clsx from 'clsx';
import { Play, Pause, RotateCcw } from 'react-feather';
import { motion } from 'framer-motion';

import Card from '@/components/Card';
import VisuallyHidden from '@/components/VisuallyHidden';

import styles from './CircularColorsDemo.module.css';

const COLORS = [
  { label: 'red', value: 'hsl(348deg 100% 60%)' },
  { label: 'yellow', value: 'hsl(50deg 100% 55%)' },
  { label: 'blue', value: 'hsl(235deg 100% 65%)' },
];

const INITIAL_ELAPSED_TIME = 0;

function CircularColorsDemo() {
  const componentId = React.useId();

  const [isPlaying, setIsPlaying] = React.useState(false);

  // TODO: This value should increase by 1 every second:
  const [timeElapsed, setTimeElapsed] = React.useState(
    INITIAL_ELAPSED_TIME
  );
  // let timeElapsed = 0;

  // function incrementElapsedTime() {
  //   timeElapsed++;
  // }

  // TODO: This value should cycle through the colors in the
  // COLORS array:
  const selectedColor = COLORS[timeElapsed % COLORS.length];

  function toggleIsPlaying() {
    setIsPlaying(!isPlaying);
  }

  function reset() {
    setIsPlaying(false);
    setTimeElapsed(INITIAL_ELAPSED_TIME);
  }

  React.useEffect(() => {
    if (!isPlaying) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setTimeElapsed((currentValue) => currentValue + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPlaying]);

  return (
    <Card as="section" className={styles.wrapper}>
      <ul className={styles.colorsWrapper}>
        {COLORS.map((color, index) => {
          const isSelected = color.value === selectedColor.value;

          return (
            <li className={styles.color} key={index}>
              {isSelected && (
                <motion.div
                  className={styles.selectedColorOutline}
                  layout={true}
                  layoutId={`${componentId}-outline`}
                />
              )}
              <div
                className={clsx(
                  styles.colorBox,
                  isSelected && styles.selectedColorBox
                )}
                style={{
                  backgroundColor: color.value,
                }}
              >
                <VisuallyHidden>{color.label}</VisuallyHidden>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.timeWrapper}>
        <dl className={styles.timeDisplay}>
          <dt>Time Elapsed</dt>
          <dd>{timeElapsed}</dd>
        </dl>
        <div className={styles.actions}>
          <button onClick={toggleIsPlaying}>
            {isPlaying ? <Pause /> : <Play />}
            <VisuallyHidden>
              {isPlaying ? 'Pause' : 'Play'}
            </VisuallyHidden>
          </button>
          <button onClick={reset}>
            <RotateCcw />
            <VisuallyHidden>Reset</VisuallyHidden>
          </button>
        </div>
      </div>
    </Card>
  );
}

export default CircularColorsDemo;
