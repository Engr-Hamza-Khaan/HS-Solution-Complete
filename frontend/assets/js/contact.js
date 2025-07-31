

  document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.querySelector('.btn.btn-primary');

    if (submitBtn) {
      submitBtn.addEventListener('click', async function () {
        const firstName = document.getElementById('inputFirstName')?.value.trim();
        const lastName = document.getElementById('inputLastName')?.value.trim();
        const email = document.getElementById('inputEmail')?.value.trim();
        const message = document.getElementById('message')?.value.trim();

        // Simple validation
        if (!firstName || !lastName || !email || !message) {
          alert("All fields are required!");
          return;
        }

        const payload = { firstName, lastName, email, message };

        try {
          const res = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          });

          const data = await res.json();

          if (res.ok) {
            alert('Message sent successfully!');
            // Optionally clear form
            document.querySelector('form').reset();
          } else {
            alert('Error: ' + data.message);
          }
        } catch (err) {
          alert('Failed to send message. Try again later.');
          console.error(err);
        }
      });
    }
  });

