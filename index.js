const fullName = document.querySelector('.fullname')
const homeAddress = document.querySelector('.home-address')
const email = document.querySelector('.email')
const bio = document.querySelector('.bio')
const form = document.querySelector('form')
const submitBtn = document.querySelector('.button')
const gender = document.querySelector('.gender')
const employmentStatus = document.querySelector('.gender')
const formFeedback = document.querySelector('.formFeedback')

// form submission
submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
 

  if (fullName.value === '' || email.value === '' || employmentStatus.value === '') {
    formFeedback.innerHTML = "Please enter all required credentials";
    form.reset();
  } else {
    formFeedback.innerHTML = "Sending email...";
    fetch("https://formsubmit.co/ajax/join@zenohub.co.tz", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: fullName.value,
          Address: homeAddress.value,
          email: email.value,
          bio: bio.value,
        })
      })
      .then(response => response.json())
      .then(data => (formFeedback.innerHTML = data.message))
      .catch(error => (formFeedback.innerHTML = error.message))

    form.reset();
  }
})