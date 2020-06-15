export const splitInPairs = (list) => {
    let listOfPairs = [];
    for(let i = 0; i< list.length; i+=2){
        listOfPairs.push(list.slice(i, i+2));
    }
    return listOfPairs;
};
