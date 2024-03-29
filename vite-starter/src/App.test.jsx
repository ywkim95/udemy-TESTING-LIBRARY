import {fireEvent, render, screen} from "@testing-library/react";
import App from "./App";
import {describe} from "vitest";
import kebabCaseToTitleCase from "./helpers.js";

it("button click flow", () => {
  // render App
  render(<App />);
  
  // find the button
  const buttonElement = screen.getByRole("button", { name: /blue/i});
  
  // check initial color
  expect(buttonElement).toHaveClass("medium-violet-red");
  
  // click the button
  fireEvent.click(buttonElement);
  
  // check button text
  expect(buttonElement).toHaveTextContent(/violet/i);
  
  // check the button color
  // expect(buttonElement).toHaveClass("blue");
  expect(buttonElement).toHaveStyle({"background-color": "rgb(25, 25, 112)"});
});

test("checkbox flow", () => {
  // render App
  render(<App />);
  
  // find elements
  const buttonElement = screen.getByRole("button", { name: /midnight/i});
  const checkboxElement = screen.getByRole("checkbox",{ name: /disable button/i});
  
  //check initial conditions
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();
  
});

test("When checkbox is checked, button should be disabled", () => {
  // render App
  render(<App />);
  
  // find elements
  const buttonElement = screen.getByRole("button", { name: /midnight/i});
  const checkboxElement= screen.getByRole("checkbox", { name: /disable button/i});
  
  // check initial conditions
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();
  
  // click the checkbox to disabled button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
  
  // click the checkbox to enable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
  
});

test("button color gray when button disabled", () => {
  // render App
  render(<App />);
  
  // find elements
  const buttonElement = screen.getByRole("button", { name: /midnight/i});
  const checkboxElement = screen.getByRole("checkbox", { name: /disable button/i});
  
  // check initial conditions
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveStyle({"background-color": "rgb(199, 21, 133)"});
  
  // click the checkbox to disabled button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveStyle({"background-color": "rgb(128, 128, 128)"});
  
  // click the checkbox to enable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveStyle({"background-color": "rgb(199, 21, 133)"});
  
  // click the button
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle({"background-color": "rgb(25, 25, 112)"});
  
  // click the checkbox to disabled button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveStyle({"background-color": "rgb(128, 128, 128)"});
  
  // click the checkbox to enable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveStyle({"background-color": "rgb(25, 25, 112)"});
});


describe("kebabCaseToTitleCase", () => {
  test("works for no hyphens", () => {
    expect(kebabCaseToTitleCase("red")).toBe("Red");
  });
  test("works for one hyphen", () => {
    expect(kebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
  });
  test("works for multiple hyphens", () => {
    expect(kebabCaseToTitleCase("medium-violet-red")).toBe("Medium Violet Red");
  });
});