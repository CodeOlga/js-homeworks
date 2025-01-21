/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App.jsx";

describe("App", () => {
  test("Component has heading", () => {
    render(<App />);

    const heading = screen.getByText("ToDoList");

    expect(heading).toBeInTheDocument();
  });

  test("Text field allows entering both numbers and letters", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Add a new todo...");

    fireEvent.change(input, { target: { value: "123abc" } });

    expect(input.value).toBe("123abc");
  });

  test("Shows an error message when clicking 'Add' without entering text", () => {
    render(<App />);

    const button = screen.getByText("Add");

    fireEvent.click(button);

    expect(screen.getByText("Error")).toBeInTheDocument();
  });

  test("Adding a task displays it in the list", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Add a new todo...");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Test todo" } });
    fireEvent.click(button);

    expect(screen.getByText("Test todo")).toBeInTheDocument();
  });

  test("Input field is cleared after adding a task", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Add a new todo...");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Todo to clear" } });
    fireEvent.click(button);

    expect(input.value).toBe("");
  });
});
