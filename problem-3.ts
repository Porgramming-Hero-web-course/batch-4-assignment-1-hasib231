{
    function countWordOccurrences(sentence: string, word: string): number {

    const allLowerCaseSentence = sentence.toLowerCase();
    const allLowerCaseWord = word.toLowerCase();
    
    const splitWords = allLowerCaseSentence.split(' ');
    
    let count = 0;
    for (const i of splitWords) {
        if (i === allLowerCaseWord) {
            count++;
        }
    } 
    return count;
    }

}