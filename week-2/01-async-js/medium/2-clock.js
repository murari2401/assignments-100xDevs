// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function displayTime(){
    const now=new Date();
    let hours=now.getHours;
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    let ampm=hours>=12?'PM':'AM';
    hours=hours%12;
    hours=hours?hours:12;//for midnight (0hours)
    minutes=minutes<10?'0'+minutes:minutes;
    seconds=seconds<10?'0'+seconds:seconds;
    const time24=hours+':'+minutes+':'+seconds;
    const time12=hours+':'+minutes+':'+seconds+' '+ampm;
    console.log("24-hour format "+time24);
    console.log("12-hour format "+time12);
}
function updateClock(){
    displayTime();
    setTimeout(updateClock,1000);
}
updateClock();