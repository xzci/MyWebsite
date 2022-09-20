var index = 10;
while(index > 0) {
  console.log(`this is the ${index}`)
  if(index === 2)
    document.write(`this is the ${index}rd<br>`)
  else if(index === 1)
    document.write(`this is the ${index}st<br>`)
  else
  document.write(`this is the ${index}th<br>`)
  if(index === 6)
  alert("SIX!!!!")
  index -= 1;
}
document.write("finish<br>")

document.write("again<br>")

for(var index = 10; index > 0; index--) {

  if(index === 2)
    document.write(`this is the ${index}rd<br>`)
  else if(index === 1)
    document.write(`this is the ${index}st<br>`)
  else
  document.write(`this is the ${index}th<br>`)
}

document.write("again?<br>")