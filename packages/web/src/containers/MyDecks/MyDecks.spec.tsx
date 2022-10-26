import { fireEvent, render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";
import { handlers } from "../../mocks/handlers";
import MyDecks from "./page";

const server = setupServer(
  handlers[0],
  handlers[3]
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("MyDecks Container", () => {
  it("Should add a deck to the list", () => {
    const { getByText } = render(
      <>
        <MyDecks />
        <div id="modal" />
      </>
    );

    const openModalButton = getByText("Criar deck");

    fireEvent.click(openModalButton);

    screen.debug();

    expect(getByText("Voltar")).toBeInTheDocument();
  });
});
