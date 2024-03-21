const right = (myImage) => {
    let div =document.createElement("div")
    div.className = "right"
    div.innerHTML = `<img src="${myImage}">`

    return div
}

export { right }