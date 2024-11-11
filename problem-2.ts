{
    function removeDuplicates(arr1: number[]): number[]{
        const arr2: number[] = [];

        for (const i of arr1) {
            if (!arr2.includes(i)) {
                arr2.push(i);
            }
        }
        return arr2;
    }
}