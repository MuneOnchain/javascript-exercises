const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10x";

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

select.addEventListener("change", () =>
select.value === "black"
? update("purple", "red")
: update("yellow", "brown"),
);