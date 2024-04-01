function sort(array){

    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    let sort_result = []
    for(num of arr){
        
        if(num % 3 === 0 && num % 5 === 0){
            sort_result.push('FizzBuzz')
                
        }        else if(num % 5 === 0){
            sort_result.push('Buzz')

        } else if(num % 3 === 0){
            sort_result.push('Fizz')

        } else {
            sort_result.push(num)
        }
        
    }


    return sort_result
    
}
console.log(sort());

        function sort2(...arr){
    let arr2 = [[1,[2,3,4],5],[6,7,8,9],[10,[11,[12]],13],[[[[14,15]]]]]
    let sort_result2 = []
        for(num2 of arr2){
    
    if(num2 % 3 === 0 && num2 % 5 === 0){
        sort_result2.push('FizzBuzz')
            
    }        else if(num2 % 5 === 0){
        sort_result2.push('Buzz')

    } else if(num2 % 3 === 0){
        sort_result2.push('Fizz')

    } else {
        sort_result2.push(num2)
    }
    
}


return sort_result2

}
console.log(...sort2());
