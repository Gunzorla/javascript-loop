// Exercise #1: Decrease the Student Scores
let scores = [89, 70, 60, 50, 100, 71];

// Start coding here
function studentScores () {
    return scores.map((a) => {
            return  a - 10 
    })
}


console.log(studentScores())

