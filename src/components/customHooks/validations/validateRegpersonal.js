export default function validate(values) {
    let errors = {};
  
    if (!values.email) {
      errors.email = 'Kötelező kitölteni';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Rossz formátum';
    }

    if(!values.firstname) {
      errors.firstname ='Kötelező kitölteni';
    }

    if(!values.lastname) {
        errors.lastname ='Kötelező kitölteni';
    }

    if(!values.password) {
        errors.password ='Kötelező kitölteni';
    }

    if(!values.cpassword) {
        errors.cpassword ='Kötelező kitölteni';
    }
    else if(values.password !== values.cpassword) {
        errors.cpassword ='A két jelszó nem egyezik';
    }

    if(!values.firstname) {
        errors.name ='Kötelező kitölteni';
    }

    if(!values.firstname) {
        errors.name ='Kötelező kitölteni';
    }

    if(!values.firstname) {
        errors.name ='Kötelező kitölteni';
    }
    
    return errors;
  }