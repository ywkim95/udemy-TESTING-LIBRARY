import SummaryForm from "../SummaryForm.jsx";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
  test("Checking checkbox enables button", async () => {
    const user = userEvent.setup();

    render(<SummaryForm />);

    const checkboxElement = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole("button", { name: /confirm/i });

    expect(checkboxElement).not.toBeChecked();
    expect(confirmButton).toBeDisabled();

    await user.click(checkboxElement);

    expect(checkboxElement).toBeChecked();
    expect(confirmButton).toBeEnabled();
  });
  test("Unchecking checkbox disables button", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    const checkboxElement = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole("button", { name: /confirm/i });

    expect(checkboxElement).not.toBeChecked();
    expect(confirmButton).toBeDisabled();

    await user.click(checkboxElement);

    expect(checkboxElement).toBeChecked();
    expect(confirmButton).toBeEnabled();

    await user.click(checkboxElement);

    expect(checkboxElement).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });
});

test("popover responds to hover", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  // popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears on mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out
  await user.unhover(termsAndConditions);
  expect(popover).not.toBeInTheDocument();
});
