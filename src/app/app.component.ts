import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'adm-todo-list';

  printPage() {
    // Grab the content to print
    const printContents = document.getElementById('contentToPrint')?.innerHTML;

    // Create a new window for printing
    const printWindow = window.open('', '', 'height=600,width=800');

    // Write the content to the new window
    printWindow?.document.write('<html><head><title>Print</title>');
    printWindow?.document.write('</head><body>');
    printWindow?.document.write(printContents || ''); // if content exists, insert it
    printWindow?.document.write('</body></html>');

    // Close the document and trigger the print dialog
    printWindow?.document.close();
    printWindow?.focus();
    printWindow?.print();
    printWindow?.close();
  }
  // constructor() {
  //   setTimeout(() => {
  //     this.title = "Changed Title";
  //   }, 5000);
  // }
}
