import { BoxBackHistory, Order } from '../types';

export const boxBackHistory: BoxBackHistory[] = [
  {
    id: 'bb-1',
    date: '2024-11-10',
    orderId: 'AMZ-2024-001',
    returned: true,
    pointsAwarded: 5
  },
  {
    id: 'bb-2',
    date: '2024-11-03',
    orderId: 'AMZ-2024-002',
    returned: true,
    pointsAwarded: 5
  },
  {
    id: 'bb-3',
    date: '2024-10-28',
    orderId: 'AMZ-2024-003',
    returned: false,
    pointsAwarded: 0
  },
  {
    id: 'bb-4',
    date: '2024-10-20',
    orderId: 'AMZ-2024-004',
    returned: true,
    pointsAwarded: 5
  }
];

export const recentOrders: Order[] = [
  {
    id: 'AMZ-2024-005',
    date: '2024-11-12',
    items: [],
    total: 2499,
    boxBackOpted: true,
    boxBackConfirmed: false,
    ecoLeavesEarned: 8
  }
];