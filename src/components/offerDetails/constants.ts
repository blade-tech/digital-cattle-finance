import imgImage from "figma:asset/cd5f7f9e70aa17fa6ff4e2ceb44822a3c61d9719.png";
import imgImage1 from "figma:asset/50c01d8c090069f885a08b92bd49889aeea32be6.png";
import imgImage2 from "figma:asset/25082c2ffacd2706a9defe5f2cfe818698f655c5.png";
import imgImage3 from "figma:asset/c52349ae8c80f002f03465ebf4d9c8e43f591963.png";
import imgImage4 from "figma:asset/e227e6fb9489638b4df12ef723883f2a83d4a51c.png";
import imgImageCattle05 from "figma:asset/311a3c1df4c8451e43a5a5eb1dfef3bb9b7a0030.png";
import imgImageCattle03 from "figma:asset/205926fd7d7f3f7589867ad617ac94f558101076.png";

export const poolDetailsData = {
  id: 24,
  name: 'Beef Cattle – Belgian Blue',
  status: 'open' as const,
  statusText: 'Open for Investment',
  images: [
    imgImageCattle05,
    imgImage,
    imgImageCattle03,
    imgImage4,
    imgImage1,
    imgImage2,
    imgImage3,
    'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&h=600&fit=crop&crop=center'
  ],
  summary: {
    term: 8,
    targetReturn: 11,
    region: 'Jashore District, Bangladesh',
    purpose: 'Premium meat production'
  },
  investment: {
    minInvestment: 1000,
    maxInvestment: 50000,
    targetReturn: 11,
    termDuration: 8,
    contractType: 'Mudarabah',
    capitalNeeded: 80000,
    currentFunded: 61500,
    fundedPercentage: 76.9,
    totalInvestors: 23,
    averageInvestment: 2674
  },
  livestock: {
    totalHead: 15,
    breed: 'Belgian Blue',
    avgWeight: '450 kg',
    ageRange: '18-24 months',
    feedingRegime: 'Premium grain + pasture',
    vaccinationStatus: 'Up to date',
    healthScore: 96,
    expectedSlaughterWeight: '650 kg'
  },
  financials: {
    operatingCosts: {
      feed: 28000,
      labor: 8000,
      veterinary: 3000,
      transport: 4000,
      insurance: 2000,
      management: 5000
    },
    projectedRevenue: 95000,
    estimatedNetProfit: 45000,
    investorShare: 70,
    operatorShare: 30,
    zakatEligible: true
  },
  farmer: {
    name: 'Mohammad Rahman',
    experience: '15 years',
    successRate: '98%',
    totalCattleManaged: 450,
    quote: 'We take pride in raising healthy cattle with traditional care and modern veterinary practices.'
  },
  timeline: [
    { milestone: 'Pool Launch', date: 'Apr 15, 2025', status: 'completed' },
    { milestone: 'Funding Complete', date: 'May 1, 2025', status: 'pending' },
    { milestone: 'Cattle Purchase', date: 'May 5, 2025', status: 'pending' },
    { milestone: 'Mid-term Health Check', date: 'Aug 1, 2025', status: 'pending' },
    { milestone: 'Market Sale', date: 'Dec 15, 2025', status: 'pending' },
    { milestone: 'Profit Distribution', date: 'Dec 20, 2025', status: 'pending' }
  ],
  documents: [
    { name: 'Investment Agreement', type: 'PDF', size: '2.4 MB' },
    { name: 'Shariah Compliance Certificate', type: 'PDF', size: '1.1 MB' },
    { name: 'Veterinary Health Report', type: 'PDF', size: '3.2 MB' },
    { name: 'Farm Inspection Report', type: 'PDF', size: '1.8 MB' }
  ]
};

export const projectedGrowthData = [
  { month: 'Month 1', weight: 450, value: 52500 },
  { month: 'Month 2', weight: 480, value: 56000 },
  { month: 'Month 3', weight: 510, value: 59500 },
  { month: 'Month 4', weight: 545, value: 63500 },
  { month: 'Month 5', weight: 580, value: 67500 },
  { month: 'Month 6', weight: 615, value: 71500 },
  { month: 'Month 7', weight: 640, value: 74500 },
  { month: 'Month 8', weight: 650, value: 75500 }
];

export const defaultComments = [
  {
    id: 1,
    user: 'Ahmed Hassan',
    avatar: null,
    content: 'Great opportunity! The farmer has an excellent track record and the breed selection is optimal for this region.',
    timestamp: '2 hours ago',
    likes: 5
  },
  {
    id: 2,
    user: 'Dr. Fatima Al-Zahra',
    avatar: null,
    content: 'I visited this farm last month. The cattle care standards are impressive and fully comply with Islamic principles.',
    timestamp: '1 day ago',
    likes: 12
  }
];

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'open':
      return 'bg-green-100 text-green-800';
    case 'almost_full':
      return 'bg-yellow-100 text-yellow-800';
    case 'closed':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const getStatusIcon = (status: string) => {
  switch (status) {
    case 'open':
      return '🔵';
    case 'almost_full':
      return '🟡';
    case 'closed':
      return '⚪';
    default:
      return '⚪';
  }
};