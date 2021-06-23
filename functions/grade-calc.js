// taking two arguments (student score , total possible score)
// 15/20 -> you got a c (75%)!
// A 90-100, B 80-90 , C 70-79 , D 60-69 , F 0-59

function gradeCal(score , totalPossibleScore){
    const grade = (score / totalPossibleScore) * 100
    console.log(grade)
    if(90 <= grade && grade <= 100){
        console.log(`You Got a A (${grade}%)!`)
    }else if(80 <= grade && grade <= 89){
        console.log(`You Got a B (${grade}%)!`)
    }else if(70 <= grade && grade <= 79){
        console.log(`You Got a C (${grade}%)!`)
    }else if(60 <= grade && grade <= 69){
        console.log(`You Got a D (${grade}%)!`)
    }else if(0 <= grade && grade <= 59){
        console.log(`You Got a F (${grade}%)!`)
    }else {
        console.log("Please enter a valid Mark!")
    }
}

gradeCal(100,100)