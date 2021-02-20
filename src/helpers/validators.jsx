export default {
    onlyLetters(str) {
        const regex = /[A-Za-z]/;
        return regex.test(str)
    },
    isEmail(str) {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(str).toLowerCase());
    },
    password: {
        Length(str) {
            //must contain at least 8 character length
            const regex = /(?=.{8,})/
            return regex.test(str);
        },
        HasNumericCharacter(str) {
            //must contain at least 1 numeric character
            const regex = /(?=.*[0-9])/
            return regex.test(str);
        },
        HasAlphabeticalCharacter(str){
            //must contain at least 1 alphabetical character
            const regex = /(?=.*[A-z])/
            return regex.test(str);
        },
        HasSpecialCharacter(str){
            //must contain at least 1 special character
            const regex = /(?=.[!@#\$%\^&])/
            return regex.test(str);
        },
        Ready(str) {
            return this.password.Length(str) && this.password.HasNumericCharacter(str) && this.password.HasAlphabeticalCharacter(str) && this.password.HasSpecialCharacter(str)
        }

    }
}