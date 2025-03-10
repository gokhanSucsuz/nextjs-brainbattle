import QuizCard from "@/components/quiz/QuizCard";
import { auth } from "@clerk/nextjs/server";
import React from "react";

interface CategoryPageParams {
	params: {
		categoryId: string;
	};
}

const CategoryPage = async ({ params }: CategoryPageParams) => {
	const { categoryId } = params;
	const { userId } = await auth();
	if (!categoryId) {
		return null;
	}
	const quizzes = await prisma.quiz.findMany({
		where: {
			categoryId
		},
		include: {
			questions: {
				select: {
					id: true,
					text: true,
					difficulty: true,
					options: {
						select: {
							id: true,
							text: true,
							isCorrect: true
						}
					}
				}
			}
		},
		orderBy: {
			title: "asc"
		}
	});

	return (
		<div>
			<h1 className="mb-6 text-4xl font-bold">All Quizzes</h1>
			{quizzes.length > 0
				? <div className="mb-8 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
						{quizzes.map(quiz => {
							return <QuizCard key={quiz.id} quiz={quiz} />;
						})}
					</div>
				: <h1>No quizzes found this category...</h1>}
		</div>
	);
};

export default CategoryPage;
