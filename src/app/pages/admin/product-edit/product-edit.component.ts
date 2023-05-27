import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent {
    product!: IProduct;
    constructor(
        private productService: ProductService,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.route.paramMap.subscribe((param) => {
            const id = Number(param.get('id'));
            this.productService.getProductById(id).subscribe(
                (product) => {
                    this.product = product;
                    this.productForm.patchValue({
                        name: product.name,
                        price: product.price,
                    });
                },
                (error) => console.log(error.message)
            );
        });
    }

    productForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(4)]],
        price: [0],
    });

    onHandleUpdate() {
        if (this.productForm.valid) {
            const product: IProduct = {
                id: this.product.id,
                name: this.productForm.value.name || '',
                price: this.productForm.value.price || 0,
            };
            this.productService.updateProduct(product).subscribe(() => {
                this.router.navigate(['/admin/product']);
            });
        }
    }
}
