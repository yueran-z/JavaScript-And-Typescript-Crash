// prevent undefined
function add(numArray = []){
let total = 0;
new Array(numArray).forEach((element) =>{
    total += element
})
}