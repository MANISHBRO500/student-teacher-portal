// Display sample graphs
const ctx1 = document.getElementById('marksGraph');
if (ctx1) {
  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['Math', 'Science', 'English', 'Social', 'Hindi'],
      datasets: [{
        label: 'Marks Obtained',
        data: [80, 90, 70, 85, 75]
      }]
    }
  });
}

const ctx2 = document.getElementById('yearGraph');
if (ctx2) {
  new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [{
        label: 'Average Marks',
        data: [78,82,85,80,88,90,87,89,84,86,88,91]
      }]
    }
  });
}

// Download PDF
document.getElementById('downloadPDF').addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text('Student Report', 10, 10);
  doc.text('Name: Demo Student', 10, 20);
  doc.save('Student_Report.pdf');
});
