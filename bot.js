function type(message) {
    document.getElementsByClassName('chatmsg')[0].value = message;
    document.getElementsByClassName('sendbtn')[0].click();
}

function check() {
    if (document.getElementsByClassName('disconnectbtn')[0].innerText.substring(0, 3) === 'New') {
        document.getElementsByClassName('disconnectbtn')[0].click();
        return true;
    }

}
while (true) {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    await sleep(2000);
    if (document.getElementsByClassName('disconnectbtn')[0].innerText.substring(0, 3) === 'New') {
        document.getElementsByClassName('disconnectbtn')[0].click();
    }
    // message
    var a = "Heyo !!!!";
    type(a);
    if (check()) {
        continue;
    }
    await sleep(15000);
    a = 'wait i saw you !';
    type(a);
    if (check()) {
        continue;
    }
    await sleep(15000);
    // a = 'bc you look like that boom';
    // type(a);
    if (check()) {
        continue;
    }
    await sleep(15000);
    a = 'sry amm bot , ciao ';
    type(a);
    await sleep(1000000);







}
