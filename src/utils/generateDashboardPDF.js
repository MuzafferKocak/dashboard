import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generateDashboardPDF = async () => {
  const dashboard = document.getElementById("dashboard-root");
  if (!dashboard) return alert("Dashboard element not found!");

  const canvas = await html2canvas(dashboard, {
    scale: 3,
    useCORS: true,
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.setFontSize(18);
  pdf.text("MeK Dashboard Report", 15, 15);

  const date = new Date().toLocaleDateString();
  pdf.setFontSize(10);
  pdf.text(`Generated on: ${date}`, pdfWidth - 60, 15);

  pdf.addImage(imgData, "PNG", 0, 20, pdfWidth, pdfHeight);
  

  pdf.save("full-dashboard.pdf");
};
