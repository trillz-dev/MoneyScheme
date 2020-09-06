const path = require("path");

const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views");

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/about", (req, res, next) => {
  res.render("about");
});

app.get("/faq", (req, res, next) => {
  res.render("faqs");
});

app.get("/policy", (req, res, next) => {
  res.render("privacy-terms");
});

app.get("/login", (req, res, next) => {
  res.render("sign-in");
});

app.get("/sign-up", (req, res, next) => {
  res.render("sign-up");
});

app.get("/sign-up-success", (req, res, next) => {
  res.render("sign-up-success");
});

app.get("/add-bank", (req, res, next) => {
  res.render("add-bank");
});

app.get("/dashboard", (req, res, next) => {
  res.render("dashboard-main");
});

app.get("/investment", (req, res, next) => {
  res.render("investment");
});

app.get("/transaction", (req, res, next) => {
  res.render("transactions");
});

app.get("settings", (req, res, next) => {
  res.render("settings");
});

app.get("settings-security", (req, res, next) => {
  res.render("settings-security");
});

app.listen(3010);
