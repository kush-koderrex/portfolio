const careerStart = new Date(2019, 8, 22);
export const yearsOfExperience = Math.abs(
	new Date(Date.now() - careerStart.getTime()).getUTCFullYear() - 1970
);

export const entries = [
	// {
	// 	id: 'freelancer',
	// 	title: 'Freelancer',
	// 	jobTitle: 'Front-End Web Developer',
	// 	timeframe: '2022 → Now',
  //   current: true,
  //   location: 'Remote',
	// 	description:
	// 		"As an independent contractor, I've been able to build new innovative projects from scratch putting my development, planning, design and teamwork skills to the test.",
	// 	tags: [
	// 		{
	// 			color: 'primary',
	// 			text: 'Vue'
	// 		},
	// 		{
	// 			color: 'primary',
	// 			text: 'React'
	// 		},
	// 		{
	// 			color: 'primary',
	// 			text: 'Svelte'
	// 		}
	// 	]
	// },
//   {
// 		id: 'agora',
// 		title: 'Agora',
// 		jobTitle: 'Lead Front-End Developer',
// 		timeframe: '2021 → Now',
//     current: true,
//     location: 'USA, Remote',
// 		description:
// 			"Building interfaces to make homeschool curriculum planning painless and easy, with a focus on accessibility.",
// 		tags: [
// 			{
// 				color: 'primary',
// 				text: 'React'
// 			},
//       {
// 				color: 'primary',
// 				text: 'NextJS'
// 			}
// 		]
// 	},
	{
		id: 'shodhshala',
		title: 'Shodhshala',
		jobTitle: 'Full-Stack Infrastructure Engineer',
		timeframe: '2022 Aug → Now',
    location: 'Noida, Remote',
		description:
			"Design software systems end-to-end products and scalable software infrastructure to create a seamless user experience for specific tasks of industries. Analyze and document all the malfunctions system and determine how to use software to make processes more efficient. Provide technical support and troubleshooting services for clients.",
		tags: [
			{
				color: 'primary',
				text: 'DevOps'
			},
			{
				color: 'primary',
				text: 'CI/CD'
			},
			{
				color: 'secondary',
				text: 'Frontend Development'
			},
			{
				color: 'secondary',
				text: 'Backend Development'
			}
		]
	},
	{
		id: 'karnarogyam',
		title: 'Karnarogyam Private Limited',
		jobTitle: 'Full Stack Developer',
		timeframe: '2021 Oct → 2022 Aug',
    location: 'Noida India',
		description:
			'Built new mobile apps from scratch with Flutter, a simplified Application with flutter application for healthcare section which intract with the Bluetooth hardware',
		tags: [
			{
				color: 'primary',
				text: 'Flutter'
			},
			{
				color: 'primary',
				text: 'Python'
			},
			{
				color: 'primary',
				text: 'Django'
			},
			{
				color: 'secondary',
				text: 'Docker'
			},
			{
				color: 'secondary',
				text: 'MongoDB'
			}
		]
	},
	{
		id: 'Genisup India Pvt. ltd.',
		title: 'Genisup India Pvt. ltd.',
		jobTitle: 'Data Science Intern',
		timeframe: '2020 Aug →  2020 Aug',
    location: 'India',
		description:
			'Developed an machine learning Model addresses the problem of training models for sentiment analysis of a dataset tweets from the users for the US Airline Industry. That classifying tweets according to the sentiment expressed in them: positive, negative or neutral by using NLP Techniques and several DL algorithms (LSTM, RNN).',
		tags: [
			{
				color: 'primary',
				text: 'Python'
			},
			{
				color: 'secondary',
				text: 'NLP'
			},
			{
				color: 'secondary',
				text: 'Machine Learning'
			}
		]
	}
];
