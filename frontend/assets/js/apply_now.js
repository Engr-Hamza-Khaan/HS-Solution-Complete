document.addEventListener('DOMContentLoaded', function () {
  const submitBtn = document.querySelector('.btn.btn-primary');

  if (submitBtn) {
    submitBtn.addEventListener('click', async function () {
      const firstName = document.getElementById('inputFirstName')?.value;
      const lastName = document.getElementById('inputLastName')?.value;
      const email = document.getElementById('inputEmail')?.value;
      const internship = document.getElementById('internshipSelect')?.value;
      const semester = document.getElementById('semesterSelect')?.value;
      const university = document.getElementById('inputUni')?.value;
      const message = document.getElementById('message')?.value;

      const payload = {
        firstName,
        lastName,
        email,
        internship,
        semester,
        university,
        message
      };

      const token = localStorage.getItem("token"); // ✅ Retrieve token

      // ✅ Stop form submission if token is missing
      if (!token) {
        alert("Please sign in before applying.");
        window.location.href = "../../index.html";
        return;
      }

      try {
        const res = await fetch('http://localhost:5000/api/internships/apply', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // ✅ Attach token
          },
          body: JSON.stringify(payload)
        });

        const data = await res.json();

        if (res.ok) {
          alert('Application submitted successfully!');
        } else {
          alert('Error: ' + data.message);
        }
      } catch (err) {
        alert('Network error. Please try again.');
        console.error(err);
      }
    });
  } else {
    console.warn("Submit button not found");
  }
});
