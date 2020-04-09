let rawConfirmedName = confirmedGlobalData.data[0];
let confirmedUSA     = confirmedGlobalData.data[226];
let confirmedRussia  = confirmedGlobalData.data[188];

let chartUSAConfirmed = mapper();
console.log(chartUSAConfirmed);
chartUSAConfirmed.splice(0, 4);


function mapper() {
    return   rawConfirmedName.map(
        mappingCharData
    );
}

function mappingCharData(val, index) {
    let replVal = val.replace('/', ', ');
    let date    = new Date(replVal);
    let intVal  = Number(confirmedUSA[index]);
    let newVal  = [date, intVal];
    return newVal;
}