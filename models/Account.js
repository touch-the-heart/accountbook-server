const mongoose = require("mongoose"); //몽구스 가져옴

//데이터 구조 설계하는 스키마 만듬
const AccountSchema = mongoose.Schema(
  {
    category: { type: String, require: true },
    contents: { type: String, require: true },
    payment: { type: String, require: true },
    income: { type: Boolean, require: true },
    amount: { type: Number, require: true },
    date: { type: Date, require: true },
  },
  // createAt과 updateAt이 생김
  // createAt은 생성시간
  // udpateAt은 수정시간
  { timestamps: true }
);

// 이 스키마를 몽고 DB에 적용시켜주세요!
module.exports = mongoose.model("account", AccountSchema);
