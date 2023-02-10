const objData = []
fetchAndRenderTools()

function fetchAndRenderTools() {
    fetch("http://localhost:3000/tools")
        .then(response => response.json())
        .then( (someData) => {
            const arrayOfToolObjects = someData
            const toolCollectionDiv = document.querySelector("#tool-menu")
            arrayOfToolObjects.map(  
                (eachToolObject)=>{
                  const toolImage = document.createElement("img")
                    toolImage.src = eachToolObject.image
                    toolImage.id = eachToolObject.id
                  toolImage.addEventListener("click", function(event) {
                    const clickedImage = event.target;
                    const bigImage = document.getElementsByClassName("detail-image");
                    bigImage[0].src = clickedImage.src
                    bigImage[0].name = eachToolObject.id
                    const bigName = document.getElementsByClassName("name");
                    bigName[0].innerText = eachToolObject.name
                    const toolAvailability = document.getElementsByClassName("status");
                    toolAvailability[0].innerText = eachToolObject.availability
                  })
                  toolCollectionDiv.append(toolImage)
              })
            
const centerImage = document.getElementById("center-image")
centerImage.addEventListener("mouseover", function() {
      if (+centerImage.name > 0) {
              console.log("Hello") }
            })
centerImage.addEventListener("mouseout", function() {
      if (+centerImage.name > 0) {
                console.log("Goodbye") }
            })
            })
          }

const submitForm = document.getElementById("new-tool");  
  submitForm.addEventListener("submit", function(e) {
   e.preventDefault()
   const submittedObject = {
    name:e.target[0].value, 
    availability:"Available",
    phonenumber:e.target[1].value,
    image:e.target[2].value,
    useDescription:e.target[3].value
  }

  fetch("http://localhost:3000/tools", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", 
        Accept: "application/json"
      },
      body: JSON.stringify(submittedObject)
    })
    .then(response => response.json())
    .then( () => fetchAndRenderTools())
  })