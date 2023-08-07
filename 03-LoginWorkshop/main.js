let user = prompt("user");
let password
if (user !== "codecamp") {
    user = "guest";
    alert(user)
}
else if (user === "codecamp") {
    password = prompt("password")
    if (password !== "123456") {
        alert("Wrong password")
        // user="guest"
        // alert("Welcom"+" "+user)
    } else {
        user = "codecamp"
        alert("Welcom" + " " + user)

    }
}
