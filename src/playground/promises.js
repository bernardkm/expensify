const promises = new Promise((resolve, reject)=>{
    setTimeout(()=>{
    //     resolve({
    //         name: "ken",
    //         age: 29
    //     })
    // }, 5500)
    reject("something happened bad")}, 5000)
})
console.log("before")
promises.then((data)=>{
    console.log(data.age)
}).then(())
    .catch((error)=>{
    console.log("error", error)
});
console.log("after")