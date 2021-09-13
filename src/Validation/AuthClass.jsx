class Auth {
    constructor() {
        this.authenicated = false;
    }
    //Need to check before cart checkout

    login(username, usertype, userID) {
        //API validation
        console.log(username);
        console.log(usertype);
        console.log(userID);
        localStorage.setItem('flag', true);
        localStorage.setItem('username', username);
        localStorage.setItem('usertype', usertype);
        localStorage.setItem('userId', userID);

        this.authenicated = true;
    }

    logout(cb) {
        //Clear the Flag upon pressing log
        localStorage.setItem('flag', false);
        this.authenticated = false;
    }

    isAuthenticated() {
        const flag = localStorage.getItem('flag')
        console.log("Localstorage Values - " + flag);
        if(flag === 'true'){
            return true;
        } else {
            return false;
        }
    }
}
export default new Auth();