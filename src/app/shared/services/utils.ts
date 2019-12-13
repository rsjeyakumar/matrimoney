export default class Utils {
    /* validate dob is 18years above or not */
    static validatedob(c) {
        const today = new Date();
        const birthDate = new Date(c.value);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age >= 18 ? null : {
            validatedob: {
                valid: false
            }
        };
    }

    /* validate if interger is positive or not */
    static validatePositive(c) {
        const n = Math.floor(Number(c.value));
        return n !== Infinity && String(n) === c.value && n >= 0 ? null : {
            validatePositive: {
                valid: false
            }
        };
    }

    /* Validate Number  */
    static validateNumber(c) {
        const numberExp: RegExp = /^[0-9]*$/;
        console.dir(c);
        return numberExp.test(c.value) ? null : {
            validateNumber: {
                valid: false
            }
        };

    }




}
