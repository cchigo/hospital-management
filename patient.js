//adds new patient
$("#add-new").submit('click', function(e){ 
    e.preventDefault();  
   let  name = $('#name').val();
   let age = $('#age').val();
   let  phone = $('#phone').val();
   let   gender = $('#gender').val();
   let  checkIn = $('#check-in').val();
   let   allergies = $('#allergies').val();
   let    diagnosis = $('#diagnosis').val();
   let    doctorIncharge = $('#dic').val();
      let  details = JSON.stringify( {
          name: name,
          age: age,
          phone: phone,
          gender: gender,
          checkIn: checkIn,
          allergies: allergies,
          diagnosis: diagnosis,
          dr: doctorIncharge
      });
    
    $.ajax({
        type: 'POST',
        url: "http://localhost:3000/patient/",
        data :details,
        contentType: 'application/json',
        dataType: 'json',
        success: function(data){
            alert("ADDED!");
        }
    })
    
    });

    // date picker
    $(".date").datepicker();
  
