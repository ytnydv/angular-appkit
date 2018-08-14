import { FormControl, AbstractControl } from '@angular/forms';

export interface ValidationResult {
    [key: string]: boolean;
}

export class PasswordValidator {

    public static strong(control: FormControl): ValidationResult {
        const hasNumber = /\d/.test(control.value);
        const hasUpper = /[A-Z]/.test(control.value);
        const hasLower = /[a-z]/.test(control.value);
        console.log('Num, Upp, Low', hasNumber, hasUpper, hasLower);
        const valid = hasNumber && hasUpper && hasLower;
        if (!valid) {
          /*   // return what´s not valid */
            console.log();
            return { numNo: hasNumber , upperNo: hasUpper , lowerNo: hasLower };
        }
        return null;
    }
    public static numberpattern(pattern: any) {
        const regex = new RegExp(pattern);
        return (control: FormControl) => {
            const hasNumber = regex.test(control.value);
            console.log('Number>>', hasNumber, control.value, pattern);
            const valid = hasNumber;
                if (!valid) {
                /*   // return what´s not valid */
                    console.log();
                    return { numberNo: hasNumber};
                }
                return null;
          };
    }
}
