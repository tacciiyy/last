const left = ( title, title1, para, para1, button1, button2, button3, button4) => {
    let div = document.createElement("div")
    div.className ="left"
    div.innerHTML = `<h1>${title}</h1>
                    <p>${para}</p>
                    <button>${button1}</button>
                    <button>${button2}</button>
                    <h1>${title1}</h1>
                    <p>${para1}</p>
                    <button>${button3}</button>
                    <button>${button4}</button>`

    return div
}

export { left }