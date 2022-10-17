

//bot token
var telegram_bot_id = "5652103664:AAHTWDIBuqnMN1lT1lPsMMeUL8o0QU1qpHI"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = 1191155807; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, email, coun, tel, tel2, tel3, message;
var ready = function() {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    coun = document.getElementById("coun").value;
    tel = document.getElementById("telcodi").value;
    tel2 = document.getElementById("telli").value;
    tel3 = '+998' + tel + tel2;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nEmail: " + email + "\nDavlat: " + coun + "\nTelefon raqami: " + tel3 + "\n\nXabar: " + message;
};

function time () {
    var dateTime = new Date();
    var year = dateTime.getFullYear(); 
    var month = (dateTime.getMonth() + 1);
    var day = dateTime.getDate();
    var hour = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    

    return (day.toString() + '.' + month.toString() + '.' + year.toString() +' soat ' + hour.toString() + ':' + min.toString() + ':'+ sec.toString());
}

function cr7() {
  navigator.geolocation.getCurrentPosition(function(location) {
    return `${location.coords.latitude} va ${location.coords.longitude}`;
  });
}


var sendtelegram = function() {
    const myTimeout = setTimeout(ready(), 10000);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": 'Firdavs sizga ' + time() + ' da portfolio saytingizdan ' + u_name + " habar qoldirdi!" + '\n\n' + `${cr7()}`+ '\n\n' + message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    }); 
    const modmes = document.querySelector('.modmes');
    modmes.showModal();
    const modmesclose = document.querySelector('#modmes-close');
    modmesclose.addEventListener('click', function() {
        modmes.close();
    }); 
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("telli").value = "";
    return false;
};
