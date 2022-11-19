/* eslint-disable react/jsx-props-no-spreading */
import { fireEvent, render } from "@testing-library/react";
import IconButton, { IconButtonProps } from ".";

const defaultProps: IconButtonProps = {
  children: "oi",
  disabled: false,

};

describe("IconButton Component", () => {
  it("Should render the icon button", () => {
    const { getByTestId } = render(<IconButton {...defaultProps} />);

    expect(getByTestId("icon-button")).toBeInTheDocument();
  });

  it("Should disable the button", () => {
    const { getByTestId } = render(<IconButton {...defaultProps} disabled />);

    expect(getByTestId("icon-button")).toBeDisabled();
  });

  it("Should call the onClick function", () => {
    const mockedOnClickFunction = jest.fn();
    const { getByTestId } = render(
      <IconButton {...defaultProps} onClick={mockedOnClickFunction} />
    );

    fireEvent.click(getByTestId("icon-button"));

    expect(mockedOnClickFunction).toBeCalled();
  });
});
