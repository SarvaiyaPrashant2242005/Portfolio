function sendMail(){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let params = {
        name : name,
        email : email,
        messege : message
    };

    serviceID = "service_ptqnxkw";
    templateID = "template_1j5d2xi";
    emailjs.send(serviceID , templateID , params)
    .then(res => {
document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("message").value = "";

        
        console.log(res);
        alert("Email Sent successfully wait for response");
    })
    .catch((err) => console.log("Error : ",err))

}