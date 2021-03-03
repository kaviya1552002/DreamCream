function submitform() {
    var email = $('#email').val();
    var userpassword = $('#Userpassword').val();
    console.log(email, userpassword);

    if (email.toLowerCase() == "submitform" && userpassword.toLowerCase() == "submitform") {
        console.log('test');
        window.location.href = "homePage.html";
    } else {
        console.log('-------->>>', email, '------->>>', userpassword)
        console.log('email & Userpassword incorrect');
    }
}

