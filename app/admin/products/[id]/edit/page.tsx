import EditProductForm from "@/components/products/EditProductForm";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/components/ui/heading"
import { prisma } from "@/src/lib/prisma";
import { notFound, redirect } from "next/navigation";
import React from "react";
import GoBackButton from "@/components/ui/GoBackButton";

async function getProductById(id: number) {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  if (!product) {
    notFound();
  }
  return product;
}

export default async function EditProductsPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(+params.id);
  return (
    <>
      <Heading>Editar Producto: {product.name}</Heading>
      <GoBackButton />
      <EditProductForm>
        <ProductForm product={product} />
      </EditProductForm>
    </>
  );
}