
class EMAILS {
    constructor(email) {
        if (typeof email !== 'string' || email == '') {
            throw new TypeError('regExp wants a email')
        } else {
            this.email = email;
        }
    }

    length() {
        return this.email.length
    }
    isValid() {
        const regEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regEXP.test(this.email);
    }
}

class PASSWORDS {
    constructor(password) {
        if (typeof password !== 'string' || password == '') {
            throw new TypeError('regExp wants a password')
        } else {
            this.password = password;
        }

    }

    hasUpperLowerNumeber() {
        const lowerCaseLetters = /[a-z]/g,
            capitalCaseLetters = /[A-Z]/g,
            numberCaseLetters = /[0-9]/g

        if (capitalCaseLetters.test(this.password)) {
            if (lowerCaseLetters.test(this.password)) {
                if (numberCaseLetters.test(this.password)) {

                    return true;
                }
                else {
                    return JSON.stringify({
                        error: "A number is needed"
                    })
                }
            }
            else {
                return JSON.stringify({
                    error: 'A Lower letter is needed'
                })
            }
        }
        else {
            return JSON.stringify({
                error: 'A Capital letter is needed'
            })
        }
    }

    isValidLenght(length = 6) {
        if (this.password.length >= length) {
            return true;
        } else {
            return false;
        }
    }

}


class URLS {
    constructor(url) {
        if (typeof url !== 'string' || url == '') {
            throw new TypeError('regExp wants a url')
        } else {
            this.url = url;
        }
    }

    isValidUrl() {
        var exp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        var regEXP  =  new RegExp(exp); 
        return this.url.match(regEXP) ? true  : false;
    }
}


module.exports = {
    EMAILS,
    PASSWORDS,
    URLS
}


