# Spaced repetition cards :flower_playing_cards:
Fullstack application to help the process of learning with spaced repetitions.

## Overview
### :scroll: The Project 
The project consists in the creation of decks of cards that hold information about some topic and the revision of this cards available between intervals.
How the app works:
- You can create a deck to attach the cards related to the same subject. 
- The card has information on the front (usually a question) and on the back (usually the answer). Also, you can add a option tag as a subcategory.
- After the creation the card is with the status as overdue (available for revision).
- There's a revision page where you can revise the overdue cards.
  - The revision consists in answering mentally and indicate if your guess was right or wrong.
  - If it was right the revision of that card is saved. Otherwise, the card will be replaced in the end of the deck to revise again.
  - The intervals are defined considering the number of revisions of that specific card (1 revision - 7 days, 2  revision- 16 and 3 days revisions or more - 34 days).
- In the home page you can see your revision history in the heatmap. The color of the days of revision depends on the number of revisions made in that day.


### :wrench: Built with
- Backend
  - Node.js
  - Typescript
  - Express.js
  - PostgreSQL
  - DynamoDB
- Frontend
  - React.js
  - Typescript
  - Tailwindcss
  - Zustand
- Principles/Architecture
  - SOLID
  - Semantic commits
  - Monorepo
