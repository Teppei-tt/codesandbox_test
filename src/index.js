import "./styles.css";

/**
 * アロー関数
 */

//従来の関数
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です。"));
// 単一式のときreturnや波括弧を省略できる。
// const func２ = (str) => str;

/**
 * 分割代入
 */
// const myProfile = {
//   name: "TEPEEI",
//   age: 20
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// myProfileオブジェクトの中のnameとageを取り出している
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// 定義していない値は、undifinedになる
// const { hoge, age } = myProfile;
// const message2 = `名前は${hoge}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ['TEPPEI', 20];
// const message3 =  `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(message3);

// // 配列はオブジェクトのように名前（キー）がきまって　ないので、順番で受け取ることに　なる。
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);
