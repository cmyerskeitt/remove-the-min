function removeSmallest(numbers) {
    const copy = numbers.slice(0);
    copy.splice(numbers.indexOf(Math.min(...numbers)), 1);
    return copy;
 }