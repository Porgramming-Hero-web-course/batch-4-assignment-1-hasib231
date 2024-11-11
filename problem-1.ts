{
    function sumArray(numbers: number[]):number {
        const sum = numbers.reduce((acc, number) => acc + number, 0);
        return sum;
    }

}