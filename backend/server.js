import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import "./passport/github.auth.js";
import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";
import authRoutes from "./routes/authRoutes.route.js";
import { connect } from "mongoose";
import connectMongoDB from "./db/connectMongodb.js";

import passport from "passport";

import session from "express-session";

dotenv.config();

const app = express();

app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.listen(5000, () => {
  console.log("Server Started at http://localhost:5000");
  connectMongoDB();
});
