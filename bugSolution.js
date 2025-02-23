```javascript
const MongoClient = require('mongodb').MongoClient;

async function main() {
  const uri = "mongodb+srv://<username>:<password>@<cluster-address>/<database>?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('<databaseName>');
    const collection = database.collection('<collectionName>');
    // Perform operations, such as find, insert, update, delete, etc.
    // ...
  } catch (error) {
    console.error('Error during MongoDB operation:', error);
  } finally {
    await client.close();
  }
}

main().catch(console.dir);
```