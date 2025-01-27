import { IQuiz } from "@/types/types";
import { dots } from "@/utils/Icons";
import Image from "next/image";
import React from "react";

interface Props {
	quiz: IQuiz;
}

const QuizCard = ({ quiz }: Props) => {
	return (
		<div className="border-2 rounded-xl p-1 cursor-pointer shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform duration-300 ease-in-out">
			<div className="py-2 px-6 flex flex-col gap-4">
				<div className="rounded-xl h-[16rem] py-1 bg-red-200">
					<Image
						src={
							quiz.image
								? quiz.image
								: `/categories/image--${quiz.title
										.toLowerCase()
										.split(" ")
										.join("-")}.svg`
						}
						alt={quiz.title}
						width={300}
						height={200}
						className="rounded-xl h-full p-2"
					/>
				</div>
				<div>
					<h2 className="text-xl font-bold">
						{quiz.title}
					</h2>
					<p className="text-gray-600 leading-none font-semibold">
						{quiz.description}
					</p>
				</div>
				<div className="flex items-center justify-between">
					<p className="text-gray-400 font-semibold text-sm flex items-center gap-2 leading-none">
						<span className="text-xl">
							{dots}
						</span>
						<span>
							Total Questions:{" "}
							<span className="font-bold text-gray-600">
								{quiz.questions.length}
							</span>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default QuizCard;
