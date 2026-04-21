export const domains = [
	{
		id: 1,
		slug: 'health-care',
		title: 'Health Care',
		shortDescription: 'Decision support systems for safer, faster, and evidence-based clinical and operational decisions.',
		longDescription:
			'This domain focuses on decision support systems for health care settings, including triage assistance, care pathway optimisation, resource planning, and risk-informed intervention support. The work combines explainable AI, operational analytics, and human-centred workflows so clinicians, managers, and service teams can make more confident decisions with transparent evidence.',
	},
	{
		id: 2,
		slug: 'housing',
		title: 'Housing',
		shortDescription: 'Decision support systems for retrofit planning, asset prioritisation, and sustainable housing strategy.',
		longDescription:
			'This domain delivers decision support systems for housing providers, local authorities, and retrofit stakeholders. It includes tools for option ranking, performance assessment, investment planning, and explainable recommendation flows. The goal is to make complex property, cost, and carbon evidence practical for day-to-day decisions and long-term strategy.',
	},
];

export const getDomainById = (id) => domains.find((domain) => domain.id === id);

export const getDomainBySlug = (slug) => domains.find((domain) => domain.slug === slug);
