setInterval(() => {
    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let seconds = document.getElementById("seconds");
    let currentTime = new Date();
    let hrs = currentTime.getHours();
    let min = currentTime.getMinutes();
    let sec = currentTime.getSeconds();
    let degreehrs = 30 * hrs + 0.5 * min;
    let degreemin = 6 * min;
    let degreesec = 6 * sec;
    hour.style.transform = `rotate(${degreehrs}deg)`;
    minute.style.transform = `rotate(${degreemin}deg)`;
    seconds.style.transform = `rotate(${degreesec}deg)`;
}, 1000);