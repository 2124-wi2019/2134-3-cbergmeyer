window.addEventListener('load', function(){

    
    setInterval(function(){setTime()},1000);

    setURL();
    
    isSecure();

    createCookie();
})


function setTime(){
    let time = getCurrentTime();
    insertTime = document.getElementById('timeHolder');
    insertTime.innerHTML = time;
}

function setURL(){
    let setURL = window.location.href;
    insertURL = document.getElementById('currentURL');
    insertURL.innerHTML = setURL;
}

function isSecure(){
    let secure = '';
    if (window.location.protocol == 'https:'){
        secure = 'Yes';
    } else {
        secure = 'No';
    }
    
    
    insertSecure = document.getElementById('protocolSecure');
    insertSecure.innerHTML = secure;
}

function createCookie(){
    let expire = new Date();
    let twoWeeks = expire.getTime() + 1000*60*60*24*14;
    expire.setTime(twoWeeks);

    document.cookie = 'authorName=Craig Bergmeyer; max-age =1209600';  

}

//Add your code above this comment
//do not modify anything beneath this 
//comment
function getCurrentTime() {
    const currentDateTime = new Date();
    const currentMinute = (currentDateTime.getHours() < 10 ? '0' : '') + currentDateTime.getHours();
    const currentHour = (currentDateTime.getMinutes() < 10 ? '0' : '') + currentDateTime.getMinutes();
    const currentSecond = (currentDateTime.getSeconds() < 10? '0' : '') + currentDateTime.getSeconds();
    const currentTimeAsString = currentMinute + ":" + currentHour + ":" + currentSecond;
    return currentTimeAsString;
}
