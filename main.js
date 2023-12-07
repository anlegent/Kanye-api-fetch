async function getData() {
    let response = await fetch ("https://api.kanye.rest/");
    let data = await response.json();
    const quote = data.quote;
    
    console.log(data);
    let ul = document.querySelector("#data");
    let li = document.createElement("li");
    li.textContent = quote;
    ul.appendChild(li);
    }
    getData();