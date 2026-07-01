fetch('data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        loadStats(data.stats);
        loadThreats(data.threats);
        setupFilters(data.threats);
    })
    .catch(function(error){
         console.log('Error:',error);
    });
function loadStats(stats) {
    document.getElementById('threats-blocked').textContent = stats.threatsBlocked;
    document.getElementById('active-users').textContent = stats.activeUsers;
    document.getElementById('scans-today').textContent = stats.scansToday;
}
function loadThreats(threats) {
    const tbody = document.getElementById('threats-table');
    tbody.innerHTML = '';
    threats.forEach(function(threat) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${threat.name}</td>
            <td>${threat.type}</td>
            <td class="risk-${threat.risk.toLowerCase()}">${threat.risk}</td>
            <td>${threat.status}</td>
        `;
        tbody.appendChild(row);
    });
}
function setupFilters(threats) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            buttons.forEach(function(b) {
                b.classList.remove('active');
            });
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            if (filter === 'All') {
                loadThreats(threats);
            } else {
                const filtered = threats.filter(function(t) {
                    return t.risk === filter;
                });
                loadThreats(filtered);
            }
        });
    });
}