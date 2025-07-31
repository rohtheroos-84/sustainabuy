import { EcoReward } from '../types';

export const ecoRewards: EcoReward[] = [
  {
    id: 'reward-1',
    title: '₹50 Amazon Voucher',
    description: 'Get ₹50 off on your next purchase',
    costEcoLeaves: 50,
    value: '₹50',
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'discount',
    rewardType: 'eco'
  },
  {
    id: 'reward-2',
    title: '₹100 Amazon Voucher',
    description: 'Get ₹100 off on your next purchase',
    costEcoLeaves: 100,
    value: '₹100',
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'discount',
    rewardType: 'eco'
  },
  {
    id: 'reward-3',
    title: 'Plant a Tree',
    description: 'We\'ll plant a tree in your name',
    costEcoLeaves: 25,
    value: '1 Tree',
    image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'donation',
    rewardType: 'eco'
  },
  {
    id: 'reward-4',
    title: 'Bamboo Phone Case',
    description: 'Eco-friendly bamboo phone case',
    costEcoLeaves: 75,
    value: 'Free Product',
    image: 'https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'product',
    rewardType: 'eco'
  },
  {
    id: 'reward-5',
    title: 'Ocean Cleanup Donation',
    description: 'Support ocean cleanup initiatives',
    costEcoLeaves: 30,
    value: 'Donation',
    image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'donation',
    rewardType: 'eco'
  },
  {
    id: 'reward-6',
    title: 'Reusable Shopping Bag',
    description: 'High-quality reusable shopping bag',
    costEcoLeaves: 40,
    value: 'Free Product',
    image: 'https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'product',
    rewardType: 'eco'
  },
  {
    id: 'reward-7',
    title: '₹25 Local Store Voucher',
    description: 'Support local businesses in your area',
    costLocaLeaves: 25,
    value: '₹25',
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'discount',
    rewardType: 'loca'
  },
  {
    id: 'reward-8',
    title: '₹50 Local Store Voucher',
    description: 'Support local businesses in your area',
    costLocaLeaves: 50,
    value: '₹50',
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'discount',
    rewardType: 'loca'
  },
  {
    id: 'reward-9',
    title: 'Local Artisan Product',
    description: 'Handcrafted item from local artisans',
    costLocaLeaves: 75,
    value: 'Free Product',
    image: 'https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'product',
    rewardType: 'loca'
  },
  {
    id: 'reward-10',
    title: 'Community Garden Support',
    description: 'Fund local community gardens',
    costLocaLeaves: 30,
    value: 'Donation',
    image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'donation',
    rewardType: 'loca'
  },
  {
    id: 'reward-11',
    title: '₹100 Mega Voucher',
    description: 'Ultimate savings with combined rewards',
    costEcoLeaves: 50,
    costLocaLeaves: 50,
    value: '₹100',
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'discount',
    rewardType: 'both'
  },
  {
    id: 'reward-12',
    title: 'Sustainable Local Bundle',
    description: 'Eco-friendly products from local makers',
    costEcoLeaves: 40,
    costLocaLeaves: 35,
    value: 'Product Bundle',
    image: 'https://images.pexels.com/photos/6113657/pexels-photo-6113657.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'product',
    rewardType: 'both'
  }
];