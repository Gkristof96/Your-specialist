export default function validate(values) {
    let errors = {};
  
    // city megléte
    if(!values.city) {
        errors.city ='Kötelező kitölteni';
    }
    // profession megléte
    if(!values.profession) {
        errors.profession ='Kötelező kitölteni';
    }
    
    return errors;
}