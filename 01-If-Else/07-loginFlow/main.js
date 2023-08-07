let uname = prompt("Username")
let pword = prompt("Password")

if (uname==""||pword==String)
{
    alert("username is required")
}
else if (uname==String||pword=="")
{
    alert("password is required")
}

else if (uname=="admin"&&pword=="1234"||uname=="john"&&pword=="qwerty")
{
    alert("Hello" +" " +uname)
}
else {
    alert("invalid username or password")
}