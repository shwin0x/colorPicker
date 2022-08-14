document.getElementById("inputForm").addEventListener("submit",function(e){
    
    e.preventDefault()
    let colorPicked = (document.getElementById("colorPicker").value).slice(1,)
    let modePicked = document.getElementById("modePicker").value
    let apiURL = "https://www.thecolorapi.com/scheme?hex="+colorPicked+"&mode="+modePicked+"&count=5"
    fetch(apiURL)
        .then(response=>response.json())
        .then(data=>{
         document.getElementById("firstColor").style.backgroundColor = data.colors[0].hex.value
         document.getElementById("secondColor").style.backgroundColor = data.colors[1].hex.value
         document.getElementById("thirdColor").style.backgroundColor = data.colors[2].hex.value
         document.getElementById("fourthColor").style.backgroundColor = data.colors[3].hex.value
         document.getElementById("fifthColor").style.backgroundColor = data.colors[4].hex.value
         
         document.getElementById("firstColorHex").textContent = data.colors[0].hex.value
         document.getElementById("secondColorHex").textContent = data.colors[1].hex.value
         document.getElementById("thirdColorHex").textContent = data.colors[2].hex.value
         document.getElementById("fourthColorHex").textContent = data.colors[3].hex.value
         document.getElementById("fifthColorHex").textContent = data.colors[4].hex.value
        })   
})
