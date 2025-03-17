document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const studentId = document.getElementById('studentId').value;
  fetch(`/api/results/${studentId}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('result').innerHTML = `
                <p>الاسم: ${data.name}</p>
                <p>النتيجة: ${data.score}</p>
            `;
    })
    .catch(error => {
      document.getElementById('result').innerHTML = `<p>النتيجة غير موجودة</p>`;
    });
});