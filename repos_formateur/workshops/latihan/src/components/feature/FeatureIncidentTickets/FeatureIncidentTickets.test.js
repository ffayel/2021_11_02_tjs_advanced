import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeatureIncidentTickets from './FeatureIncidentTickets';

describe('<FeatureIncidentTickets />', () => {
  test('it should mount', () => {
    render(<FeatureIncidentTickets />);
    
    const featureIncidentTickets = screen.getByTestId('FeatureIncidentTickets');

    expect(featureIncidentTickets).toBeInTheDocument();
  });
});