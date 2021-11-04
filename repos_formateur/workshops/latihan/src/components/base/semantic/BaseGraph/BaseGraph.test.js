import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BaseGraph from './BaseGraph';

describe('<BaseGraph />', () => {
  test('it should mount', () => {
    render(<BaseGraph />);
    
    const baseGraph = screen.getByTestId('BaseGraph');

    expect(baseGraph).toBeInTheDocument();
  });
});