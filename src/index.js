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
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["TAKAMOTO", "YUZI", "REN"];
//  for文を使った例
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// //mapをつかった例　mapは配列に対して使える関数

// // Basic
// const nameArr2 = nameArr.map((name) =>{
//   return name;
// });
// console.log(nameArr2);
// nameArr.map((name) => console.log(name));

//How to use map
// 1: 単純に配列をループして何か処理する
// 2: returnされた結果に基づいて新しい配列を生成する

// filterある条件に一致したものだけ、新しい配列として返す。
// const numArr = [1, 2, 3, 4, 5];
// const newArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "REN") {
//     return name
//   }else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
//　ある条件　？　　条件がtrue　：　条件がfalse
// const val1 = 1 < 0 ? 'tureです。'　: 'false' ;
// console.log(val1);

// const num = 'a';
// // console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : 'EnterNUｍ';
// console.log(formattedNum);
// // typeofはその変数の型が何を判定してくれる

//関数のリターン部分に三項演算子を使用するれい
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100  ? 'over 100' : 'safe';
// }
// console.log(checkSum(40, 0));
