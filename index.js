
const colorInput = document.getElementById('color-input')
const getHex = document.getElementById('get-hex')
const schemeContainer = document.getElementById("scheme-container")
const myDropDown = document.getElementById("my-drop-down")

getHex.addEventListener('click',fetchColorScheme)

function fetchColorScheme(){  
    const selectedValue = myDropDown.value
    const cleanHexvalue = colorInput.value.substring(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${cleanHexvalue}&mode=${selectedValue}&count=5`)
    .then(res=> res.json())
    .then(data => renderScheme(data.colors))
}


function createColorCard(hexValue){
    const schemeChild = document.createElement("div")
    const colourBox = document.createElement("div")
    const hex =document.createElement("p")
    schemeChild.className = "scheme-child"
    colourBox.className="color-box"
    colourBox.style.backgroundColor = hexValue
    hex.textContent = hexValue
    schemeChild.append(colourBox)
    schemeChild.append(hex)
    return schemeChild
}

function renderScheme(arr){
    schemeContainer.innerHTML = ""
    const fragment = document.createDocumentFragment()
    arr.forEach(hexColor => {
        let card = createColorCard(hexColor.hex.value)
        fragment.append(card)
    });
    schemeContainer.append(fragment)

}


fetchColorScheme()