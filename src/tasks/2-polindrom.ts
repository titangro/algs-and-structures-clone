// aabbaa - true
// aabaB - false
// aZazA - true

export function polindrom(word: string) {
    word = word.toLocaleLowerCase();

    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - i - 1]) {
            return false;
        }
    }

    return true;
}

export function polindromBySplit(word: string) {
    word = word.toLowerCase();
    return word === word.split('').reverse().join('');
}
