import Heading from "@/components/ui/heading";
import { prisma } from "@/src/lib/prisma";

async function getPendingOrders() {
    const orders = await prisma.order.findMany({
        where: {
            status: false
        }
    })

    return orders
}

export default async function OrdersPage(){
    const orders = await getPendingOrders()
    console.log(orders)
    
    return(
        <>
        <Heading>
            Administrar Ordenes
        </Heading>
        </>
    )
}