export const CategoriesEnum = [
	{ title: 'Select', value: 'none' },
	{ title: 'Arts and Entertainment', value: 'artsAndEntertainment' },
	{ title: 'Construction', value: 'construction' },
	{ title: 'Consulting', value: 'consulting' },
	{ title: 'Customer Service', value: 'customerService' },
	{ title: 'Data Science', value: 'dataScience' },
	{ title: 'Digital Marketing', value: 'digitalMarketing' },
	{ title: 'Education', value: 'education' },
	{ title: 'Finance', value: 'finance' },
	{ title: 'Food Service', value: 'foodService' },
	{ title: 'Freelance', value: 'freelance' },
	{ title: 'Government', value: 'government' },
	{ title: 'Healthcare', value: 'healthcare' },
	{ title: 'Hospitality', value: 'hospitality' },
	{ title: 'Human Resources', value: 'humanResources' },
	{ title: 'Legal', value: 'legal' },
	{ title: 'Non-profit', value: 'nonProfit' },
	{ title: 'Operations', value: 'operations' },
	{ title: 'Other', value: 'other' },
	{ title: 'Product Management', value: 'productManagement' },
	{ title: 'Research', value: 'research' },
	{ title: 'Retail', value: 'retail' },
	{ title: 'Sales', value: 'sales' },
	{ title: 'Software Development', value: 'softwareDevelopment' },
	{ title: 'Transportation', value: 'transportation' },
	{ title: 'UI/UX Design', value: 'uiUxDesign' },
	{ title: 'Web Development', value: 'webDevelopment' },
];


export const jobTypesEnum = [
	{ title: 'Full-time', value: 'fulltime' },
	{ title: 'Part-time', value: 'parttime' },
	{ title: 'Contract', value: 'contract' },
	{ title: 'Volunteer', value: 'volunteer' },
	{ title: 'Temporary', value: 'temporary' },
	{ title: 'Internship', value: 'internship' },
	{ title: 'Other', value: 'other' },
];

export const workplaceTypesEnum = [
	{ title: 'Remote', value: 'remote' },
	{ title: 'Onsite', value: 'onsite' },
	{ title: 'Hybrid', value: 'hybrid' },
];


export const proficiencyEnum = [
	{ title: 'Select', value: 'none' },
	{ title: 'Beginner', value: 'beginner' },
	{ title: 'Intermediate', value: 'intermediate' },
	{ title: 'Advanced', value: 'advanced' },
];








export const CategoryEnumArary = [
	'Arts and Entertainment',
	'Construction',
	'Consulting',
	'Customer Service',
	'Data Science',
	'Digital Marketing',
	'Education',
	'Finance',
	'Food Service',
	'Freelance',
	'Government',
	'Healthcare',
	'Hospitality',
	'Human Resources',
	'Legal',
	'Non-profit',
	'Operations',
	'Other',
	'Product Management',
	'Research',
	'Retail',
	'Sales',
	'Software Development',
	'Transportation',
	'UI/UX Design',
	'Web Development',
];
const categoryOptions = CategoryEnumArary.map(category => ({
	title: category,
	value: category.replace(/\s+/g, '').toLowerCase()
}));
