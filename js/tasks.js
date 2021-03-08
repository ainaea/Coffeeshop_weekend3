function task1() {
    var input;
        do {
            input = prompt('Please enter your name')
        } while (input == '' || input == null);
        document.write(`Welcome here ${input}`);
}

function task2() {
    var input;
        do {
            input = prompt('Please enter your name')
        } while (input == '' || input == null);
        if (input == 'Alice' || input == 'Bob') {
            document.write(`Welcome here ${input}`);
        } else {
            document.write(`Welcome here`); 
        }
}

function task3() {
    var input, sum = 0;
        do {
            input = parseInt(prompt('Please enter a positive integer'))
        } while (input != input || input < 1);
        for (let i = 1; i <= input; i++) {
            sum += i;
            
        }
        document.write(`The sum of numbers from 1 to ${input} is ${sum}`);
}

function task4() {
    var input, sum = 0;
        do {
            input = parseInt(prompt('Please enter a positive integer'))
        } while (input != input || input < 1);
        
        for (let i = 1; i <= input; i++) {
            (i%3 == 0 || i%5 == 0) ?   sum += i: null;
            
        }
        document.write(`The sum of multiples of 3 and 5 from 1 to ${input} is ${sum}`);
}

function task5() {
    var input, input2, sum = 0, times=1;
        do {
            input = parseInt(prompt('Please enter a positive integer'))
        } while (input != input || input < 1);
        
        do {
            input2 = prompt('Please enter "+" or "*" to specify operation')
        } while ( ["*","+"].indexOf(input2) == -1 );

        for (let i = 1; i <= input; i++) {
            if (input2 == "*") {
                times *= i;
            } else {
                sum +=i;
            }
           
        }
        document.write(`The ${input2 == "+"? "sum": "product"} of numbers from 1 to ${input} is ${input2 == "+"? sum: times}`);
}

function task6() {
    for (let i = 1; i <= 12; i++) {
            
        for (let j = 1; j <= 12; j++) {
            document.write(`${i} * ${j} = ${i*j} <br>`);
        
        }document.write(`<hr>`);          
    }
}

function task7() {
    var input;
        do {
            input = parseInt(prompt('Please enter a positive integer greater than 20'))
        } while (input != input || input <= 20);

        for (let i=20; i<= input; i++){
            let num= 2;

                while( num <= i*0.5)
                {
                    if(i % num == 0)
                    {
                        //document.write(`${i} is not a prime Number`);
                        break;
                    }
                    (parseInt(i*0.5)== num) ? document.write(`${i} is a prime Number <br>`): null;
                    num == 2? num++ : num +=2;
                }
                
        }
}

function task8() {
    var current = 2021, count = 0;
        do {
            if ( (current % 4 == 0 && current %100 != 0) || (current % 4 == 0 && current %100 == 0 && current %400 == 0) ) {
                document.write(`${count + 1}. ${current}<br>`);
                current +=4;
                count++;
            } 
            else {  current++ ;          
            }
            
        } while (count < 20);
}