import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);

  const header = screen.queryByText(/checkout form/i);

  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent(/checkout form/i);

});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  const firstNameField = screen.getByLabelText(/first name*/i);
  userEvent.type(firstNameField, "Emily");

  const lastNameField = screen.getByLabelText(/last name*/i);
  userEvent.type(lastNameField, "Perkins");

  const addressField = screen.getByLabelText(/address*/i);
  userEvent.type(addressField, "42 Wallaby Way");

  const cityField = screen.getByLabelText(/city*/i);
  userEvent.type(cityField, "Mesa");

  const stateField = screen.getByLabelText(/state*/i);
  userEvent.type(stateField, "AZ");

  const zipCodeField = screen.getByLabelText(/zip*/i);
  userEvent.type(zipCodeField, "12345");

  const button = screen.getByRole("button");
  userEvent.click(button);

  const successMessage = await screen.getByTestId("successMessage");
  expect(successMessage).toBeInTheDocument();
});
