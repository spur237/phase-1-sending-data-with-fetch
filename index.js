// Add your code here
function submitData(name, email) {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const userInput = document.getElementById("searchByID");
  
      fetch(`http://localhost:3000/movies/${userInput.value}`)
      .then((response) => response.json())
        .then((data) => {
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
          title.innerText = data.title;
          summary.innerText = data.summary;
        });
    })
  };
  
  document.addEventListener("DOMContentLoaded", init);
  
  function submitData(name, email){
      let contentOn = {
          method: "POST", 
          headers: {
              "Content-Type": "application/json", 
              "Accept": "application/json"
          }, 
          body: JSON.stringify({name, email})
      }
      return fetch("http://localhost:3000/users", contentOn)
      .then((resp) => resp.json())
      .then(obj => {
          document.body.innerHTML = obj.id
  
      }).catch((err) => {
          document.body.innerHTML = err.message
      })
  }