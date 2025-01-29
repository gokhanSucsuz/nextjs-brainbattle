import { PrismaClient } from "@prisma/client";

import biologyQuestions from "../data/biologyQuestions";
let questionsPrisma: PrismaClient;

async function seedQuestions() {
	questionsPrisma = new PrismaClient();
	console.log("Seeding Questions...");

	if (biologyQuestions.length > 0) {
		for (const question of biologyQuestions) {
			const createdQuestion = await questionsPrisma.question.create({
				data: {
					text: question.text,
					quizId: "679a17b2251bab9206ef29bf",
					options: {
						create: question.options
					},
					difficulty: question.difficulty
				}
			});
			console.log("Created question => ", createdQuestion);
		}
		console.log("Questions Seeded!");
	}
}

seedQuestions()
	.catch(e => console.log("Error Seeding Questions", e))
	.finally(async () => {
		await questionsPrisma.$disconnect();
	});
