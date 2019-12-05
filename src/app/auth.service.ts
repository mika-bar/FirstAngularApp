export class AuthService {
    loggedIn = false;
    userCheckedRemember = false;

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                if (this.userCheckedRemember || this.loggedIn) {
                    resolve(true);
                }
                else {
                    setTimeout(() => {
                        resolve(this.loggedIn);
                    }, 1);
                }
            }
        );
        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    loadContent() {
        this.userCheckedRemember = true;
    }

}