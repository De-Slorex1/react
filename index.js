// //spread operator can be used to spread an object or an array.
// //spread operator uses (...) to open an object or an array to be able to add new items

// const user = {
//     name: "josiah",
//     age: 32,
//     gender: "male"
// }

// // //square bracket
// // user["email"] = "josiah@gmail.com";
// // //dot notation
// // user.city = "Ibadan"

// console.log(user)

// //spread operator
// const updatedUser = {...user, city: "Ibadan", email: "josiah@gmail.com"}
// console.log(updatedUser)


const users = [
    {
        name: "josiah",
        age: 32,
        gender: "male"
    },
    {
        name: "josiah",
        age: 32,
        gender: "male"
    }
]

const updatedUsers = [...users, "Favour", 23456]

console.log(users)
console.log(u)

