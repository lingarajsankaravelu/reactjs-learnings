function DayAsInt(date) {
    return date.toLocaleDateString('en-US', {month:'long'});
}

function MonthAsString(date) {
   return date.toLocaleDateString('en-us',{day: "2-digit"});
}

function Year(date) {
   return date.getFullYear();
}

export { DayAsInt, Year, MonthAsString };

