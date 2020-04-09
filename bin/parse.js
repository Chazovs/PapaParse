let mainTable = $.ajax({
    url:   "data/csse_covid_19_data/UID_ISO_FIPS_LookUp_Table.csv",
    async: false
}).responseText;

let confirmedGlobal = $.ajax({
    url:   "data/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",
    async: false
}).responseText;

let deathGlobal = $.ajax({
    url:   "data/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv",
    async: false
}).responseText;

let recoveredGlobal = $.ajax({
    url:   "data/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv",
    async: false
}).responseText;

let mainTableData       = Papa.parse(mainTable);
let confirmedGlobalData = Papa.parse(confirmedGlobal);
let deathGlobalData     = Papa.parse(deathGlobal);
let recoveredGlobalData = Papa.parse(recoveredGlobal);
