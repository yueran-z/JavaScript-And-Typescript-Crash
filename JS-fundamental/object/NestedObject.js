let person = {
  person1: {
    createdAt: "2021-08-17T07:11:29.033Z",
    name: "Sonja Grady",
    avatar: "https://cdn.fakercloud.com/avatars/popey_128.jpg",
    userId: "399",
    username: "Clair.Langosh30",
    id: "1"
  },
  person2: {
    createdAt: "2021-08-17T06:19:11.959Z",
    name: "Megan Mertz",
    avatar: "https://cdn.fakercloud.com/avatars/beshur_128.jpg",
    userId: "067",
    username: "Arlene_West",
    id: "2"
  },
  person3: {
    createdAt: "2021-08-17T06:19:11.959Z",
    name: "Megan Mertz",
    avatar: "https://cdn.fakercloud.com/avatars/beshur_128.jpg",
    userId: "067",
    username: "Arlene_West",
    id: "2"
  },
  person4: {
    createdAt: "2021-08-17T06:19:11.959Z",
    name: "Megan Mertz",
    avatar: "https://cdn.fakercloud.com/avatars/beshur_128.jpg",
    userId: "067",
    username: "Arlene_West",
    id: "2"
  },

}
let arr = Object.entries(person)
let res = arr.map(item => {

})
// let res = arr.map(item => {
//   // console.log(item[0], "-----------------")
//   // console.log(item[1])
//   // item[0]
//   let _arr = Object.entries(item[1])
//   return _arr[0]
// })

// console.log(res)
// console.log(arr);

let language = {
  index: [
    {
      key: 'cancel',
      'zh-TW': '取消',
      'en-US': 'cancel',
      'ja-JP': '取り消し'
    },
    {
      key: 'email',
      'zh-TW': '信箱',
      'en-US': 'email',
      'ja-JP': 'Emailアドレス'
    },
    { key: 'date', 'zh-TW': '日期', 'en-US': 'date', 'ja-JP': '日付' },
    {
      key: 'subject',
      'zh-TW': '標題',
      'en-US': 'subject',
      'ja-JP': 'タイトル'
    }
  ],
  About: [
    {
      key: 'message',
      'zh-TW': '訊息内容',
      'en-US': 'message',
      'ja-JP': 'メッセージ内容'
    },
    {
      key: 'upload',
      'zh-TW': '上傳',
      'en-US': 'upload',
      'ja-JP': 'アップロード'
    }
  ]
}
let arr_langs = []
for (let item in language) {
  // arr_langs.push(language[item])
  language[item].map(_item => {
    arr_langs.push(_item)
  })
}
arr_langs.reduce((p,n) => {
  let obj 
  p.
},{})
// console.log(arr_langs);
// let result = Object.entries(language)
// console.log(result);


// result: {
//   'zh-TW': {
//     cancel: '取消',
//       email: '信箱',
//         date: '日期',
//           subject: '標題',
//             message: '訊息内容',
//               upload: '上傳'
//   },
//   'en-US': {
//     cancel: 'cancel',
//       email: 'email',
//         date: 'date',
//           subject: 'subject',
//             message: 'message',
//               upload: 'upload'
//   },
//   'ja-JP': {
//     cancel: '取り消し',
//       email: 'Emailアドレス',
//         date: '日付',
//           subject: 'タイトル',
//             message: 'メッセージ内容',
//               upload: 'アップロード'
//   }
// }