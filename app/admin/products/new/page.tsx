
import Heading from "@/components/ui/heading";
import AddProductForm from "@/components/products/AppProductForm"
import ProductForm from "@/components/products/ProductForm";


export default async function ProductsPage() {


    return (
        <>
            <Heading> Nuevo producto</Heading>
            <AddProductForm>
                <ProductForm/>
            </AddProductForm>
        </>
    )

}