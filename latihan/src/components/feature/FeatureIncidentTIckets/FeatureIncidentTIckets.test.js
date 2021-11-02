import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeatureIncidentTIckets from './FeatureIncidentTIckets';

describe('<FeatureIncidentTIckets />', () => {
  test('it should mount', () => {
    render(<FeatureIncidentTIckets />);
    
    const featureIncidentTIckets = screen.getByTestId('FeatureIncidentTIckets');

    expect(featureIncidentTIckets).toBeInTheDocument();
  });
});