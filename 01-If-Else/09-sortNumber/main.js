// let a = +prompt()
// let b = +prompt()
// let c = +prompt()

// let arr = [a, b, c]

// alert(arr.sort())

// เคส 
// let x = +prompt()
// let y = +prompt()
// let z = +prompt()

// if (x >= y && x >= z) {
//     if (y >= z) 
//     { alert(x, y, z) } 
//     else { alert(x, z, y) }
// } else if (y >= x && y >= z) {
//     if (x >= z) 
//     {  alert(y, x, z)
//     } else {
//         alert(y, z, x)
//     }
// } else if (z >= x && z >= y) {
//     if (x>=y)
//     {alert(z,x,y)}
//     else{alert(z,y,x)}
// }

let x = +prompt()
let y = +prompt()
let z = +prompt()
let max;
let min;
let mid;

if (x>=y&&x>=z){
    max = x;
    if (y>= z){
        mid = y;
        min = z;
    } else {
        mid = z;
        min = y;
    }
}else if (y>=x&& y>=z) {
    max = y;
    if (x>=z){
        mid = x;
        min = z;
    } else{
        mid=z;
        min=x;
    }
}else if (z>=x&&z>=y){
    max=z;
    if(x>=y){
        mid=x;
        min=y;
    } else {
        mid=y;
        min=x;
    }
};

alert(`${max},${mid},${min}`);