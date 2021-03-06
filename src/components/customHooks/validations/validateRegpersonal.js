export default function validate(values) {
    let errors = {};
  
    // email meglétének és a helyes formátum ellenőrzése
    if (!values.email) {
      errors.email = 'Kötelező kitölteni';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Rossz formátum';
    }
    // keresztnév megléte és helyes hossz
    if(!values.firstname) {
      errors.firstname ='Kötelező kitölteni';
    }
    else if (values.firstname.length > 2) {
        errors.firstname = 'Legalább 3 karakteres legyen';
    }
    // vezetéknév megléte és helyes hossz
    if(!values.lastname) {
        errors.lastname ='Kötelező kitölteni';
    }
    else if (values.lastname.length > 2) {
        errors.lastname = 'Legalább 3 karakteres legyen';
    }
    // jelszó megléte és helyes hossz
    if(!values.password) {
        errors.password ='Kötelező kitölteni';
    }
    else if(values.password.length < 8) {
        errors.password = 'Legalább 8 karakteres jelszó szükséges';
    }
    else if (values.password.length > 32) {
        errors.password = 'Maximum 32 karakteres jelszó lehetséges';
    }
    // input megléte és egyezés az eredeti jelszóval
    if(!values.cpassword) {
        errors.cpassword ='Kötelező kitölteni';
    }
    else if(values.password !== values.cpassword) {
        errors.cpassword ='A két jelszó nem egyezik';
    }
    
    return errors;
}