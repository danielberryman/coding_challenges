// Write a function that can be called like so:
// greeter(“Hello”)(“Candidate”) and will log “Hello, Candidate!” to the console

function greeter(salutation) {
    return function (person) {
        return `${salutation}, ${person}!`;
    }
}

module.exports = { greeter }