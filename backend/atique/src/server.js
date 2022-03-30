const app = require("./index.js");

const connect = require("./configs/db.js");
let port=process.env.PORT || 5000;
app.listen(port, async function () {
  try {
    await connect();
    console.log(`listening on port ${port}`);
  } catch (err) {
    console.error(err.message);
  }
});