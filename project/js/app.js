document.addEventListener('DOMContentLoaded', () => {
  const startBookingBtn = document.getElementById('startBooking');
  
  startBookingBtn.addEventListener('click', () => {
    document.getElementById('contentArea').innerHTML = `
      <h3>Booking Form</h3>
      <form id="bookingForm">
        <label for="facility">Facility:</label>
        <input type="text" id="facility" required>

        <label for="date">Date:</label>
        <input type="date" id="date" required>

        <button type="submit">Submit Booking</button>
      </form>
    `;
    
    document.getElementById('bookingForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const facility = document.getElementById('facility').value;
      const date = document.getElementById('date').value;

      let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
      bookings.push({ facility, date });
      localStorage.setItem('bookings', JSON.stringify(bookings));

      alert(`Booking confirmed for ${facility} on ${date}`);
      document.getElementById('contentArea').innerHTML = '';
    });
  });
});



