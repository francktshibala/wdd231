 // Set timestamp on page load
 document.getElementById('timestamp').value = new Date().toISOString();

 // Modal functions
 function openModal(modalId) {
     document.getElementById(modalId).classList.remove('hidden');
 }

 function closeModal(modalId) {
     document.getElementById(modalId).classList.add('hidden');
 }