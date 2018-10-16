function takeANumber(people, name) {
    people.push (name)
<<<<<<< HEAD
    return `Welcome, ${name}. You are number ${people.length} in line.`
}

function nowServing(katzDeliLine) {
   if (katzDeliLine.length > 0){
    let  name = katzDeliLine[0]
    katzDeliLine.shift()
    return (`Currently serving ${name}.`)
   }
   else if (katzDeliLine.length ===  0){
     return "There is nobody waiting to be served!"
   }
=======
    return `Welcome, ${name[i]}. You are number ${people[i++]} in line.`
>>>>>>> 3dda8889dfcafaab09a446a234ffef8dee2f0bf0
}
