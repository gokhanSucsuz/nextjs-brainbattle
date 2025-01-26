import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/connect";

export async function GET(req: NextRequest) {
	try {
		const res = await prisma.category.findMany();
		return NextResponse.json(res);
	} catch (error) {
		console.log("There is an error getting Categories => ", error);
		return NextResponse.json(
			{
				error: "There is an error getting Categories"
			},
			{
				status: 500
			}
		);
	}
}
