//EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running" var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

let run = function exercise(x) {
    return `Todays exercise: ${x}`
}
console.log(run('Running'))

let swim = function exercise(x) {
    return `Todays exercise: ${x}`
}
console.log(run('Swimming'))


