import { PrismaClient } from "@prisma/client";

let quizPrisma: PrismaClient;

const quizzes = [
	{
		title: "Computer Science Basics",
		description: "A quiz about fundamental computer science concepts.",
		categoryId: "67961534d74e299c563bbfb7" // Replace with the actual category ID
	},
	{
		title: "Programming Fundamentals",
		description: "Test your knowledge of basic programming concepts.",
		categoryId: "67961534d74e299c563bbfb7"
	},
	{
		title: "Data Structures",
		description: "Assess your understanding of data structures.",
		categoryId: "67961534d74e299c563bbfb9"
	},
	{
		title: "Physics",
		description: "Test your knowledge of physics.",
		categoryId: "67961533d74e299c563bbfb4"
	},
	{
		title: "Biology",
		description: "Test your knowledge of biology.",
		categoryId: "67961534d74e299c563bbfb6"
	},
	{
		title: "Chemistry",
		description: "Test your knowledge of chemistry.",
		categoryId: "67961533d74e299c563bbfb5"
	}
];

async function seedQuizzes() {
	quizPrisma = new PrismaClient();
	console.log("Seeding Quizzes...");
	for (const quiz of quizzes) {
		const createdQuiz = await quizPrisma.quiz.create({ data: quiz });
		console.log("Created quiz =>", createdQuiz);
	}
	console.log("Quizzes Seeded!");
}

seedQuizzes()
	.catch(e => console.log("Error Seeding Quizzes", e))
	.finally(async () => {
		await quizPrisma.$disconnect();
	});
