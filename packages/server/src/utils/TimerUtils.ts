import { intervalToDuration } from 'date-fns';
import { Card } from '../domain/entities/card';

export class TimerUtils {
  static updateRevisionStatus(cards: Card[]): Card[] {
    const updatedCards = cards.map((card) => {
      if (!card.lastRevision) {
        return { ...card, revisionStatus: 'OVERDUE' } as Card;
      }

      const { days } = intervalToDuration({
        start: card.lastRevision,
        end: new Date(),
      });

      const revisionInterval = this.returnIntervalStatus(card.numberOfRevisions);

      const revisionStatus: Card['revisionStatus'] = days >= revisionInterval ? 'OVERDUE' : 'UP_TO_DATE';

      return { ...card, revisionStatus };
    });

    return updatedCards;
  }

  static returnIntervalStatus(numberOfRevisions: number): number {
    switch (numberOfRevisions) {
      case 0: return 1;
      case 1: return 7;
      case 2: return 16;
      default: return 34;
    }
  }
}
