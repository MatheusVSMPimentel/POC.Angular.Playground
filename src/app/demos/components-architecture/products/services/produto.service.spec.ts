import { TestBed } from "@angular/core/testing";
import { Product } from "../models/product"
import { ProductService } from "./product.service";

describe('Product Service Test',()=>{
    let service: ProductService;

    beforeEach(()=>{
        const bed = TestBed.configureTestingModule({
            providers:[ProductService]
        });

        service = bed.inject(ProductService);
    });

    it('Should return a products list', ()=>{
        //Mock getAll value using spyOn
        spyOn(service, 'getAll').and.returnValue(productsFake);

        let result = service.getAll('active');

        expect(result.length).toBe(3);

        expect(result).toEqual(productsFake);
    });

    it('Should return a product', ()=>{
        //Mock getAll value using spyOn
        spyOn(service, 'getById').and.returnValue(productFake);

        let result = service.getById(2);

        expect(result).toEqual(productFake);
        expect(result.value).toBe(200);
    });
})


const productsFake : Product[] = [
    {
        id: 1,
        name: 'Teste',
        active: true,
        value: 100,
        image: 'celular.jpg'
    },{
        id: 2,
        name: 'Teste 2',
        active: true,
        value: 200,
        image: 'gopro.jpg'
    },{
        id: 3,
        name: 'Teste 3',
        active: true,
        value: 300,
        image: 'laptop.jpg'
    }
]

const productFake: Product = {
    id: 2,
    name: 'Teste 2',
    active: true,
    value: 200,
    image: 'gopro.jpg'
}