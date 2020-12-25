// form.js
const form = document.forms[0];
    
form.addEventListener("submit", function(event) {
  event.preventDefault();
  new FormData(form);
});

form.addEventListener("formdata", event => {
  const data = event.formData;

  // get the data
  const entries = [...data.entries()];
  console.log(entries);

  const values = [...data.values()];
  console.log(values);
});
//валидация
function validate_form ( )
{
valid = true;
     if (document.booking_form.dateTo.value == 0 || document.booking_form.dateFrom.value == 0){
        swal ("Oops" , "Please select the desired dates." ,  "error")
            valid = false;
    }
    else if (document.booking_form.dateTo.value < document.booking_form.dateFrom.value)
    {
        swal ("Oops" , "Please select the correct CHECK IN or CHECK OUT date" ,  "error")      
            valid = false;
    }
    else{ 
        swal({
        title: "Good job!",
        text: "Hurray! Let's move on to the next step. \n Wait for the page to load.",
        icon: "success",
        timer: 1700,
        showConfirmButton: false
        });
            valid = true;
    }
    return valid;
}