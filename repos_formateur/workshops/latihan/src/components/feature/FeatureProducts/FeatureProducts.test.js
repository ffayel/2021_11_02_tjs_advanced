import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeatureProducts from './FeatureProducts';

describe('<FeatureProducts />', () => {
  test('it should mount', () => {
    render(<FeatureProducts />);
    
    const featureProducts = screen.getByTestId('FeatureProducts');

    expect(featureProducts).toBeInTheDocument();
  });
});