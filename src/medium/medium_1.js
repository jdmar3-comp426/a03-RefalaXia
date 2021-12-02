import {variance} from "./data/stats_helpers.js"; 

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i ++) {
        sum += array[i];
    }

    return sum;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    let n = array.length;
    let median;
      
    array.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    })

    if (n % 2 == 0) {
        median = (array[n / 2] + array[(n / 2) - 1]) / 2.0;
    } else {
        median = array[ (n + 1) / 2];
    }

    return median;
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */

export function getStatistics(array) {
    /* length */
    let length = array.length;

    /* sum */
    let sum = 0;
    for (let i = 0; i < length; i ++) {
        sum += array[i];
    }

    /* mean */
    let mean = (sum * 1.0) / array.length;

    /* median */
    let n = array.length;
    let median;
    if (n % 2 == 0) {
        median = (array[n / 2] + array[n / 2 + 1]) / 2.0;
    } else {
        median = array[ (n + 1) / 2];
    }

    /* min and max */
    let min = array[0];
    let max = array[0];
    for (let i = 0; i < length; i ++) {
        if (array[i] < min) {
            min = array[i];
        }

        if (array[i] > max) {
            max = array[i];
        }
    }
    
    /* variance */
    let v = variance(array, mean);

    /* standard_deviation */
    let sd = Math.sqrt(v);

    let obj = {length: length,
        sum: sum,
        mean: mean,
        median: median,
        min: min,
        max: max,
        variance: v,
        standard_deviation: sd};
    
    return obj;

}

