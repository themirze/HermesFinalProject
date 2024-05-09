document.getElementById('randomBtn').addEventListener('click', function() {
    fetchFact('http://localhost:3000/random');
    window.history.pushState({ path: '/random' }, '', '/random');
});

document.getElementById('dailyBtn').addEventListener('click', function() {
    fetchFact('http://localhost:3000/daily');
    window.history.pushState({ path: '/daily' }, '', '/daily');
});

function fetchFact(path) {
    fetch(path)
        .then(response => response.json())
        .then(data => {
            document.getElementById('fact').textContent = data.useless_fact;
        })
        .catch(error => {
            console.error('Error fetching fact:', error);
            document.getElementById('fact').textContent = 'Failed to fetch fact.';
        });
}
