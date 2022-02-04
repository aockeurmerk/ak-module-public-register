export function printWindow(elementId: string): void {
  const printContent = document.getElementById(elementId);
  if (!printContent) {
  }
  const windowUrl = 'about:blank';
  const uniqueName = new Date();
  const windowName = 'Print' + uniqueName.getTime();
  const printWindow = window.open(windowUrl, windowName, 'left=50,top=50,width=800,height=800');
  let html = '<html>';
  html +=
    '<style>body {font-family: Arial, Helvetica;}table{border-collapse: collapse;} table, th, td {border: 1px solid black;} th, td {padding: 5px;} .print-none {display: none} label {font-weight: bold}</style>';
  html += printContent?.innerHTML;

  html += '</html>';
  printWindow?.document.write(html);
  printWindow?.document.close();
  printWindow?.focus();
  printWindow?.print();
  printWindow?.close();
}
