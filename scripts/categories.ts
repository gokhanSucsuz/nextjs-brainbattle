import { PrismaClient } from "@prisma/client";
let categoryPrisma: any;

async function addCategories() {
	categoryPrisma = new PrismaClient();

	const categories = [
		{
			name: "Math",
			description:
				"Math is the study of number, structure, space, and change. It includes the elements of quantity, structure, and change, as well as the laws of motion and the laws of nature."
		},
		{
			name: "Physics",
			description:
				"Physics is the natural science that studies matter, its motion and behavior through space and time, and the related entities of energy and force."
		},
		{
			name: "Chemistry",
			description:
				"Chemistry is the scientific study of matter and its properties, including the composition, structure, and behavior of matter."
		},
		{
			name: "Biology",
			description:
				"Biology is the natural science that studies life and its processes, as well as the interaction between organisms and their environment."
		},
		{
			name: "Computer Science",
			description:
				"Computer science is the study of computer hardware, software, and their applications."
		},
		{
			name: "History",
			description:
				"History is the study of past events, people, and their relationship to the present."
		},
		{
			name: "Geography",
			description:
				"Geography is the study of the distribution of populations and physical features on the Earth's surface."
		},
		{
			name: "Psychology",
			description:
				"Psychology is the study of mind and behavior, including psychological disorders and their treatment."
		},
		{
			name: "Sociology",
			description:
				"Sociology is the study of society, its structure, and its relationships between individuals and groups."
		},
		{
			name: "Economics",
			description:
				"Economics is the study of the relationship between the supply and demand of goods and services, and the factors that determine the price of goods and services."
		},
		{
			name: "Political Science",
			description:
				"Political science is the study of government, politics, and the relationship between governments and their citizens."
		},
		{
			name: "Philosophy",
			description:
				"Philosophy is the study of the fundamental concepts and principles of being, existence, knowledge, and truth."
		}
	];

	console.log("Adding categories...");

	for (const category of categories) {
		await categoryPrisma.category.create({
			data: category
		});
	}
	console.log("Categories Added Successfully!");
}

addCategories()
	.catch(e => console.log("Error Adding Categories", e))
	.finally(async () => {
		await categoryPrisma.$disconnect();
	});
