document.getElementById('coach').addEventListener('change', function() {
    var coach = document.getElementById('coach').value;
    var dayInput = document.getElementById('day');
    var hourInput = document.getElementById('hour');
  
    // Reset the day and hour inputs
    dayInput.value = '';
    hourInput.value = '';
  
    // Disable all days and times initially
    var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    days.forEach(function(day) {
      dayInput.querySelector('option[value="' + day + '"]').disabled = true;
    });
  
    var times = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'];
    times.forEach(function(time) {
      hourInput.querySelector('option[value="' + time + '"]').disabled = true;
    });
  
    // Enable specific days and times based on the selected coach
    if (coach === 'coach1') { // Bob
      dayInput.querySelector('option[value="monday"]').disabled = false;
      dayInput.querySelector('option[value="saturday"]').disabled = false;
      dayInput.querySelector('option[value="sunday"]').disabled = false;
  
      times.forEach(function(time) {
        if (time >= '09:00' && time <= '21:00') {
          hourInput.querySelector('option[value="' + time + '"]').disabled = false;
        }
      });
    } else if (coach === 'coach2') { // Kate
      dayInput.querySelector('option[value="tuesday"]').disabled = false;
      dayInput.querySelector('option[value="saturday"]').disabled = false;
      dayInput.querySelector('option[value="sunday"]').disabled = false;
  
      times.forEach(function(time) {
        if (time >= '10:00' && time <= '18:00') {
          hourInput.querySelector('option[value="' + time + '"]').disabled = false;
        }
      });
    } else if (coach === 'coach3') { // Adam
      days.forEach(function(day) {
        dayInput.querySelector('option[value="' + day + '"]').disabled = false;
      });
  
      times.forEach(function(time) {
        if (time >= '12:00' && time <= '21:00') {
          hourInput.querySelector('option[value="' + time + '"]').disabled = false;
        }
      });
    }
  });
  