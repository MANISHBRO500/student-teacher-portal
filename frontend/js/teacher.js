// Search student mock
document.getElementById('searchBtn').addEventListener('click', () => {
  const name = document.getElementById('studentSearch').value;
  document.getElementById('studentInfo').innerHTML = `<p>Showing data for: <b>${name}</b></p>`;
});

// Save remark
document.getElementById('saveRemark').addEventListener('click', () => {
  const remark = document.getElementById('remarkText').value;
  alert(`Remark saved: "${remark}"`);
  document.getElementById('remarkText').value = '';
});

// Download all PDF
document.getElementById('downloadAll').addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text('All Students Data', 10, 10);
  doc.save('All_Student_Data.pdf');
});
