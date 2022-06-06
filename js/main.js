document.querySelector("button").addEventListener("click", getInfo);

async function getInfo() {
  const deity = document.querySelector("input").value;
  try {
    const response = await fetch(
      `${deity}`
    );
    const data = await response.json();

    console.log(data);
    document.querySelector("h2").innerText = data;
  } catch (error) {
    console.log(error);
  }
}
