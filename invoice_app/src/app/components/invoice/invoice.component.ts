import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { ClientViewComponent } from '../client-view/client-view.component';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemComponent } from '../list-item/list-item.component';
import { TotalComponent } from '../total/total.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [ClientViewComponent, 
    InvoiceViewComponent, 
    CompanyViewComponent, 
    ListItemComponent,
    TotalComponent ],
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit {
  
  invoice!: Invoice;

  constructor(private service: InvoiceService) { }
  
  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }
}
