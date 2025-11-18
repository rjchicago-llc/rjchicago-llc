const app = require('./server');

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`RJChicago API listening on port ${PORT}`);
});
