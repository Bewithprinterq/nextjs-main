"use client"

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useCartStore } from "@/lib/cart-store";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CartList() {
    const router = useRouter();
    // next/nevigation

    const items = useCartStore((state) => state.items);
    const removeItem = useCartStore((state) => state.removeItem);
    const clearCart = useCartStore((state) => state.clearCart);
    const totalPrice = useCartStore((state) => state.totalPrice());

    if (items.length == 0) {
        return <div className="text-xl text-center mt-20 font-bold">ตะกร้าสินค้าว่างเปล่า...</div>
    }
    
    return (
        <div className="mx-auto max-w-4xl sm:px-6 lg:px-8 mt-10">
        <h1 className="text-xl text-center mb-4 font-bold">ตะกร้าสินค้า</h1>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>รหัสสินค้า</TableHead>
                    <TableHead>ชื่อสินค้า</TableHead>
                    <TableHead>ราคา</TableHead>
                    <TableHead>จำนวน</TableHead>
                    <TableHead>รวม</TableHead>
                    <TableHead>เครื่องมือ</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    items.map((i) => (
                        <TableRow key={i.productId}>
                            <TableCell>{i.productId}</TableCell>
                            <TableCell>{i.title}</TableCell>
                            <TableCell>{i.price}</TableCell>
                            <TableCell>{i.qty}</TableCell>
                            <TableCell>{(i.price*i.qty).toFixed(2)}</TableCell>
                            <TableCell>
                                <Button variant="destructive" onClick={() => {removeItem(i.productId);}}>
                                    <Trash/>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>

        <div className="text-right mt-4">
            <div className="font-bold">
                รวมทั้งหมด: {totalPrice}
            </div>
            <div>
                <Button className="mr-1 text-red-500" variant="outline" onClick={() => {clearCart();}}>ลบสินค้าทั้งหมด</Button>
                <Button className="ml-1" onClick={() => {
                    clearCart();
                    router.replace('/product');
                }}>ยืนยันคำสั่งซื้อ</Button>
            </div>
        </div>

        </div>
    );
}