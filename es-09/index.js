function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

luckyDraw("joe")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

luckyDraw("Caroline")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

luckyDraw("Sabrina")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
