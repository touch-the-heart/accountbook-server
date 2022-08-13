require("dotenv").config(); //env 사용법
const express = require("express");
const mongoose = require("mongoose"); //몽구스 가져옴
const app = express();
const PORT = 4000;
const { AccountRouter } = require("./routes/accountRouter");

//node.js랑 mongodb연결하는데 mongoose 이용
mongoose
  .connect(
    `mongodb+srv://shimeuisuk:${process.env.PASSWORD}@cluster0.4wisex3.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("MongoDb connected");
  })
  .catch((error) => {
    console.error(error);
  });

// express에서 json을 파싱하는 방법
app.use(express.json());

// 해당하는 Router를 등록시켜주는 방법
app.use("/account", AccountRouter);

app.get("/", (req, res) => {
  return res.send("hello!");
});

app.listen(PORT, () => {
  console.log("server is open");
});
