const database = 'bd3-atv2';

const collection = 'bd3-atv2-produtos';

use(database);

use(database);
db[collection].find({
    categoria: { $in: ["Eletrônicos", "Acessórios"] }
  });