import { Component } from '@angular/core';

import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-form-new',
  templateUrl: './register.component.html',
  styleUrls: ['../../form/form.component.scss']
})

export class RegisterProductComponent {
  submitted = false;
  product: ProductComponent = new ProductComponent();

  constructor(private serviceProduct: ProductsService) {}

  addProduct(event) {
    event.preventDefault();

    this.submitted = true;

    this.serviceProduct.addProduct(this.product).then(() => {
      this.product = new ProductComponent();
    });
  }
}
