import decode from 'jwt-decode';

class AuthService {
    getProfile() {
        return decode(this.getToken());
    }

    loggedIn() {
        const token = this.getToken();
        return token && !this.isTokenExpired(token) ? true : false;
    }

    isTokenExpired() {
        const decoded = decode(token);
        if (decoded.exp < Date.now() /1000 ) {
            localStorage.removeItem('id_token');
            return true;
        }
        return false;
    }

    getToken() {
        return localStorage.getItem('id_token');
    }

    login(idToken) {
        localStorage.setItem('id_token', idToken);
        //DO WE NEED TO CHANGE THE PATH HERE IN ORDER TO SHOW THE USER THE DASHBOARD AFTER LOGGING IN?
        window.location.assign('/')
    }

    logout() {
        localStorage.removeItem('id_token');
        //DO WE WANT TO NAVIGATE THEM BACK TO THE LOGIN PAGE HERE?
        window.location.reload();
    }
}

export default new AuthService();
