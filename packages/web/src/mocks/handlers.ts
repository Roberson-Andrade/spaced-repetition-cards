import { rest } from "msw";
import { CardType, Deck, RevisionResponse } from "../types";
import fetchDecks from "./response/fetchDecks.json";
import fetchRevisions from "./response/fetchRevisions.json";
import createCard from "./response/createCard.json";
import createDeck from "./response/createDeck.json";

export const handlers = [
  rest.get(
    "http://127.0.0.1:3000/decks",
    (req, res, ctx) => res(ctx.status(200), ctx.json(fetchDecks))
  ),
  rest.get(
    "http://127.0.0.1:3000/revision",
    (req, res, ctx) => res(ctx.status(200), ctx.json<RevisionResponse[]>(fetchRevisions))
  ),
  rest.post(
    "http://127.0.0.1:3000/cards",
    (req, res, ctx) => res(ctx.status(201), ctx.json<CardType>(createCard))
  ),
  rest.post(
    "http://127.0.0.1:3000/decks",
    (req, res, ctx) => res(ctx.status(201), ctx.json<Deck>(createDeck))
  ),
  rest.delete(
    "http://127.0.0.1:3000/decks/2",
    (req, res, ctx) => res(ctx.status(200))
  ),
  rest.post(
    "http://127.0.0.1:3000/revision",
    (req, res, ctx) => res(ctx.status(200))
  )
];
