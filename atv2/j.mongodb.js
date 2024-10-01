const database = 'bd3-atv2';

const collection = 'bd3-atv2-produtos';
db[collection].find({
    categoria: { $ne: "Móveis" }
  }).sort({ valor: -1 });