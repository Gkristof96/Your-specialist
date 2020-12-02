export default function validate(values) {
    let errors = {};
  
    // jelszó megléte és helyes hossz
    if(!values.old_password) {
        errors.old_password ='Kötelező kitölteni';
    }
    // jelszó ellenőrzése
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