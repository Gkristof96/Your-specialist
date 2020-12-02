export default function validate(values) {
    let errors = {};
    // szakma megléte
    if (!values.profession) {
      errors.profession = 'Kötelező kitölteni';
    }
    
    return errors;
}