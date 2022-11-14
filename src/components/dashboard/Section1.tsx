import React from "react";
import AppTodo from "./AppTodo";
import { LeftGapCard } from './LeftGapCard';

const Section1: React.FC = () => {
  return (
    <LeftGapCard>
      <AppTodo />
    </LeftGapCard>
  );
};

export default Section1;
