function compare (a,b) {
    if (a > b){
        return -1;
    } else if (a < b ) {
        return 1;
    }
    return 0;
}

console.log(compare(3,3))