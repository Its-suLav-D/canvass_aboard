import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QueryFormDialogComponent } from '../query-form-dialog/query-form-dialog.component';

@Component({
  selector: 'canvass-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css'],
})
export class HeadersComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(QueryFormDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result is this: ${result}`);
    });
  }
}
