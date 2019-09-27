import * as firebase from "firebase"

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderID: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export { firebase, database as default }


// database.ref().on("value", (snapshot)=>{
//     console.log(snapshot.val().name + " is " + snapshot.val().age + " and works at " + snapshot.val().job.company)
// })
// setTimeout(()=>{
//         database.ref("age").set(33)
//     }, 3500)

// const firebaseNotes={
//     notes: {
//         nasdfas: {

//         }
//     }
// }
// const notes = [{
//         id:"2",
//         title:"hello",
//         body: "weird note"
//     },{
//         id:"3",
//         title:"nba",
//         body: "carmelo"
//     },
// ]
// database.ref("expense").push({
//     description: "rent",
//     createdAt: 123213,
//     note: "",
//     amount: 50
// })

// database.ref("expense").push({
//     description: "food",
//     createdAt: 0,
//     note: "",
//     amount: 520
// })


// database.ref("expense")
//     .on("value", (snapshot)=>{
//         const expense =[]

//         snapshot.forEach((childSnapshot)=>{
//             expense.push({
//                 id:childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expense)
//     })
// database.ref("expense")
//     .on("child_changed", (snapshot)=>{
//         console.log(snapshot.key, snapshot.val())
//     })
// database.ref().on("value", (snapshot) =>{ 
//     console.log(snapshot.val())
// })
// setTimeout(()=>{
//     database.ref("age").set(23)
// }, 3500)
// setTimeout(()=>{
//     database.ref().off()
// }, 7000)

// setTimeout(()=>{
//     database.ref("age").set(12312312)
// }, 10500)
// database.ref("location/city")
//         .once("value")
//         .then((snapshot)=>{
//             const val = snapshot.val()
//             console.log(val)
//         })
//         .catch((e)=>{
//             console.log("error fetching", e)
//         })

// database.ref().set({
//     name: "Kentaro",
//     tired: true,
//     age: 29,  
//     job: {
//         title: "weird",
//         company: "nui"
//     },
//     location: {
//         city: "Tokyo",
//         country: "Japan"
//     }
// }).then(()=>{
//     console.log("data is saved")
// }).catch((e)=>{
//     console.log("this failed", e)
// })

// // database.ref("tired").remove()

// database.ref().update({
//     tired: 9,
//     "job/company": "amazon",
//     "location/city": "Seattle"
// })

