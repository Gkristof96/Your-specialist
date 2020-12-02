export default function validate(values) {
    let errors = {};
    // adatok meglétének ellenőrzése
    if (!values.email) {
      errors.email = 'Kötelező kitölteni';
    }
    if(!values.password) {
      errors.password = 'Kötelező kitölteni'
    }
    
    return errors;
}