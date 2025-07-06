const form = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById('eventName').value.trim();
  const date = document.getElementById('eventDate').value;
  const description = document.getElementById('eventDescription').value.trim();

  // Basic validation
  if (!name || !date || !description) {
    alert("Please fill in all fields.");
    return;
  }

  // Create event card
  const eventCard = document.createElement('div');
  eventCard.classList.add('event-card');
  eventCard.innerHTML = `
    <h3>${name}</h3>
    <p><strong>Date:</strong> ${date}</p>
    <p>${description}</p>
  `;

  // Add to event list
  eventList.appendChild(eventCard);

  // Clear form
  form.reset();
});
