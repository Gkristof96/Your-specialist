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
    // bemutatkozás megléte
    if(!values.bio) {
        errors.bio = 'Kötelező kitölteni';
    }
    // telefonszám megléte
    if(!values.tel) {
        errors.tel ='Kötelező kitölteni';
    }
    // város megléte
    if(!values.city) {
        errors.city ='Kötelező kitölteni';
    }
    
    return errors;
}