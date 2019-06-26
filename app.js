let myPatients = [];
     $(document).ready(function(){
      //  to display form with all patient info
                     $.ajax({
                type: 'GET',
                url: "http://localhost:3000/patient",
                contentType:'application/json',
                dataType:'json',
                success: function (data) {
                    myPatients = data
                    $.each(data, function (key, value) {
                        $('#patient-table').append(`
                        <tr>
	                        <td>${value.name}</td>
	                        <td>${value.age}</td> 
                            <td>${value.phone}</td>
                            <td>${value.gender}</td>
                            <td>${value.checkIn}</td>
                            <td>${value.allergies}</td>
                            <td>${value.diagnosis}</td>
                            <td>${value.dr}</td>
                            <td><button class=${value.id}>Edit</button></td>
                            <td><button id=${value.id}>Delete</button></td>
                            <td><button title=${value.id}>View</button></td>
                        </tr>
                        `);
                    })
                    deletePatient();
                    editPatient();
                    viewSinglePatient();
                },
             });
     })
//displays information of a patient
     function viewSinglePatient(){
        myPatients.forEach(patient =>{
     $(`[title=${patient.id}]`).click(() =>{
       $.ajax({
                type: 'GET',
                url: "http://localhost:3000/patient/"+`${patient.id}`,
                contentType:'application/json',
                dataType:'json',
                success: function (data) {
                    $('#view-single-patient').html(`
                    <div>
                    <label class="info">Patient Name: </label>
                    <span>${data.name}</span>
                  </div> 
                  <div>
                    <label class="info" >Patient Age: </label>
                    <span>${data.age}</span>
                  </div> 
                  <div>
                    <label class="info">Patient phone number: </label>
                    <span>${data.phone}</span>
                  </div> 
                  <div>
                    <label class="info">Patient Gender: </label>
                    <span>${data.gender}</span>
                  </div> 
                  <div>
                    <label class="info">Patient Check in time: </label>
                    <span>${data.checkIn}</span>
                  </div> 
                  <div>
                    <label class="info">Patient Allergies: </label>
                    <span>${data.allergies}</span>
                  </div> 
                  <div>
                    <label class="info">Patient Diagnosis: </label>
                    <span>${data.diagnosis}</span>
                  </div> 
                  <div>
                    <label class="info" >Patient Doctor: </label>
                    <span>${data.dr}</span>
                  </div> 
                    `)
                    //alert(`Are you sure you want to delete ${patient.name}`)
                },
             });
            })
         })
     }

//deletes information based on the id of selected patients
     function deletePatient(){
         myPatients.forEach(patient =>{
            $(`#${patient.id}`).click(() => {
                $.ajax({
                type: 'DELETE',
                url: "http://localhost:3000/patient/"+`${patient.id}`,
                contentType:'application/json',
                dataType:'json',
                success: function (data) {
                    alert(`Are you sure you want to delete ${patient.name}`)
                },
             });
            })
         })
        
     }

     function editPatient(){
         myPatients.forEach(patient =>{
            $(`.${patient.id}`).click(() => {
                $("#edit-name").val(patient.name);
                $("#edit-diagnosis").val(patient.diagnosis);
                $("#edit-allergies").val(patient.allergies);
                 $("#edit-check-in").val(patient.checkIn);
                 $("#edit-gender").val(patient.gender);
                 $("#edit-phone").val(patient.phone);
                  $("#edit-age").val(patient.age);
                  $("#edit-dic").val(patient.dr);
                $('.editform').toggleClass('showform')
            editMypatient(patient.id);
            })
         })
        
     }

     function editMypatient(id){
        $('#edit-form').submit((e) => {
        e.preventDefault();
       const name =  $("#edit-name").val();
        const diagnosis =  $("#edit-diagnosis").val();
        const allergies =   $("#edit-allergies").val();
                const checkIn = $("#edit-check-in").val();
               const gender =  $("#edit-gender").val();
                const phone =  $("#edit-phone").val();
                 const age = $("#edit-age").val();
                 const dr =  $("#edit-dic").val();
        let info = JSON.stringify( {
                name: name,
                age: age,
                phone: phone,
                gender: gender,
                checkIn: checkIn,
                allergies: allergies,
                diagnosis: diagnosis,
                dr: dr
    
            });
                     $.ajax({
                type: 'PUT',
                url: "http://localhost:3000/patient/"+`${id}`,
                contentType:'application/json',
                dataType:'json',
                data: info,
                success: function (data) {
                    alert(`Edit successfull`)
                },
             });

     })

//             $("container").hide();
        //    $("#patient-table").hide();

//    $("#patient-checkin").click(function(){
//        $("#form-box").toggle();
//     })

// $("#all-patients").click(function(){
//         $("#patient-table").toggle();




     }
    
// //       $("#form-box").hide();
// //    $("#patient-table").hide();

//  $(document).ready(function(){

//     $("#form-box").hide();
//    $("#patient-table").hide();

//    $("#patient-checkin").click(function(){
//        $("#form-box").toggle();
//     })
// $("#patient-table").hide();
// $("#all-patients").click(function(){
//         $("#patient-table").toggle();
// });

// function addNewPatient(){
//     $('#form-box').submit(function(e){
//         e.preventDefault();
      
//                     let name = $('#name').val();
//                     let age = $('#age').val();
//                     let phone = $('#phone').val();
//                     let gender = $('#gender').val();
//                     let checkIn = $('#check-in').val();
//                     let allergies = $('#allergies').val(); 
//                     let diagnosis = $('#diagnosis').val();
//                     let dr = $('#dic').val();
//                     $('.checkInForm').toggleClass('showform')
//              $('#patient-table').append(patient_data);
//             let info = JSON.stringify( {
//                 name: name,
//                 age: age,
//                 phone: phone,
//                 gender: gender,
//                 checkIn: checkIn,
//                 allergies: allergies,
//                 diagnosis: diagnosis,
//                 dr: dr
//             });

//                 // console.log(info)
//             $.ajax({
//                 type: 'POST',
//                 url: "http://localhost:3000/patient",
//                 contentType:'application/json',
//                 dataType:'json',
//                 data: info,
//                 success: function (data) {
//           console.log("check in successful")
//                 },
//     }
//     )
//  })
// }

 
// 

// $('#form-box').submit(function (e) {
//             e.preventDefault();
//             let name = $('#name').val();
//             let age = $('#age').val();
//             let phone = $('#phone').val();
//             let gender = $('#gender').val();
//             let checkIn = $('#check-in').val();
//             let allergies = $('#allergies').val(); 
//             let diagnosis = $('#diagnosis').val();
//             let doctorIncharge = $('#dic').val();
    
    
    // //sets
    //         let info = JSON.stringify( {
    //             name: name,
    //             age: age,
    //             phone: phone,
    //             gender: gender,
    //             checkIn: checkIn,
    //             allergies: allergies,
    //             diagnosis: diagnosis,
    //             doctorIncharge: doctorIncharge
    
            // });
            // console.log(info)
            // $.ajax({
            //     type: 'POST',
            //     url: "http://localhost:3000/patient",
            //     contentType:'application/json',
            //     dataType:'json',
            //     data: info,
            //     success: function (data) {
          
            //     },
            //  });
    
           
    
//             // $('.search').click(function () {
    
//             //     console.log("edited");
//             // });
//         });
//     });   
    
     
    // $.getJSON("http://localhost:3000/patient", function (data) {
    //     let patient_data = "";
    //     $.each(data, function (key, value) {
    //         patient_data += '<tr>';
    //         patient_data += '<td>' + value.name + '</td>';
    //         patient_data += '<td>' + value.age + '</td>';
    //         patient_data += '<td>' + value.phone + '</td>';
    //         patient_data += '<td>' + value.gender + '</td>';
    //         patient_data += '<td>' + value.checkIn + '</td>';
    //         patient_data += '<td>' + value.allergies + '</td>';
    //         patient_data += '<td>' + value.diagnosis + '</td>';
    //         patient_data += '<td>' + value.dr + '</td>';
    
    //      patient_data += '</tr>';
        // });
        // $('#patient-table').append(patient_data);
        
    
    // });
