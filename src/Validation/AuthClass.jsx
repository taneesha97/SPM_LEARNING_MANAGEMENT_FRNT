import {useDispatch} from "react-redux";
import {loggedUser} from "../Action/Users";

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
        localStorage.setItem('email', values.email);
        localStorage.setItem('userid', values.id);
        localStorage.setItem('usertype', values.type);
        //localStorage.setItem('user', values);
        localStorage.setItem('user', JSON.stringify(values));

        this.authenicated = true;
    }

    logout() {
        //Clear the Flag upon pressing log
        localStorage.setItem('flag', false);
        localStorage.setItem('username', "");
        localStorage.setItem('usertype', "");
        localStorage.setItem('email', "");
        localStorage.setItem('user', "");
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