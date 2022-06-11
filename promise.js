const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (reaction) => {
  return new Promise((resolve) => {
    let total = 0;
    promiseTheaterIXX().then((hasilSetelahMenonton) => {
      hasilSetelahMenonton.forEach((item) => {
        if (item.hasil === reaction) 
          total++;
      });
    }).then(promiseTheaterVGC().then((hasilSetelahMenonton) => {
      hasilSetelahMenonton.forEach((item) => {
        if (item.hasil === reaction)
          total++;
      });
      resolve(total);
    }))
  })
};

module.exports = {
  promiseOutput,
};
