import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import prisma from "@/lib/PrismaClient";

export const POST = async (req: Request, res: NextResponse) => {
	const { title, quantity, price } = await req.json();

	const new_product = await prisma.product.create({
		data: {
			title,
			quantity,
			price,
		},
	});
	return NextResponse.json(new_product);
};

export const GET = async (req: Request, res: NextResponse) => {
	const products = await prisma.product.findMany();
	return NextResponse.json(products);

	//const の変数　producs が
};
