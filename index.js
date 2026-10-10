const express = require("express");
const app = express();
// OTC_MEMECOIN_HOME
app.get("/",(req,res)=>res.redirect("/dashboard/"));


app.use("/dashboard", express.static("public"));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport"
            content="width=device-width, initial-scale=1">
      <title>OTCinsider | Market Intelligence</title>
      <style>
        body {
          margin: 0;
          background: #0b1220;
          color: white;
          font-family: Arial, sans-serif;
          text-align: center;
        }
        header {
          padding: 25px;
          background: #111c30;
          font-size: 28px;
          font-weight: bold;
        }
        main {
          padding: 65px 20px;
        }
        h1 {
          font-size: 36px;
        }
        p {
          color: #b8c5d6;
          line-height: 1.6;
        }
        footer {
          padding: 25px;
          color: #94a3b8;
        }
      </style>
    </head>
    <body>
      <header>OTCinsider</header>
      <main>
        <h1>Market Intelligence Starts Here</h1>
        <p>OTC Stock News, Investor Updates
           and Market Insights.</p>
        <p>Your source for independent OTC market coverage.</p>
      </main>
      <footer>
        OTCinsider | Financial News & Research
      </footer>
    </body>
    </html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`OTCinsider running on port ${PORT}`);
});

