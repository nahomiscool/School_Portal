export function output() {
    let user_username_information = document.querySelector('.ID-name');
    let user_password_information = document.querySelector('.ID-password');
    const login_info = {
        username: user_username_information.value,
        password: user_password_information.value
    };
    console.log(login_info.username);  // Log the username to the console
}
