const btn = document.getElementById("btn");
const apiKey = "qdwzqVbACPqIcSOHc/IKFA==ByvDWSaGMS6wVVxi";
const jokeEle = document.getElementById("joke");
const options = {
  method: "GET",
  headers: {
    "X-Api-key": apiKey,
  },
};
const apiUrl = "https://api.api-ninjas.com/v1/jokes?limit=1";

async function getJoke() {
  try {
    jokeEle.innerText = "Updating...";
    btn.disabled = true;
    btn.innerText = "Loading...";
    const response = await fetch(apiUrl, options);
    const data = await response.json();

    btn.disabled = false;
    btn.innerText = "Tell me a Joke";

    jokeEle.innerText = data[0].joke;
  } catch (error) {
    jokeEle.innerText = "An error happended, try again later";
  }
}

btn.addEventListener("click", getJoke);
