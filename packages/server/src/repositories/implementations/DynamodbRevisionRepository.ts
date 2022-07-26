/* eslint-disable class-methods-use-this */
import {
  DynamoDBClient,
  GetItemCommand,
  GetItemCommandInput,
  PutItemCommand,
  PutItemCommandInput,
  ScanCommand,
  ScanCommandInput, UpdateItemCommand,
  UpdateItemCommandInput
} from '@aws-sdk/client-dynamodb';
import { dynamodbConfig } from '../../config/dynamodb';
import { Revision } from '../../domain/entities/revision';
import { IRevisionRepository } from '../IRevisionRepository';

export class DynamodbRevisionRepository implements IRevisionRepository {
  async save({ revisionDate, numberOfRevision }: Revision): Promise<void> {
    const client = new DynamoDBClient(dynamodbConfig);
    try {
      const getParams: GetItemCommandInput = {
        TableName: 'REVISION_TABLE',
        Key: {
          date: { S: revisionDate }
        }
      };

      const { Item } = await client.send(new GetItemCommand(getParams));

      if (Item) {
        const existingRevisions = parseInt(Item.numberOfRevision.N, 10);
        const accumulatedRevisions = (numberOfRevision + existingRevisions).toString();

        const updateParams: UpdateItemCommandInput = {
          TableName: 'REVISION_TABLE',
          Key: {
            date: { S: Item.date.S }
          },
          ExpressionAttributeNames: { '#n': 'numberOfRevision' },
          UpdateExpression: 'set #n = :n',
          ExpressionAttributeValues: {
            ':n': { N: accumulatedRevisions }
          },
        };

        await client.send(new UpdateItemCommand(updateParams));
        return;
      }

      const params: PutItemCommandInput = {
        TableName: 'REVISION_TABLE',
        Item: {
          date: { S: revisionDate },
          numberOfRevision: { N: numberOfRevision.toString() }
        }
      };

      await client.send(new PutItemCommand(params));
    } finally {
      client.destroy();
    }
  }

  async fetch(): Promise<Revision[]> {
    const client = new DynamoDBClient(dynamodbConfig);
    try {
      const params: ScanCommandInput = {
        TableName: 'REVISION_TABLE',
      };

      const { Items } = await client.send(new ScanCommand(params));
      const revisions = Items.map((item) => ({
        date: item.date.S,
        numberOfRevision: item.numberOfRevision.N
      }));
      return revisions as unknown as Revision[];
    } finally {
      client.destroy();
    }
  }
}
