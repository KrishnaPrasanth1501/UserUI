$("form[name='eniqueryform1']").validate({
    rules: {
      Name: "required",
      email: {
        required: true,
        email: true
      },
      company: "required",
      jobtitle: "required",
      phone: {
        required: true,
        digits: true,
        minlength: 10,
        maxlength: 10
      },
      country: "required",
      product: "required"
    },
    messages: {
      Name: {
        required: "Name and Surname Required."
      },
      email: "Please enter a valid email address",
      jobtitle: "Please Enter Your Job Title",
      phone: {
        required: "Please enter phone number",
        digits: "Please enter valid phone number",
        minlength: "Phone number field accept only 10 digits",
        maxlength: "Phone number field accept only 10 digits"
      },
      company: "Company Name is Required",
      country: "Country Name is Required",
      product: {
        required: "Please Select Product"
      }
  
    }
  })