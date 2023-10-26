function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((el, i) => el === arr2[i]);
}


function getUsersNamesInAgeRange(users, gender) {
    const result = users.filter(user => user.gender === gender).map(user => user.age).reduce((total, age, index, array) => {
        if (array.length === 0) {
    return 0;
    } else {
    return (total+ age/array.length);
    }
    }, 0)
    return result;
    };

