/* eslint-disable react/jsx-props-no-spreading */
import {
  fireEvent,
  render
} from "@testing-library/react";
import Tooltip, { TooltipProps } from ".";

const defaultProps: TooltipProps = {
  children: <div>Test</div>,
  text: "Tooltip text test"
};

describe("Tooltip component", () => {
  it("Should show the tooltip when the element is hovered and should hide when isn't", () => {
    const { getByText } = render(
      <Tooltip
        {...defaultProps}
      />
    );

    const wrappedElement = getByText("Test");
    const tooltip = getByText(defaultProps.text).parentElement!;

    fireEvent.mouseEnter(wrappedElement);
    expect(tooltip).toHaveClass("opacity-100");

    fireEvent.mouseLeave(wrappedElement);
    expect(tooltip).toHaveClass("opacity-0");
  });
});
