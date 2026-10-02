function add(a, b) {
    return a - b;
}

if (add(2, 3) !== 5) {
    throw new Error("Test failed: 2 + 3 should equal 5");
}

console.log("Test passed: add(2, 3) = 5");