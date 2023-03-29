const Search = document.querySelector("#search__div");
const svgIcon = Search.querySelector("svg");
function change() {
    const input = document.querySelector("input");
    input.classList.toggle('w-0')
    if (!input.classList.contains("w-0")) {
        input.focus()
    }
}
svgIcon.addEventListener("click", change);

