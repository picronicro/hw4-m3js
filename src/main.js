const btnLoad = document.querySelector(".load")
const wrapper = document.querySelector(".wrapper")

// part 1
btnLoad.onclick = () => {
    console.log("requesting")

    const request = new XMLHttpRequest()
    request.open("GET", "jsons/people.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.addEventListener("load", () => {
        btnLoad.disabled = true
        btnLoad.innerHTML = "loading"

        const data = JSON.parse(request.response)
        console.log(data)

        btnLoad.parentElement.classList.add("fade_out")
        btnLoad.classList.add("fade_out")
        setTimeout(() => {
            btnLoad.parentElement.remove()
            btnLoad.remove()
        }, 1100)

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

// part 2
function logBandcamp() {
    console.warn("Вторая часть vvv")

    const request = new XMLHttpRequest()
    request.open("GET", "jsons/bandcamp_albums.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.addEventListener("load", () => {
        console.log(JSON.parse(request.response))
    })
}

logBandcamp()