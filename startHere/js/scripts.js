const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
<p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Proxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the ${myInfo.get('location')} Temple</p>
<p> Your phone number is ${myInfo.get('phone')}</p>
<p> Your email is ${myInfo.get('email')}</p>
`