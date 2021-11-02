import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeatureOrders from './FeatureOrders';

describe('<FeatureOrders />', () => {
  test('it should mount', () => {
    render(<FeatureOrders />);
    
    const featureOrders = screen.getByTestId('FeatureOrders');

    expect(featureOrders).toBeInTheDocument();
  });
});