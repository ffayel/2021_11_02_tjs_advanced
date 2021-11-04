import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeatureStockOverview from './FeatureStockOverview';

describe('<FeatureStockOverview />', () => {
  test('it should mount', () => {
    render(<FeatureStockOverview />);
    
    const featureStockOverview = screen.getByTestId('FeatureStockOverview');

    expect(featureStockOverview).toBeInTheDocument();
  });
});