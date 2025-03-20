# The Filter Method

The `filter()` method for arrays presents us with a smaller array using the test criteria we gave the function.  

``` JavaScript
const fruit = ['Banana', 'Pineapple', 'Apple', 'Kiwi', 'Pear']

const result = fruit.filter((fruit) => fruit.length <= 5);// returns ['Apple', 'Kiwi', 'Pear']

```
