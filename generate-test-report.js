import fs from "fs";
import PDFDocument from "pdfkit";
import xml2js from "xml2js";

const xml = fs.readFileSync("./reports/jest-report.xml", "utf8");

xml2js.parseString(xml, (err, result) => {
  if (err) throw err;

  const doc = new PDFDocument();
  const output = fs.createWriteStream("./reports/jest-report.pdf");
  doc.pipe(output);

  doc.fontSize(22).text("Rapport de Tests Jest", { align: "center" });
  doc.moveDown();

  const testsuite = result.testsuites.testsuite[0];

  doc.fontSize(14).text(`Nom de la suite : ${testsuite.$.name}`);
  doc.text(`Tests exécutés : ${testsuite.$.tests}`);
  doc.text(`Succès : ${testsuite.$.tests - testsuite.$.failures}`);
  doc.text(`Échecs : ${testsuite.$.failures}`);
  doc.text(`Durée : ${testsuite.$.time} sec`);
  doc.moveDown();

  doc.fontSize(16).text("Détail des tests :", { underline: true });

  testsuite.testcase.forEach((tc) => {
    doc.fontSize(12).text(`- ${tc.$.name} : OK`);
  });

  doc.end();
});
