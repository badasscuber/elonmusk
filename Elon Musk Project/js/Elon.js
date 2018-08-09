let Buttona = document.getElementById("button_1")

let Buttonb = document.getElementById("button_2")

let Buttonc= document.getElementById("button_3")


let divlist = document.getElementById("divlist")

let divlist2 = document.getElementById("divlist2")

let divlist3 = document.getElementById("divlist3")



Buttona.addEventListener('click', () => {

    if (divlist.style.display === 'block') {

        Buttona.textContent = 'Show List'
        divlist.style.display = 'none'
        

    } 
    else {

        Buttona.textContent = 'Hide List'
        divlist.style.display = 'block'
        
    

    }

    
})

Buttonb.addEventListener('click', () => {

    if (divlist2.style.display === 'block') {

        Buttonb.textContent = 'Show List'
        divlist2.style.display = 'none'
        

    } 
    else {

        Buttonb.textContent = 'Hide List'
        divlist2.style.display = 'block'
        
    

    }

    
})

Buttonc.addEventListener('click', () => {

    if (divlist3.style.display === 'block') {

        Buttonc.textContent = 'Show List'
        divlist3.style.display = 'none'
        

    } 
    else {

        Buttonc.textContent = 'Hide List'
        divlist3.style.display = 'block'
        
    

    }

    
})