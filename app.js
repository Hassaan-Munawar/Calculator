let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        
try{
        if(e.target.innerHTML == '='){
            document.getElementById('slide').hidden = true
            string = eval(string);
            input.value = string;
        }
    

        else if(e.target.innerHTML == 'AC'){
            document.getElementById('slide').hidden = true
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            document.getElementById('slide').hidden = true
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            document.getElementById('slide').hidden = true
            string += e.target.innerHTML;
            input.value = string;
        }
    }
    catch(err){
        document.getElementById('slide').hidden = false
        string = err
        input.value = string
    }
    
    })
})
