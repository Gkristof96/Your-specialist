export default function validate(values) {
    let errors = {};
    
    if(!values.checkbox) {
      errors.checkbox ='Kérjük fogadja el a felhasználási feltételeket!';
    }
    
    return errors;}