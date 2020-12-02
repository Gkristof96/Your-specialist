export default function validate(values) {
    let errors = {};
    
    // ászf elfogadásának ellenőrzése
    if(!values.checkbox) {
      errors.checkbox ='Kérjük fogadja el a felhasználási feltételeket!';
    }
    
    return errors;
}