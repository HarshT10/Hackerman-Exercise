let textBox = document.getElementById("textBox")

let texts = [
    "Initializing Hack Tool",
    "Connecting to Instagram",
    "Connecting to Server 1",
    "Connection Failed...",
    "Connecting to Server 2",
    "Trying Brute Force...",
    "Connected Successfully....",
    "Searching for 'x'....",
    "Username found",
    "Initializing Hack....",
    "500K passwords tried...",
    "Match not found",
    "Another 700K passwords tried...",
    "Match not found",
    "Another 800K passwords tried...",
    "Match found",
    "Accessing Account",
    "Hack Successful",
    "Hacked 'x'",
]

const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, seconds * 1000);
    })
}

const showHack = async (message) => {
    await sleep(3)
    textBox.innerHTML = textBox.innerHTML + message + "<br>";
}

(async () => {
    for (let i = 0; i < texts.length; i++) {
        await showHack(texts[i]);
    }
})()