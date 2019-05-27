const express = require(`express`);

const app = express();

app.get(`/`, (req, res) => {
  res.send(`Welcome to our very plain site`);
});

app.get(`/about`, (req, res) => {
  res.send(`It was a cold dark rainy day in Pizzaville.`);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));