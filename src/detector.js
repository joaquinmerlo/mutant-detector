
function match(dnaChain) {
    for (const chain of dnaChain) {
        if (chain.match(/AAAA|CCCC|GGGG|TTTT/g)) {
            return true;
        }
    }
    return false;
}

function isMutant(dna) {
    const mapDNA = dna.map(string => string.split(''));
    const horizontal = dna;
    const vertical = [];
    let diagonal = [];

    for (let i = 0; i < mapDNA.length; i++) {
        for (let j = 0; j < mapDNA.length; j++) {
            vertical[j] = (vertical[j] || '') + mapDNA[i][j];
            diagonal[(mapDNA.length - 1) + (i - j)] = (diagonal[(mapDNA.length - 1) + (i - j)] || '') + mapDNA[i][j];
        }
    }
    return match(horizontal) && match(vertical) && match(diagonal);
}

function verify(dna) {
    for (const chain of dna) {
        if (!chain.match(/^[A|C|G|T]+$/)) {
            return false;
        }
    }
    return true;
}

module.exports = { isMutant, verify }