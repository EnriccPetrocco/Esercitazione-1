let el = document.getElementById("btn")


let coloresa = "0123456789ABCDEF";

let morpheus = function(event){
    
    let el= "";
    for(let i=0; i<6; i++){
    el += coloresa[Math.floor(Math.random()*16)];
} 
document.getElementById("btn").style.backgroundColor= "#"+el;
}

el.onclick = morpheus

document.onkeypress = function(event) {
let k = event.key
    
console.log (k)

let getCoordFromPosition = function(position){
if (position == ""){ position = "0px"
}
let num = position.replace("px", "")
num = parseInt(num)
console.log(num)
return num

} 


console.log(event)
let delta = 10
let topNow = getCoordFromPosition(el.style.top)
let leftNow = getCoordFromPosition(el.style.left)

if (k == "d"){
        el.style.left = leftNow + delta + "px"
    } else if (k == "s"){ 
        el.style.top = topNow + delta + "px"
    } else if (k == "w"){ 
        el.style.top = topNow - delta + "px"
    } else if (k == "a"){
        el.style.left = leftNow - delta + "px"
                } else if (k == "D"){
                    el.style.left = leftNow + delta + 100 +"px"   
                } else if (k == "S"){
                    el.style.top = topNow + delta + 100 + "px"
                } else if (k == "W"){
                    el.style.top = topNow - delta - 100 + "px"
                } else if (k == "A"){
                    el.style.left = leftNow - delta - 100 + "px"
                }

}