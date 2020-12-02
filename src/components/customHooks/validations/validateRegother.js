export default function validate(values) {
    let errors = {};
    // inputok meglétének ellenőrzése
    if(!values.tel) {
        errors.tel ='Kötelező kitölteni';
    }
    if(!values.profession) {
        errors.profession ='Kötelező kitölteni';
    }
    if(!values.city) {
        errors.city ='Kötelező kitölteni';
    }
    
    return errors;
}