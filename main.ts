// Get form and resume container elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const generatedResume = document.getElementById('generated-resume') as HTMLElement;
// const profilePicture = document.getElementById('profilePicture') as HTMLElement;
// Handle form submission
form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  // Get form values

  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const home = (document.getElementById('home') as HTMLInputElement).value;
  const sex = (document.getElementById('sex') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
  const workExperience = (document.getElementById('work-experience') as HTMLInputElement).value;

  // Generate the resume dynamically
  generatedResume.innerHTML = `
  <section>
      <h1>${name}</h1>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Home Address: ${home}</p>
      <p>Sex: ${sex}</p>
    </section>
    <section>
      <h2>Education</h2>
      <p>${education}</p>
    </section>
    <section>
      <h2>Skills</h2>
      <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
    </section>
    <section>
      <h2>Work Experience</h2>
      <p>${workExperience}</p>
    </section>
  `;
});
