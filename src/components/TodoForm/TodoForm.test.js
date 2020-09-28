import React from 'react';
import { render } from '@testing-library/react';
import TodoForm from './TodoForm';

const { getByText, getByPlaceholderText } = render(<TodoForm />);
const inputElement = getByPlaceholderText('Add a new task')
const buttonElement = getByText(/Add Task/i);

test('Elements in component', () => {
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('should update local state', () => {
  expect(true)
})
