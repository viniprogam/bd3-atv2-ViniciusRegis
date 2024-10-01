const database = 'bd3-atv2';

const collection = 'bd3-atv2-produtos';

use(database);

db[collection].find({
    valor: { $gte: 100, $lte: 1000 }
  });