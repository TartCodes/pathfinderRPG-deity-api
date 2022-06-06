document.querySelector("button").addEventListener("click", getInfo);


async function getInfo() {
  document.querySelector('#newLi').replaceChildren()  
  const deity = document.querySelector("#input").value;
  try {
    const response = await fetch(
      `https://pathfinder-deity-info.herokuapp.com/${deity}`
    );
    const data = await response.json();
    for(const [key,value] of Object.entries(data)) {
        let newL = document.createElement('li')        
        newL.innerText = `${key}: ${value}`
        document.querySelector('#newLi').appendChild(newL)        
    }
    // console.log(`${key}: ${value}`);
    console.log(data);
    // document.querySelector("h2").innerText = value
  } catch (error) {
    console.log(error);
  }
}
