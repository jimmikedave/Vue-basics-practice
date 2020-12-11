const helloWorld = new Vue({
    el: '#helloVue', //el = element
    data: {
        title: "HELLO WORLD!",
        message: "See you later space cowboy."
    }
});

const example = new Vue({
    el: '#example', //el = element
    data: {
        title: "Hello, ",
        message: "See you later space cowgorl.",
        name: "Faye Valentine",
        img: {
            src: "https://placeimg.com/200/200/animals",
            alt: "A placeholder image of animals"
        }
    }
});