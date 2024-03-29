import SummaryForm from "../SummaryForm.jsx";
import { fireEvent, render, screen } from "@testing-library/react";
describe("checkbox flow", () => {
  test("Checkbox is unchecked by default", () => {
    render(<SummaryForm />);

    const checkboxElement = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole("button", { name: /confirm/i });

    expect(checkboxElement).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });
  test("Checking checkbox enables button", () => {
    render(<SummaryForm />);

    const checkboxElement = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole("button", { name: /confirm/i });

    expect(checkboxElement).not.toBeChecked();
    expect(confirmButton).toBeDisabled();

    fireEvent.click(checkboxElement);

    expect(checkboxElement).toBeChecked();
    expect(confirmButton).toBeEnabled();
  });
  test("Unchecking checkbox disables button", () => {
    render(<SummaryForm />);

    const checkboxElement = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole("button", { name: /confirm/i });

    expect(checkboxElement).not.toBeChecked();
    expect(confirmButton).toBeDisabled();

    fireEvent.click(checkboxElement);

    expect(checkboxElement).toBeChecked();
    expect(confirmButton).toBeEnabled();

    fireEvent.click(checkboxElement);

    expect(checkboxElement).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });
});
