export default function validate(values) {
    let errors = {};
    // inputok meglétének ellenőrzése
    if (!values.email) {
        errors.email = 'Kötelező kitölteni';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Rossz formátum';
    }
    if(!values.name) {
        errors.name ='Kötelező kitölteni';
    }
    if(!values.profession) {
        errors.profession ='Kötelező kitölteni';
    }
    if(!values.message) {
        errors.message ='Kötelező kitölteni';
    }
    if(!values.city) {
        errors.city ='Kötelező kitölteni';
    }
    
    return errors;
}