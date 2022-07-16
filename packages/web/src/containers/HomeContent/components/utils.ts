/* eslint-disable max-len */
import { isAfter, isSameDay } from "date-fns";

const isInInterval = (value: number, start: number, end: number) => value >= start && value <= end;

type RevisionStats = {
  date: Date,
  numberOfRevisedCards: number
}

export const numberOfRevisionsToColor = (numberOfRevisions: number | undefined) => {
  if (!numberOfRevisions) {
    return "bg-[#ABABAB]";
  }
  if (isInInterval(numberOfRevisions, 1, 10)) {
    return "bg-success-50";
  }
  if (isInInterval(numberOfRevisions, 11, 20)) {
    return "bg-success-100";
  }
  if (isInInterval(numberOfRevisions, 21, 30)) {
    return "bg-success-200";
  }
  if (isInInterval(numberOfRevisions, 31, 40)) {
    return "bg-success-300";
  }
  if (isInInterval(numberOfRevisions, 41, 50)) {
    return "bg-success-400";
  }
  if (isInInterval(numberOfRevisions, 51, 60)) {
    return "bg-success-500";
  }
  if (isInInterval(numberOfRevisions, 61, 70)) {
    return "bg-success-600";
  }
  if (isInInterval(numberOfRevisions, 71, 80)) {
    return "bg-success-700";
  }
  if (isInInterval(numberOfRevisions, 81, 90)) {
    return "bg-success-800";
  }
  if (isInInterval(numberOfRevisions, 91, 100)) {
    return "bg-success-900";
  }

  return "bg-success-900";
};

export function matchRevisedCalendar(daysOfTheYear: Date[] | RevisionStats[], revisionStats: RevisionStats[]) {
  const calendar = daysOfTheYear;

  // Implements binary search to attach the number of revisions to the respective date
  revisionStats.forEach((revision) => {
    let min = 0;
    let max = calendar.length - 1;
    let i = 0;

    while (min <= max) {
      i = Math.floor((max + min) / 2);

      if (isSameDay(revision.date, calendar[i] as Date)) {
        calendar[i] = {
          date: calendar[i],
          numberOfRevisedCards: revision.numberOfRevisedCards
        } as RevisionStats;
        break;
      } else if (isAfter(revision.date, calendar[i] as Date)) {
        min = i + 1;
      } else {
        max = i - 1;
      }
    }
  });

  return calendar;
}

// 366
// 183 > (183 + 366) / 2 > 274
// 274
