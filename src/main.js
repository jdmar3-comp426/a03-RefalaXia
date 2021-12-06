/** mild_1
import {sumToString} from "./mild/mild_1.js";  
sumToString(1,5);

import {getIncreasingArray} from "./mild/mild_1.js";  
getIncreasingArray(3,7);

import {maxAndMin} from "./mild/mild_1.js";  
maxAndMin([2,6,4,3,11,1]);

import {countArray} from "./mild/mild_1.js";  
countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]]);

 */


/** mild_2
import {identifyVariable} from "./mild/mild_2.js";  
identifyVariable(4);

import {identifyArray} from "./mild/mild_2.js";  
identifyArray(['some', 3, [3, 4], false]);

import {removeKey} from "./mild/mild_2.js"; 
let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
}; 
removeKey(obj, 'password');

import {removeKeyNonDestructive} from "./mild/mild_2.js";  
removeKeyNonDestructive(obj, 'password');

import {removeKeys} from "./mild/mild_2.js";  
removeKeys(obj, ['password', 'age']);
 */


/** medium_1
import {getSum} from "./medium/medium_1.js";  
getSum([1,2,3,4]);

import {getMedian} from "./medium/medium_1.js";  
getMedian([3,2,5,6,2,7,4,2,7,5]);

import {getStatistics} from "./medium/medium_1.js";  
getStatistics([3,2,4,5,5,5,2,6,7]);

 */


import {repeatDemo} from "./spicy/spicy_9.js";  
repeatDemo();

import {tenTimes} from "./spicy/spicy_9.js";  
tenTimes(5);

import {tenTimesFifty} from "./spicy/spicy_9.js";  
tenTimesFifty();

import {everyEven} from "./spicy/spicy_9.js";  
everyEven([1, 5, 1, 0, 1], x => x === 1);
everyEven([1, 1, 0, 1, 1], x => x === 1);

import {someEven} from "./spicy/spicy_9.js";  
someEven([4, 3, 2, 1, 0], x => x === 3);
someEven([1, 0, 1, 0, 1], x => x === 0);
someEven([1, 1, 1, 1, 0], x => x === 0);
someEven([0, 0, 0, 0, 0], x => x === 0);

import {filter} from "./spicy/spicy_9.js";  
filter(['yes', 'nope', 'maybe', 'yellow'], x => x[0] === 'y');
filter([1, 90, 5, 31], x => x % 2 === 1);


