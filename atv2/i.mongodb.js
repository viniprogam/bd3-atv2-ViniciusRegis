const database = 'bd3-atv2';

const collection = 'bd3-atv2-produtos';

use(database);
db[collection].find({
    categoria: "Eletrodomésticos"
  }).sort({ valor: 1 });