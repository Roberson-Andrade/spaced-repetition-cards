import {
  findAllByTestId,
  render, waitFor
} from "@testing-library/react";
import { setupServer } from "msw/node";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { ToastContainer } from "react-toastify";
import { handlers } from "../../mocks/handlers";
import App from "../../App";

const server = setupServer(
  ...handlers
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("MyCards Container", () => {
  it("Should add a card to the grid and show success snackbar", async () => {
    const route = "/mycards";

    const {
      getByText, getByLabelText, findByText, queryByText, getAllByText
    } = render(
      <MemoryRouter initialEntries={[route]}>
        <App />
        <ToastContainer />
        <div id="modal" />
      </MemoryRouter>
    );

    const openModalButton = await findByText("Criar Cards");

    expect(queryByText("Adicionado")).not.toBeInTheDocument();

    await userEvent.click(openModalButton);
    await userEvent.type(getByLabelText("Front"), "Test");
    await userEvent.type(getByLabelText("Back"), "Test");
    await userEvent.type(getByLabelText("Tag"), "Test");
    await userEvent.click(getByText("Criar"));

    await waitFor(() => expect(getAllByText("Adicionado")[0]).toBeInTheDocument());
    await waitFor(() => expect(getAllByText("Card criado com sucesso!")[0]).toBeInTheDocument);
  });

  it("Should filter the cards", async () => {
    const route = "/mycards";

    const {
      getAllByTestId,
      container
    } = render(
      <MemoryRouter initialEntries={[route]}>
        <App />
        <ToastContainer />
        <div id="modal" />
      </MemoryRouter>
    );

    expect((await findAllByTestId(container, "card")).length).toBeGreaterThan(1);

    const searchInput = container.querySelector("#search")!;
    expect(searchInput).toBeTruthy();

    await userEvent.type(searchInput, "Teste 1");

    expect((getAllByTestId("card")).length).toEqual(1);
  });
});
