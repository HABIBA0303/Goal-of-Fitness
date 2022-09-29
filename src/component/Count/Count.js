const addToTime = id => {
    let addTime = {};


    const getTime = localStorage.getItem('addTime');
    if (getTime) {
        addTime = JSON.parse(getTime);
    }


    const quantity = addTime[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        addTime[id] = newQuantity;
    }
    else {
        addTime[id] = 1;
    }
    localStorage.setItem('addTime', JSON.stringify(addTime));
}
export { addToTime }
