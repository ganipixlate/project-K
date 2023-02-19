function coll()
{
    var col=["a.jpg","b.jpg","c.jpg","d.jpg","e.jpg","f.jpg","g.jpg","i.jpg","j.jpg"]
    var len=col.length;
    var ran=Math.random()*len;
    var rannum=Math.round(ran);
    document.getElementById("a").style.backgroundImage="URL(../Assets/Images/"+col[rannum]+")"
    var updatethetime=setTimeout(function(){coll()},2000)
}
function imgK(pic,heading,discription){
document.getElementById("bigscreen").removeAttribute("style")
document.getElementById("imgheading").innerHTML=heading;
document.getElementById("imgp").innerHTML=discription;
bigscreen.style.display="flex"
 fullimg.src=pic;
}
function imgV(){
    document.getElementById("bigscreen").setAttribute("style","display:none")
    console.log("calling")
}