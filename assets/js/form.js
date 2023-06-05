    const firstName = document.querySelector("#fullName");
    const midName = document.querySelector("#middleName");
    const lastName = document.querySelector("#lastName");
    const email = document.querySelector("#email");
    const email2 = document.querySelector("#mob");
    const stdId= document.querySelector("#studentId");
    const dob = document.querySelector("#dob");
    const address = document.querySelector("#streetAddress");
    const city = document.querySelector("#city");
    const country = document.querySelector("#country");
    const zip = document.querySelector("#zip");
    const state = document.querySelector("#state");
    const course = document.querySelector("#course1");
    const level = document.querySelector("#level1");
    const language = document.querySelector("#language1");
    const startDate = document.querySelector("#startDate1");
    const comment = document.querySelector("#comment");
    const btn=document.querySelector("#form");


    btn.addEventListener("submit", (e)=>{
        e.preventDefault();
        console.log("hello");


    let userInfo = {
      firstName: firstName.value.trim(),
      lastName: lastName.value.trim(), 
      midName: midName.value.trim(), 
      email: email.value.trim(),
      email2: email2.value.trim(),
      stdId: stdId.value.trim(), 
      zip: zip.value.trim(), 
      state: state.value.trim(), 
      country: country.value.trim(), 
      city: city.value.trim(), 
      address: address.value.trim(), 
      dob: dob.value.trim(), 
      level: level.value.trim(), 
      course: course.value.trim(), 
      language: language.value.trim(), 
      comment: comment.value.trim(),
      startDate: startDate.value.trim(),
      }
    
      localStorage.setItem("user", JSON.stringify(userInfo));
       window.location.replace("/userDetails.html");
})
