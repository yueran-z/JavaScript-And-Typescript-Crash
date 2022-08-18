let person2 = [
  {
    createdAt: "2021-08-17T07:11:29.033Z",
    name: "Sonja Grady",
    avatar: "https://cdn.fakercloud.com/avatars/popey_128.jpg",
    userId: "399",
    username: "Clair.Langosh30",
    id: "1"
  },
  {
    createdAt: "2021-08-17T06:19:11.959Z",
    name: "Megan Mertz",
    avatar: "https://cdn.fakercloud.com/avatars/beshur_128.jpg",
    userId: "067",
    username: "Arlene_West",
    id: "2"
  },
]
let p = person2.map(item => {
  let obj = {}
  obj[item.userId] = { ...item }
  return obj
})
console.log(p[0])
console.log(p)


// {
//   "399": {
//     createdAt: "2021-08-17T07:11:29.033Z",
//       name: "Sonja Grady",
//         avatar: "https://cdn.fakercloud.com/avatars/popey_128.jpg",
//           userId: "399",
//             username: "Clair.Langosh30",
//               id: "1"
//   },
//   "067": {
//     createdAt: "2021-08-17T06:19:11.959Z",
//       name: "Megan Mertz",
//         avatar: "https://cdn.fakercloud.com/avatars/beshur_128.jpg",
//           userId: "067",
//             username: "Arlene_West",
//               id: "2"
//   },

// }