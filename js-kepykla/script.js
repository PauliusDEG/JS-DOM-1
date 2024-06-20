let calculateButton = document.getElementById('calculate')
calculateButton.addEventListener('click', function(){
    let employeeCount = document.getElementById('employee-count').valueAsNumber
    let loavesPerEmployee = document.getElementById('loaves-per-employee').valueAsNumber
    let orderCount = document.getElementById('order-count').valueAsNumber

    let kepyklaTotal = employeeCount * loavesPerEmployee
    let arPavyks = kepyklaTotal >= orderCount

    // let logInfo = {
    //     employeeCount,
    //     loavesPerEmployee,
    //     orderCount,
    //     kepyklaTotal,
    //     arPavyks
    // }
    // console.log(logInfo)

    let results = document.getElementById('results')
    results.innerHTML = `<p><strong> Kepykla per diena spes pagaminti: </strong>${kepyklaTotal}</p>`
    results.innerHTML += `<p><strong> Reikia pagaminti: </strong>${orderCount}</p>`
    results.innerHTML += `<p><strong> Ar spesim ?: </strong>${arPavyks ? 'Taip' : 'Ne'}</p>`
})

document.getElementById('employee-count').addEventListener('keyup', function(event){
    let inputValue = event.target.valueAsNumber
    if(inputValue < 0){
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')}
            else {
                event.target.classList.remove('error')
                event.target.nextElementSibling.classList.remove('show')
            }
})

document.getElementById('loaves-per-employee').addEventListener('keyup', function(event){
    let inputValue = event.target.valueAsNumber
    if(inputValue < 0){
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')}
            else {
                event.target.classList.remove('error')
                event.target.nextElementSibling.classList.remove('show')
            }
})

document.getElementById('order-count').addEventListener('keyup', function(event){
    let inputValue = event.target.valueAsNumber
    if(inputValue < 0){
        event.target.classList.add('error')
        event.target.nextElementSibling.classList.add('show')}
            else {
                event.target.classList.remove('error')
                event.target.nextElementSibling.classList.remove('show')
            }
})

document.getElementById('reset').addEventListener('click', function(){
    document.getElementById('employee-count').valueAsNumber = 0
    document.getElementById('loaves-per-employee').valueAsNumber = 0
    document.getElementById('order-count').valueAsNumber = 0
    document.getElementById('results').valueAsNumber = '<p>Kol kas nieko nera</p>'

})