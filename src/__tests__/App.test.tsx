import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/String List App/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders input and button for add', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Enter text...');
  const buttonElement = screen.getByRole('button', { name: 'Add' });
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('adds text to the list when Add button is clicked', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Enter text...') as HTMLInputElement;
  const buttonElement = screen.getByRole('button', { name: 'Add' });
  
  // Simulate user typing text
  const testText = 'Test Item';
  fireEvent.change(inputElement, { target: { value: testText } });
  
  // Simulate clicking the Add button
  fireEvent.click(buttonElement);
  
  // Verify the text appears in the list
  const addedText = screen.getByText(testText);
  expect(addedText).toBeInTheDocument();
  
  // Verify input was cleared
  expect(inputElement.value).toBe('');
});
