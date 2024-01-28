//Fetching course data from data.json file and dynamicly adds the "Courses" section  with relevant HTML elements
fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (courses) {
    const placeholder = document.querySelector("#courses");
    let out = ""; 

    for (let course of courses) { 
      out += `
        <div class="grid_container">
            <img src="${course.imageSrc}" alt="crs_covers" class="crs_covers">
            <div class="upper_text_in_box">
                <p class="course_name">${course.text1}</p>
                <p class="reg_over">${course.text2}</p>
            </div>
            <div class="bottom_text_in_box">
                <img src="${course.obj}" alt="arrow" class="arrow">
                <a href="" target="_blank" class="details_about_courses">${course.text3}</a>
            </div>                
        </div>
        `;
    }

    placeholder.innerHTML = out;
  });


