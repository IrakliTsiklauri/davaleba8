// დაწერე ფუნქცია expo, რომელიც იქნება
// რეკურსიული ფუნქცია და მიიღებს
// არგუმენტად:
// ა) ციფრს ბ) ხარისხს და გ) callback - ს და
// დააბრუნებს მიღებული ციფრის ხარისხს
// მაგალითად: 5 ხარისხად 3 - არის 125 (5 * 5 *5)

// function expo(number, quality, callback) {
//   if (quality === 0) {
//     callback(1);
//   } else if (quality === 1) {
//     callback(number);
//   } else {
//     expo(number, quality - 1, (result) => {
//       callback(result * number);
//     });
//   }
// }

// function callback(result) {
//   console.log("Result:", result);
// }
// console.log(expo(5, 3, callback));

// fetch ფუნქციის გამოყენებით წამოიღე
// მონაცემები მოცემული მისამართიდან და
// გამოიტანე DOM-ში პოსტის სახით

// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.querySelector(".container");

//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((post) => {
//         const element = document.createElement("div");
//         element.innerHTML = `
//                     <h2>${post.title}</h2>
//                     <p>${post.body}</p>
//                 `;
//         container.appendChild(element);
//       });
//     })
//     .catch((error) => console.error("Error:", error));
// });

// დაწერე ასინქრონული ფუნქცია, რომელიც
// არგუმენტად იღებს ობიექტს და აკეთებს
// deep copy-ს
// ფუნქციამ უნდა გამოიძახოს reject თუ
// არგუმენტი არ არის ობიექტი. თუ ყველაფერი
// კარგად არის, გამოიძახოს resolve
// კოპირებული ობიექტით

// async function deepCopyObject(obj) {
//   return new Promise((resolve, reject) => {
//     if (typeof obj !== "object" || obj === null) {
//       reject(new Error("Input is not an object"));
//     } else {
//       try {
//         const copy = JSON.parse(JSON.stringify(obj));
//         resolve(copy);
//       } catch (error) {
//         reject(error);
//       }
//     }
//   });
// }

// const originalObject = {
//   a: 1,
//   b: {
//     c: 2,
//     d: 3,
//   },
// };

// deepCopyObject(originalObject)
//   .then((copy) => {
//     console.log("Deep copy successful:", copy);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });
