'use client';

import React from 'react';
import { MotionConfig } from 'framer-motion';

type RespectMotionPreferencesProps = {
  children: React.ReactNode;
};

function RespectMotionPreferences({
  children,
}: RespectMotionPreferencesProps) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export default RespectMotionPreferences;
