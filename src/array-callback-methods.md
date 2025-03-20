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

## Filter Method Examples

It can be used for a variety of different options.

### Filter Out Large Numbers

``` JavaScript

const numbers = [1, 5, 23, 56, 234, 2, 7]

function smallNum(num) {
    return num <= 50;
}

const smallNumbers = numbers.filter(smallNum); //[1, 5, 23, 2, 7]

```

### Search For Words Containing 'ap"'

``` JavaScript

const words = ['Apple', 'Pineapple', 'Kiwi', 'Banana']

