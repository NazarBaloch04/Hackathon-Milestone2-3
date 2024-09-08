// Get form and resume container elements
var form = document.getElementById('resume-form');
var generatedResume = document.getElementById('generated-resume');
// const profilePicture = document.getElementById('profilePicture') as HTMLElement;
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var home = document.getElementById('home').value;
    var sex = document.getElementById('sex').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value.split(',');
    var workExperience = document.getElementById('work-experience').value;
    // Generate the resume dynamically
    generatedResume.innerHTML = "\n  <section>\n      <h1>".concat(name, "</h1>\n      <p>Email: ").concat(email, "</p>\n      <p>Phone: ").concat(phone, "</p>\n      <p>Home Address: ").concat(home, "</p>\n      <p>Sex: ").concat(sex, "</p>\n    </section>\n    <section>\n      <h2>Education</h2>\n      <p>").concat(education, "</p>\n    </section>\n    <section>\n      <h2>Skills</h2>\n      <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</ul>\n    </section>\n    <section>\n      <h2>Work Experience</h2>\n      <p>").concat(workExperience, "</p>\n    </section>\n  ");
});
