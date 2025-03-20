# The Filter Method

The `filter()` method for arrays presents us with a smaller array using the test criteria we gave the function.  

``` JavaScript
const fruit = ['Banana', 'Pineapple', 'Apple', 'Kiwi', 'Pear']

const result = fruit.filter((fruit) => fruit.length <= 5);// returns ['Apple', 'Kiwi', 'Pear']

```
## Filter Method Syntax

The `filter()` method requires a callback function and has an optional `thisArg`.  
The callback function is needed to fulfill a requirement for the `filter()` method.  
The `fruit.length <=5` is part of the `thisArg` function.  
The method only allows length properties to be here.  
