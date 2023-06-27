 //Exercicio 1
function renderUpToTwenty() {
    for (let cont = 0; cont < 10; cont++) {
        console.log(cont)
    }
}
renderUpToTwenty() 

//Exercicio 2
function tenInTenToAHundred(){
    for (let cont2 = 10; cont2 < 101; cont2++) {
        if (cont2 === 10 || cont2 === 20 ||  cont2 === 30 ||  cont2 === 40 ||  cont2 === 50 ||  cont2 === 60 ||  cont2 === 70 ||  cont2 === 80 ||  cont2 === 90 ||  cont2 === 100){
             console.log(cont2)
        }
    }
}
tenInTenToAHundred()

//Exercicio 3 
function  oddUpToTwenty(){
    for (let num1 = 0; num1 < 20; num1++){
        if(num1 %2 == 0){
            

        }else{
            console.log(`Esse numero ${num1} é impar`)
        }
    }
}
oddUpToTwenty()

//Exercicio 4
function evenUpToTwenty(){
    for (let num2 = 0; num2 < 20; num2++){
        if(num2 %2==0){
            console.log(`Esse numero ${num2} é par`)
        }
    }
}
evenUpToTwenty()
