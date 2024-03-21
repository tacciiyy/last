import { left } from "./info1.js"
import { right } from "./image.js"

const data = {
    title : "This is title one" ,
    title1 :"This is title two" ,
    para : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis voluptates ratione velit sapiente delectus minus quasi! Debitis natus, qui ad consequatur vel assumenda, voluptatum sint consectetur esse eius voluptatem a?xx" ,
    para1 : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis voluptates ratione velit sapiente delectus minus quasi! Debitis natus, qui ad consequatur vel assumenda, voluptatum sint consectetur esse eius voluptatem a?xx" ,
    button1 : "Contact us" ,
    button2 : "About us" ,
    button3 : "Contact us" ,
    button4 : "About us" ,
    myImage : "dog.jpg"

}

const { title, title1, para, para1, button1,  button2, button3, button4, myImage } = data

let container = document.getElementById("container")

container.append(left(title, title1, para, para1, button1, button2, button3, button4))
container.append(right(myImage))