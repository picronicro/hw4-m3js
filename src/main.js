const btnLoad = document.querySelector(".load")
const wrapper = document.querySelector(".wrapper")

btnLoad.onclick = () => {
    console.log("requesting")

    const request = new XMLHttpRequest()
    request.open("GET", "people.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.addEventListener("load", () => {
        btnLoad.disabled = true
        btnLoad.innerHTML = "loading"

        const data = JSON.parse(request.response)
        console.log(data)

        btnLoad.parentElement.remove()
        btnLoad.remove()

        data.forEach(person => {
            wrapper.innerHTML += `
            <div class="base">
                <img class="pfp" src="${person.pfp !== "" ? person.pfp : "images/no_pfp.png"}" alt="">
                <div class="text">
                    <p class="name">Name: ${person.name}</p>
                    <p class="surname">Surname: ${person.surname}</p>
                    <p class="age">Age: ${person.age}</p>
                </div>
            </div>
            `

            console.log(person.pfp)
        })
    })
}