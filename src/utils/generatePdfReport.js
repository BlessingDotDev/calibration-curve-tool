import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generatePdfReport = async ({
  chartCanvas,
  data,
  samples,
  slope,
  intercept,
  r2,
  xUnit,
  yUnit,
}) => {
  const pdf = new jsPDF("p", "mm", "a4");

  // ---- PAGE 1: Title + Regression ----
  pdf.setFontSize(22);
  pdf.text("Calibration Report", 105, 20, { align: "center" });

  pdf.setFontSize(12);
  pdf.text(`Equation: y = ${slope.toFixed(4)}x + ${intercept.toFixed(4)}`, 14, 35);
  pdf.text(`R²: ${r2.toFixed(4)}`, 14, 43);
  pdf.text(`X Unit: ${xUnit}`, 14, 51);
  pdf.text(`Y Unit: ${yUnit}`, 14, 59);

  // ---- Calibration table ----
  pdf.setFontSize(14);
  pdf.text("Calibration Data:", 14, 70);
  pdf.setFontSize(11);

  const startY = 78;
  const rowHeight = 6;
  pdf.text("No.", 14, startY);
  pdf.text(xUnit, 30, startY);
  pdf.text(yUnit, 80, startY);

  data.forEach((row, i) => {
    const yPos = startY + rowHeight * (i + 1);
    pdf.text(`${i + 1}`, 14, yPos);
    pdf.text(`${row.x}`, 30, yPos);
    pdf.text(`${row.y}`, 80, yPos);
  });

  // ---- PAGE 2: Unknown samples + Chart ----
  pdf.addPage();

  pdf.setFontSize(16);
  pdf.text("Unknown Samples", 14, 20);
  pdf.setFontSize(12);

  const unknownStartY = 30;
  pdf.text("No.", 14, unknownStartY);
  pdf.text(yUnit, 30, unknownStartY);
  pdf.text(xUnit, 80, unknownStartY);

  samples.forEach((s, i) => {
    const yPos = unknownStartY + rowHeight * (i + 1);
    const x =
      s.y === "" || slope === 0
        ? "-"
        : ((Number(s.y) - intercept) / slope).toFixed(4);

    pdf.text(`${i + 1}`, 14, yPos);
    pdf.text(`${s.y}`, 30, yPos);
    pdf.text(`${x}`, 80, yPos);
  });

  // ---- Chart ----
  if (chartCanvas) {
    const canvasImg = await html2canvas(chartCanvas, { scale: 2 });
    const imgData = canvasImg.toDataURL("image/png");

    // Fit chart nicely within page
    const imgWidth = 180;
    const imgHeight = (canvasImg.height * imgWidth) / canvasImg.width;
    pdf.addPage();
    pdf.setFontSize(16);
    pdf.text("Calibration Curve", 105, 20, { align: "center" });
    pdf.addImage(imgData, "PNG", 15, 30, imgWidth, imgHeight);
  }

  pdf.save("calibration_report.pdf");
};
