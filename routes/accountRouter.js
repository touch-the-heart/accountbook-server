const { Router } = require("express");
const AccountRouter = Router();
const Account = require("../models/Account");

// mongoose로 하는 작업은 무조건 await를 붙여줘야한다!!!!
AccountRouter.get("/", async (req, res) => {
  const accounts = await Account.find({});
  return res.send(accounts);
});

// mongoose로 하는 작업은 무조건 await를 붙여줘야한다!!!!
AccountRouter.post("/", async (req, res) => {
  const body = req.body;

  const account = await new Account({
    category: body.category,
    contents: body.contents,
    payment: body.payment,
    income: body.income,
    amount: body.amount,
    date: body.date,
  }).save();

  return res.send(account);
});

module.exports = { AccountRouter };
//AccountRouter app.js에 등록시켜줄것임
