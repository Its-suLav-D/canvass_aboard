import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QueryFormDialogComponent } from '../query-form-dialog/query-form-dialog.component';

@Component({
  selector: 'canvass-query-sender',
  templateUrl: './query-sender.component.html',
  styleUrls: ['./query-sender.component.css'],
})
export class QuerySenderComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialog() {
    const dialogRef = this.dialog.open(QueryFormDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result is this: ${result}`);
    });
  }
}
