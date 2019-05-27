const express = require(`express`);

const app = express();

app.get(`/`, (req, res) => {
  res.send(`Welcome to our very plain site`);
});

app.get(`/about`, (req, res) => {
  res.send(`It was a cold dark rainy day in Pizzaville.`);
});

app.listen(4000, () => console.log(`Listening on port 4000`));