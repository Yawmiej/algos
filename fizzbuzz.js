function fizzbuzz(n) {
	const result = [];
  
  for (let i = 1; i < n; i++) {
  	let add = '';
    
    if(i % 3===0) {
    	add += 'Fizz';
    }
    
    if(i % 5 === 0) {
			add += 'Buzz';
		}
    
    result.push(add || i);    
  }
  
  return result
}