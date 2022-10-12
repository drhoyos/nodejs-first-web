import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static( join(__dirname, 'public')))

app.get("/", (req, res) => {
  res.render("index",{title: 'web index'});
});

app.get("/test", (req, res) => {
    res.render("test",{title: 'web test'});
  });

app.listen(process.env.PORT);
console.log("Servidor en PORT:", process.env.PORT);
