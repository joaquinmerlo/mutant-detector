const { isMutant } = require('../src/detector')

function main() {
    const dna = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"];
    test(dna, true);

    const dna2 = ["TTGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"];
    test(dna2, false);
}

function test(dna, expected) {
    const got = isMutant(dna);
    if (got === expected) {
        console.log('OK', 'got:', got, '- expected:', expected);
    } else {
        console.log('X', 'got:', got, ' expected:', expected);
    }
}

main();