export default function validate(values) {
    let errors = {};
  
    // email esetén a formátumot is megvizsgáljuk
    if (!values.email) {
      errors.email = 'Kötelező kitölteni';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Rossz formátum';
    }
    // message megléte
    if(!values.message) {
      errors.message = 'Kötelező kitölteni'
    }
    // name megléte
    if(!values.name) {
      errors.name ='Kötelező kitölteni';
    }
    
    return errors;
}