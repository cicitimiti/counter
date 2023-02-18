let count = 0

function increment() {
   count = count + 1
  document.getElementById("count-el").innerText = count
}

let counti = count
function decrement() {
  counti = count --
  document.getElementById("count-el").innerText = counti
}


  function save() {
   console.log(count)
 }
save()