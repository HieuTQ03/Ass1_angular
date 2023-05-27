import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
@Component({
    selector: 'app-product-add',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent {
    constructor(
        private productService: ProductService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {}
    productForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(4)]],
        price: [0],
    });

    onHandleSubmit() {
        if (this.productForm.valid) {
            const product: IProduct = {
                name: this.productForm.value.name || '',
                price: this.productForm.value.price || 0,
            };
            this.productService.addProduct(product).subscribe(() => {
                this.router.navigate(['/admin/product']);
            });
        }
    }
}
