interface ICategory {
	id: string;
	name: string;
	description: string;
	image?: string;
	quizzes: IQuiz[];
}

interface IQuiz {
	id: string;
	title: string;
	description?: string;
	image?: string;
	categoryId: string;
	questions: IQuestion[];
}

interface IQuestion {
	id: string;
	text: string;
	difficulty?: string | null;
	options: IOption[];
}

interface IOption {
	id: string;
	text: string;
	isCorrect: Boolean;
}

export type { ICategory, IQuiz, IQuestion, IOption };