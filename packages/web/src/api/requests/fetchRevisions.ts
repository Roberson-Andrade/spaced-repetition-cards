import { parseISO } from "date-fns";
import { Callback, ZustandSet } from "../../store/types";
import { RevisionResponse, RevisionStats } from "../../types";
import { axiosInstance } from "../axios";

export const fetchRevisions = async (callback: Callback, set: ZustandSet) => {
  const reqOptions = {
    url: "/revision",
    method: "GET"
  };

  try {
    const { data }: { data: RevisionResponse[] } = await axiosInstance.request(reqOptions);

    const revisionStats: RevisionStats[] = data.map(
      (revision): RevisionStats => ({
        date: parseISO(revision.date),
        numberOfRevisedCards: parseInt(revision.numberOfRevision, 10)
      })
    );

    callback(null);
    set({ revisionStats });
  } catch (error) {
    callback((error as Error).message);
  }
};
