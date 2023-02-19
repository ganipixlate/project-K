function vis()
{
    document.getElementById("a").removeAttribute("type")
    document.getElementById("b").setAttribute("src","../Assets/Logos/show.png")
}
function hide()
{
    document.getElementById("b").setAttribute("src","../Assets/Logos/hide.png")
    document.getElementById("a").setAttribute("type","password")
}
function auth()
{
    var password="123"
    var email="gani@gmail.com"
    var userpass=document.getElementById("a").value
    var usermail=document.getElementById("email").value
    if(usermail==email && userpass==password)
    {
        document.getElementById("good").setAttribute("action","./index.html")
        document.getElementById("login").setAttribute("type","submit")
        document.getElementById("result").innerHTML=""
    }
    else if(usermail!=email && userpass==password)
    {
        document.getElementById("email").style.borderColor="red"
        document.getElementById("result").innerHTML="Entered the wrong Email"
        document.getElementById("result").style.left="35%"
        document.getElementById("result").style.color="red"
    }
    else if(usermail==email && userpass!=password)
    {
        document.getElementById("a").style.borderColor="red"
        document.getElementById("result").innerHTML="Entered the wrong Password"
        document.getElementById("result").style.left="33%"
        document.getElementById("result").style.color="red"
    }
    else{
        document.getElementById("email").style.borderColor="red"
        document.getElementById("a").style.borderColor="red"
        document.getElementById("result").innerHTML="Entered the wrong Email and password"
        document.getElementById("result").style.color="red"
    }
}