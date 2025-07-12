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

    serviceID = "service_rgnnj1h";
    templateID = "template_rj0evsq";
    emailjs.send(serviceID , templateID , params)
    .then(res => {
        name = "";
        email = "";
        message = "";
        
        console.log(res);
        alert("Email Sent successfully wait for response");
    })
    .catch((err) => console.log("Error : ",err))

}