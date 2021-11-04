import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeatureSales from './FeatureSales';

describe('<FeatureSales />', () => {
  test('it should mount', () => {
    render(<FeatureSales />);
    
    const featureSales = screen.getByTestId('FeatureSales');

    expect(featureSales).toBeInTheDocument();
  });
});