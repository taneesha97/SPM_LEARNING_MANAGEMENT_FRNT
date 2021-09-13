class Auth {
    constructor() {
        this.authenicated = false;
    }
    //Need to check before cart checkout

    login(values) {
        //API validation
        console.log(values.type);
        console.log(values.username);
        console.log(values);
        localStorage.setItem('flag', true);
        localStorage.setItem('username', values.username);
        localStorage.setItem('usertype', values.type);
        //localStorage.setItem('user', values);
        localStorage.setItem('user', JSON.stringify(values));

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