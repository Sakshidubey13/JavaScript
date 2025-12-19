const email_input = document.getElementById("email");
const password_input = document.getElementById("password");
const signin_button = document.getElementById("signin-button");

//dummy user
const currentUser = {
    email: "admin@gmail.com",
    password: "Admin@1234",
};



// to sign in user
const signInUser = () => {
    const emailPattern = /^[-!#-'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#-'*+\/0-9=?A-Z^_`a-z{|}~]+)*@([A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*|\[(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}\])$/;
    const strongPasswordRegex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[~`!@#$%^&*()--+={}\[\]|\:;"'<>,.?/_₹]).{8,16}$/;



    const email = email_input.value;
    const password = password_input.value;


    // console.log(emailPattern.test(email))
    // console.log(strongPasswordRegex.test(password))

    
    if (emailPattern.test(email) &&
        strongPasswordRegex.test(password)
    ) {

        if (email == currentUser.email && password == currentUser.password) {
            alert("Sign In Successfully !");
            signin_button.href = "quiz.html";
        } else {
            alert("Wrong email or password !");
        }
    }
    else {
        alert("Invalid credential !");
    }
};

signin_button.addEventListener("click", signInUser);
