import { type FC } from 'react';
import type { CardProps } from '../../interfaces/cardPorps';

const Card: FC<CardProps> = ({ children }) => {
  return (
    <main className="card">
      {children}
    </main>
  );
};

export { Card };