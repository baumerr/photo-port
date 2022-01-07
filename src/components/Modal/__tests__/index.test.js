import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockTargetModal = jest.fn();

const currentPhoto ={
    name: 'Park Bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
}

afterEach(cleanup);

describe('Modal component', () => {
    it('renders', () => {
        render(<Modal 
            currentPhoto={currentPhoto}
            onClose={mockTargetModal}
        />)
    })

    it('matches snapshot', () => {
        const { asFragment } = 
        render(<mockTargetModal
            currentPhoto={currentPhoto}
            onClose={mockTargetModal}
        />);

        expect(asFragment()).toMatchSnapshot();
    })
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
      const { getByText } = render(<Modal
        onClose={mockTargetModal}
        currentPhoto={currentPhoto}
      />);
      fireEvent.click(getByText('Close this modal'));
  
      expect(mockTargetModal).toHaveBeenCalledTimes(1);
    });
  }) 