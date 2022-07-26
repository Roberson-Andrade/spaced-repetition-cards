import {
  CreateTableCommand, DynamoDBClient, DynamoDBClientConfig, ListTablesCommand
} from '@aws-sdk/client-dynamodb';

export const dynamodbConfig: DynamoDBClientConfig = {
  region: 'sa-east-1',
  endpoint: 'http://127.0.0.1:8000'
};

(async () => {
  const client = new DynamoDBClient(dynamodbConfig);
  const listCommand = new ListTablesCommand({ Limit: 10 });
  try {
    const { TableNames } = await client.send(listCommand);

    if (!TableNames.length) {
      const params = {
        AttributeDefinitions: [
          {
            AttributeName: 'date',
            AttributeType: 'S',
          },
        ],
        KeySchema: [
          {
            AttributeName: 'date',
            KeyType: 'HASH',
          },
        ],
        ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1,
        },
        TableName: 'REVISION_TABLE',
        StreamSpecification: {
          StreamEnabled: false,
        },
      };

      const createTable = new CreateTableCommand(params);
      await client.send(createTable);
    }
  } finally {
    client.destroy();
  }
})();
