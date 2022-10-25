/* eslint-disable react/jsx-props-no-spreading */
import {
  render, fireEvent, getAllByText
} from "@testing-library/react";
import { format } from "date-fns";
import Card, { CardProps } from ".";

const defaultProps: CardProps = {
  front: "Front",
  back: "Back",
  deckName: "Science",
  tag: "tag",
  createdAt: "2022-10-24"
};

describe("Card component", () => {
  it("Should render the card", () => {
    const { getByText } = render(
      <Card
        {...defaultProps}
      />
    );

    const cardElement = getByText("Front");

    expect(cardElement).toBeInTheDocument();
  });

  it("Should render the front, back, deckName, createdAt, and tag", () => {
    const { getByText, container } = render(
      <Card
        {...defaultProps}
      />
    );

    expect(getByText("Front")).toBeInTheDocument();
    expect(getAllByText(container, format(new Date("2022-10-24" as string), "dd/MM/yyy"))[0]).toBeInTheDocument();
    expect(getByText("Back")).toBeInTheDocument();
    expect(getAllByText(container, "Science")[0]).toBeInTheDocument();
    expect(getAllByText(container, "tag")[0]).toBeInTheDocument();
  });

  it("Should flip when clicked and unflip when the mouse leaves", () => {
    const { getByTestId } = render(
      <Card
        {...defaultProps}
      />
    );

    const cardElement = getByTestId("rotate-wrapper");

    fireEvent.click(cardElement);
    expect(cardElement).toHaveClass("rotate-y-180");

    fireEvent.mouseLeave(cardElement);
    expect(cardElement).toHaveClass("rotate-y-0");
  });

  it("Should not flip when the rotateDisabled is true", () => {
    const { getByTestId } = render(
      <Card
        {...defaultProps}
        rotateDisabled
      />
    );

    const cardElement = getByTestId("rotate-wrapper");

    fireEvent.click(cardElement);
    expect(cardElement).not.toHaveClass("rotate-y-180");
  });

  it("Should toggle the flip every time is clicked", () => {
    const { getByTestId } = render(
      <Card
        {...defaultProps}
        flipToggle
      />
    );

    const cardElement = getByTestId("rotate-wrapper");

    fireEvent.click(cardElement);
    expect(cardElement).toHaveClass("rotate-y-180");

    fireEvent.mouseLeave(cardElement);
    expect(cardElement).toHaveClass("rotate-y-180");

    fireEvent.click(cardElement);
    expect(cardElement).toHaveClass("rotate-y-0");
  });

  it("Should called the onClick function", () => {
    const mockedOnClick = jest.fn();

    const { getByTestId } = render(
      <Card
        {...defaultProps}
        onClick={mockedOnClick}
      />
    );

    const cardElement = getByTestId("rotate-wrapper");

    fireEvent.click(cardElement);
    expect(mockedOnClick).toBeCalled();
  });
});
