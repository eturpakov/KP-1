function find_edit() {
    const item = document.getElementById("surname")
    console.log(item.innerText)
    item.innerHTML = "<b>Turpakov</b>"

    const item2 = document.getElementById("name")
    console.log(item2.innerText)
    item2.innerHTML = "<b>Egor</b>"

    const item3 = document.getElementById("town")
    console.log(item3.innerText)
    item3.innerHTML = "<b>KALUGA town</b>"

    const item4 = document.getElementById("gender")
    console.log(item4.innerText)
    item4.innerHTML = "<b>male</b>"
}
const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click", find_edit)

