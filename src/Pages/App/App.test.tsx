import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders main page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Devices/i);
  expect(linkElement).toBeInTheDocument();
});

test('loads and displays grid view', async () => {
  render(<App/>)
  fireEvent.click(screen.getByTestId("grid-button"))
  expect(screen.getByTestId("grid-button")).toBeInTheDocument()
})

test('loads and displays list view', async () => {
  render(<App/>)
  fireEvent.click(screen.getByTestId("list-button"))
  expect(screen.getByTestId("list-button")).toBeInTheDocument()
})

test('search input field should be rendered', async () => {
  render(<App/>)
  const searchInput = screen.getByPlaceholderText(/Search/i);
  expect(searchInput).toBeInTheDocument()
})

test('search input field to change', async () => {
  render(<App/>)
  const searchInput = screen.getByPlaceholderText(/Search/i);
  fireEvent.change(searchInput, {target : {value: "loco"}})
  fireEvent.submit(screen.getByTestId("search-form"))
})