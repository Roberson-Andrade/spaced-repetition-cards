/* eslint-disable react/jsx-props-no-spreading */
import { render } from "@testing-library/react";
import Select, { selectProps } from "./Index";

const defaultProps: selectProps = {
  id: "test-id",
  label: "test",
  options: ["Test1", "Test2", "Test3"],
  value: "Test1"
};

describe("Select Component", () => {
  it("Should render the select", () => {
    const { getByTestId } = render(<Select {...defaultProps} />);

    expect(getByTestId("select")).toBeInTheDocument();
  });
});
