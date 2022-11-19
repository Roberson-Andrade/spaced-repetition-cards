import {
  render, waitFor
} from "@testing-library/react";
import { setupServer } from "msw/node";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { ToastContainer } from "react-toastify";
import { handlers } from "../../mocks/handlers";
import App from "../../App";

const server = setupServer(
  handlers[0],
  handlers[3]
);

beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("MyDecks Container", () => {
  it("Should add a deck to the list and show success snackbar", async () => {
    const route = "/mydecks";

    const {
      getByText, getByLabelText, findByText, queryByText
    } = render(
      <MemoryRouter initialEntries={[route]}>
        <App />
        <ToastContainer />
        <div id="modal" />
      </MemoryRouter>
    );

    const openModalButton = await findByText("Criar deck");

    expect(queryByText("Economia")).not.toBeInTheDocument();

    await userEvent.click(openModalButton);
    await userEvent.type(getByLabelText("Nome"), "Test");
    await userEvent.type(getByLabelText("Categoria"), "Test");
    await userEvent.click(getByText("Criar"));

    await waitFor(() => expect(getByText("Economia")).toBeInTheDocument());
    waitFor(() => expect(getByText("Deck deletado com sucesso!")).toBeInTheDocument);
  });

  it("Should remove a deck from the list and show success snackbar", async () => {
    const route = "/mydecks";

    const {
      queryByText, findByText, getAllByTestId, getByText
    } = render(
      <MemoryRouter initialEntries={[route]}>
        <App />
        <ToastContainer />
      </MemoryRouter>
    );

    const itemToDelete = await findByText("História");
    const deleteBtnList = getAllByTestId("icon-button");

    expect(itemToDelete).toBeInTheDocument();

    await userEvent.click(deleteBtnList[1]);

    waitFor(() => expect(queryByText("História")).not.toBeInTheDocument);
    waitFor(() => expect(getByText("Deck deletado com sucesso!")).toBeInTheDocument);
  });
});
