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

/**
 * デフォルト値、引数など
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("TEPPEI")
// 変数の後に＝があれば、デフォルト値を設定している

/**
 * スプレッド構文　...
 */

// 1:　　配列の展開
//  const arr1 = [1, 2];
// //  console.log(arr1);
// //  console.log(...arr1);

//  const sumFunc = (num1, num2) => console.log(num1 + num2);
//  sumFunc(arr1[0], arr1[1]);
//  sumFunc(...arr1)

// 2:　　ひとつにまとめる
// const arr2 = [1, 2, 3, 4, 5, 6 , 7];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 3: 配列のコピーや結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

const arr8 = arr4;
arr8[0] = 100;
console.log(arr8);
