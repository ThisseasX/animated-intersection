import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import classes from './style.module.css';

const getColor = (n) =>
  ({
    0: '#f44336',
    2: '#9c27b0',
    3: '#673ab7',
    1: '#3f51b5',
  }[n % 4]);

const Box = ({ n, children }) => {
  const ref = useRef();
  const animatedRef = useRef();

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (!animatedRef.current) return;

        if (isIntersecting) {
          animatedRef.current.classList.add(classes.shown);
        } else {
          animatedRef.current.classList.remove(classes.shown);
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref}>
      <div
        ref={animatedRef}
        style={{ backgroundColor: getColor(n) }}
        className={clsx(classes.animated, n % 2 === 0 ? classes.even : classes.odd)}
      >
        {children}
      </div>
    </div>
  );
};

export default Box;
