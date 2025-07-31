import React, { useState } from 'react';
import { Leaf, Gift, TreePine, Award, Users, TrendingUp, Package, Calendar, CheckCircle, XCircle, MapPin } from 'lucide-react';
import { ecoRewards } from '../data/rewards';
import { boxBackHistory } from '../data/boxback';

const EcoPerksPage: React.FC = () => {
  const [userEcoLeaves] = useState(127);
  const [userLocaLeaves] = useState(85);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRewardType, setSelectedRewardType] = useState('all');
  const [activeTab, setActiveTab] = useState('rewards');

  const filteredRewards = ecoRewards.filter(reward => {
    const categoryMatch = selectedCategory === 'all' || reward.category === selectedCategory;
    const typeMatch = selectedRewardType === 'all' || reward.rewardType === selectedRewardType;
    return categoryMatch && typeMatch;
  });

  const stats = [
    { label: 'Trees Planted', value: '12,847', icon: TreePine, color: 'text-green-600' },
    { label: 'CO₂ Reduced', value: '2.4T', icon: Leaf, color: 'text-emerald-600' },
    { label: 'Local Businesses Supported', value: '342', icon: MapPin, color: 'text-amber-600' },
    { label: 'Active Eco Warriors', value: '15.2K', icon: Users, color: 'text-purple-600' },
  ];

  const achievements = [
    { id: 'bb-beginner', title: 'BoxBack Beginner', description: 'Returned first box', earned: true, icon: '📦' },
    { id: 'eco-recycler', title: 'EcoRecycler', description: '5 successful BoxBacks', earned: true, icon: '♻️' },
    { id: 'local-hero', title: 'Local Hero', description: '10 LocaLeaf purchases', earned: true, icon: '📍' },
    { id: 'planet-saver', title: 'Planet Saver', description: '100 sustainable purchases', earned: false, icon: '🌍' },
    { id: 'community-champion', title: 'Community Champion', description: '50 LocaLeaf orders', earned: false, icon: '🏆' },
    { id: 'green-guru', title: 'Green Guru', description: '500 EcoLeaves earned', earned: true, icon: '🌿' },
  ];

  const leaderboard = [
    { rank: 1, name: 'EcoChampion2024', ecoLeaves: 2847, locaLeaves: 1456, badge: '🏆' },
    { rank: 2, name: 'GreenGuru', ecoLeaves: 2456, locaLeaves: 1234, badge: '🥈' },
    { rank: 3, name: 'LocalHero', ecoLeaves: 2234, locaLeaves: 1567, badge: '🥉' },
    { rank: 4, name: 'EcoWarrior', ecoLeaves: 1987, locaLeaves: 987, badge: '🌟' },
    { rank: 5, name: 'SustainableLife', ecoLeaves: 1756, locaLeaves: 1123, badge: '🌟' },
  ];

  const canAffordReward = (reward: any) => {
    if (reward.rewardType === 'eco') {
      return userEcoLeaves >= (reward.costEcoLeaves || 0);
    } else if (reward.rewardType === 'loca') {
      return userLocaLeaves >= (reward.costLocaLeaves || 0);
    } else if (reward.rewardType === 'both') {
      return userEcoLeaves >= (reward.costEcoLeaves || 0) && userLocaLeaves >= (reward.costLocaLeaves || 0);
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="w-12 h-12 text-green-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">EcoPerks Zone</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your sustainable choices into meaningful rewards and make a positive impact on our planet and community
          </p>
        </div>

        {/* User Balance */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Your EcoLeaves Balance</h2>
              <div className="flex items-center">
                <Leaf className="w-8 h-8 text-green-600 mr-2" />
                <span className="text-4xl font-bold text-green-600">{userEcoLeaves}</span>
                <span className="text-xl text-gray-600 ml-2">leaves</span>
              </div>
              <div className="text-sm text-gray-600 mt-1">Equivalent to ₹{Math.floor(userEcoLeaves / 50) * 50} in rewards</div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Your LocaLeaves Balance</h2>
              <div className="flex items-center">
                <MapPin className="w-8 h-8 text-amber-600 mr-2" />
                <span className="text-4xl font-bold text-amber-600">{userLocaLeaves}</span>
                <span className="text-xl text-gray-600 ml-2">leaves</span>
              </div>
              <div className="text-sm text-gray-600 mt-1">Equivalent to ₹{Math.floor(userLocaLeaves / 25) * 25} in local rewards</div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg mb-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('rewards')}
              className={`px-6 py-4 font-medium transition-colors ${
                activeTab === 'rewards'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Rewards
            </button>
            <button
              onClick={() => setActiveTab('boxback')}
              className={`px-6 py-4 font-medium transition-colors ${
                activeTab === 'boxback'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              BoxBack History
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-6 py-4 font-medium transition-colors ${
                activeTab === 'achievements'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Achievements
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`px-6 py-4 font-medium transition-colors ${
                activeTab === 'leaderboard'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Leaderboard
            </button>
          </div>

          <div className="p-8">
            {/* Rewards Tab */}
            {activeTab === 'rewards' && (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Available Rewards</h2>
                  <div className="flex space-x-2">
                    {/* Category Filter */}
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 bg-white"
                    >
                      <option value="all">All Categories</option>
                      <option value="discount">Discounts</option>
                      <option value="product">Products</option>
                      <option value="donation">Donations</option>
                    </select>
                    
                    {/* Reward Type Filter */}
                    <select
                      value={selectedRewardType}
                      onChange={(e) => setSelectedRewardType(e.target.value)}
                      className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 bg-white"
                    >
                      <option value="all">All Types</option>
                      <option value="eco">EcoLeaves Only</option>
                      <option value="loca">LocaLeaves Only</option>
                      <option value="both">Combined Rewards</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredRewards.map((reward) => (
                    <div key={reward.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <img
                        src={reward.image}
                        alt={reward.title}
                        className="w-full h-32 object-cover rounded-lg mb-4"
                      />
                      <h3 className="font-bold text-gray-900 mb-2">{reward.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{reward.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          {reward.costEcoLeaves && (
                            <div className="flex items-center">
                              <Leaf className="w-4 h-4 text-green-600 mr-1" />
                              <span className="text-sm font-bold text-green-600">{reward.costEcoLeaves}</span>
                            </div>
                          )}
                          {reward.costLocaLeaves && (
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 text-amber-600 mr-1" />
                              <span className="text-sm font-bold text-amber-600">{reward.costLocaLeaves}</span>
                            </div>
                          )}
                        </div>
                        <span className="text-sm font-medium text-gray-700">{reward.value}</span>
                      </div>

                      <button
                        disabled={!canAffordReward(reward)}
                        className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                          canAffordReward(reward)
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {canAffordReward(reward) ? 'Redeem Now' : 'Insufficient Leaves'}
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* BoxBack History Tab */}
            {activeTab === 'boxback' && (
              <>
                <div className="flex items-center mb-6">
                  <Package className="w-6 h-6 text-amber-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">BoxBack History</h2>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center text-amber-700 mb-2">
                    <Package className="w-5 h-5 mr-2" />
                    <span className="font-medium">How BoxBack Works</span>
                  </div>
                  <p className="text-sm text-amber-600">
                    Return your empty Amazon boxes to the delivery agent on your next order and earn +5 EcoLeaves. 
                    Help us recycle and reduce waste while earning rewards!
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700">Date</th>
                        <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700">Order ID</th>
                        <th className="border border-gray-200 px-4 py-3 text-center text-sm font-medium text-gray-700">Returned Box?</th>
                        <th className="border border-gray-200 px-4 py-3 text-center text-sm font-medium text-gray-700">Points Awarded</th>
                      </tr>
                    </thead>
                    <tbody>
                      {boxBackHistory.map((entry) => (
                        <tr key={entry.id} className="hover:bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                              {new Date(entry.date).toLocaleDateString('en-IN')}
                            </div>
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900 font-mono">
                            {entry.orderId}
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-center">
                            {entry.returned ? (
                              <div className="flex items-center justify-center text-green-600">
                                <CheckCircle className="w-4 h-4 mr-1" />
                                <span className="text-sm font-medium">Yes</span>
                              </div>
                            ) : (
                              <div className="flex items-center justify-center text-red-600">
                                <XCircle className="w-4 h-4 mr-1" />
                                <span className="text-sm font-medium">No</span>
                              </div>
                            )}
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-center">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              entry.pointsAwarded > 0 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                              {entry.pointsAwarded > 0 ? `+${entry.pointsAwarded}` : '0'} leaves
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 text-center">
                  <div className="text-sm text-gray-600 mb-2">
                    Total BoxBack returns: {boxBackHistory.filter(entry => entry.returned).length}
                  </div>
                  <div className="text-sm text-gray-600">
                    Total EcoLeaves earned: {boxBackHistory.reduce((sum, entry) => sum + entry.pointsAwarded, 0)}
                  </div>
                </div>
              </>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <>
                <div className="flex items-center mb-6">
                  <Award className="w-6 h-6 text-yellow-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">Achievements</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className={`border rounded-xl p-6 transition-all ${
                      achievement.earned 
                        ? 'border-yellow-200 bg-yellow-50 shadow-md' 
                        : 'border-gray-200 bg-gray-50'
                    }`}>
                      <div className="flex items-center mb-3">
                        <span className="text-3xl mr-3">{achievement.icon}</span>
                        <div>
                          <h3 className={`font-bold ${
                            achievement.earned ? 'text-yellow-800' : 'text-gray-600'
                          }`}>
                            {achievement.title}
                          </h3>
                          <p className={`text-sm ${
                            achievement.earned ? 'text-yellow-600' : 'text-gray-500'
                          }`}>
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        achievement.earned 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {achievement.earned ? '✓ Earned' : 'Not earned yet'}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Leaderboard Tab */}
            {activeTab === 'leaderboard' && (
              <>
                <div className="flex items-center mb-6">
                  <Award className="w-6 h-6 text-yellow-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">Eco Warriors Leaderboard</h2>
                </div>
                
                <div className="space-y-4">
                  {leaderboard.map((user) => (
                    <div key={user.rank} className="flex items-center justify-between p-6 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <span className="text-2xl mr-4">{user.badge}</span>
                        <div>
                          <div className="font-medium text-gray-900">#{user.rank} {user.name}</div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Leaf className="w-4 h-4 mr-1 text-green-600" />
                              <span>{user.ecoLeaves.toLocaleString()} EcoLeaves</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1 text-amber-600" />
                              <span>{user.locaLeaves.toLocaleString()} LocaLeaves</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center text-green-600">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">Active</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-amber-50 rounded-lg border border-green-200">
                  <h3 className="font-bold text-gray-900 mb-2">Your Current Ranking</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🌟</span>
                      <div>
                        <div className="font-medium text-gray-900">#47 You</div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Leaf className="w-4 h-4 mr-1 text-green-600" />
                            <span>{userEcoLeaves} EcoLeaves</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1 text-amber-600" />
                            <span>{userLocaLeaves} LocaLeaves</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div>Need 89 more EcoLeaves to reach top 40!</div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoPerksPage;