import cors from 'cors';
import express, { Request, Response } from 'express';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

interface ContactData {
	name: string;
	email: string;
	message: string;
}

app.post('/api/contact', (req: Request, res: Response) => {
	const { name, email, message } = req.body as ContactData;

	console.log('Contact Form Submission:', { name, email, message });

	res.json({ message: `Thank you for your interest, ${name}` });
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
