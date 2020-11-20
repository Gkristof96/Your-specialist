export default function validateContact(values) {
    let errors = {};
  
    if (!values.email) {
      errors.email = 'Kötelező kitölteni';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Rossz formátum';
    }

    if(!values.message) {
      errors.message = 'Kötelező kitölteni'
    }

    if(!values.name) {
      errors.name ='Kötelező kitölteni';
    }
    
    return errors;
  }