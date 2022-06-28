// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    if (someValue < 42) {
        return(42 - someValue);
    }
    else if (someValue > 42) {
        return(someValue - 42);
    }
    else {
        return(0);
    }
}

function distanceFromHqInFeet(someValue) {
    return(distanceFromHqInBlocks(someValue) * 264);

}

function distanceTravelledInFeet(start, finish) {
    if (start > finish) {
        return((start - finish) * 264);
    }
    else if (finish > start) {
        return((finish - start) * 264);
    }
    else {
        return(0);
    }
}

function calculatesFarePrice(start, finish) {
    const distance = distanceTravelledInFeet(start, finish);
    if (distance > 400 && distance <= 2000) {
        return((distance - 400) * .02);
    }
    else if  (distance > 2000 && distance <= 2500) {
        return(25);
    }
    else if (distance > 2500) {
        return('cannot travel that far');
    }
    else {
        return(0);
    }
}
console.log(calculatesFarePrice(34, 32));