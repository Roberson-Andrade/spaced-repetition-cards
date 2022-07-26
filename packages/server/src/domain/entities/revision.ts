export class Revision {
  public revisionDate: string;

  public numberOfRevision: number;

  constructor(props: Revision) {
    Object.assign(this, props);
  }
}
