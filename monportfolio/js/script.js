var map = L.map('localise').setView([-1.6777216, 29.2159488], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-1.6777216, 29.2159488]).addTo(map);