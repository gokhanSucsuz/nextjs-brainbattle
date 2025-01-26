import { ICategory } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface CategoryCardProps {
	category: ICategory;
}

const HomeCard = ({ category }: CategoryCardProps) => {
	const router = useRouter();
	return (
		<div
			className="border-2 rounded-xl p-1 cursor-pointer shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform duration-300 ease-in-out"
			onClick={() => router.push(`/categories/${category.id}`)}
		>
			<div className="rounded-xl h-[9rem] py-1">
				<Image
					src={
						category.image
							? category.image
							: `categories/image--${category.name
									.toLowerCase()
									.split(" ")
									.join("-")}.svg`
					}
					alt={category.name}
					width={300}
					height={300}
					className="rounded-xl w-full h-full"
				/>
			</div>
			<div className="p-2 px-6 flex flex-col gap-4">
				<div>
					<h2 className="text-xl font-bold">
						{category.name}
					</h2>
					<p className="text-gray-600 text-sm leading-none font-semibold">
						{category.description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default HomeCard;
