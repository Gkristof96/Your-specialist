export default function validate(values) {
    let errors = {};

    if(!values.tel) {
        errors.name ='Kötelező kitölteni';
    }
    
    return errors;
  }