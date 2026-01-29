'use client';

import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Wallet, CreditCard, PiggyBank, Calendar, Plus, Menu, Bell, Settings, BarChart3, DollarSign, Receipt, ArrowUpRight, ArrowDownRight, Search, Filter, MoreVertical, ChevronRight } from 'lucide-react';

export default function ExpenseTrackerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const stats = [
    { title: 'Total Balance', value: '₹1,24,580', change: '+12.5%', icon: DollarSign, trend: 'up', color: 'indigo' },
    { title: 'Monthly Income', value: '₹85,000', change: '+8.2%', icon: TrendingUp, trend: 'up', color: 'emerald' },
    { title: 'Monthly Expenses', value: '₹52,340', change: '-5.4%', icon: TrendingDown, trend: 'down', color: 'rose' },
    { title: 'Savings Rate', value: '38.5%', change: '+3.1%', icon: PiggyBank, trend: 'up', color: 'amber' },
  ];

  const wallets = [
    { name: 'Primary Bank', balance: 85240, type: 'Bank', icon: Wallet, gradient: 'from-violet-500 to-purple-600' },
    { name: 'Cash Wallet', balance: 12500, type: 'Cash', icon: DollarSign, gradient: 'from-emerald-500 to-teal-600' },
    { name: 'Credit Card', balance: 26840, type: 'Card', icon: CreditCard, gradient: 'from-orange-500 to-rose-600' },
  ];

  const recentTransactions = [
    { title: 'Grocery Shopping', category: 'Food & Dining', amount: 2450, date: 'Today, 2:30 PM', type: 'expense', icon: '🛒' },
    { title: 'Salary Credit', category: 'Income', amount: 85000, date: 'Yesterday', type: 'income', icon: '💰' },
    { title: 'Netflix Subscription', category: 'Entertainment', amount: 649, date: 'Jan 24', type: 'expense', icon: '🎬' },
    { title: 'Freelance Payment', category: 'Income', amount: 15000, date: 'Jan 23', type: 'income', icon: '💼' },
    { title: 'Electricity Bill', category: 'Utilities', amount: 1280, date: 'Jan 22', type: 'expense', icon: '⚡' },
    { title: 'Coffee Shop', category: 'Food & Dining', amount: 380, date: 'Jan 21', type: 'expense', icon: '☕' },
  ];

  const upcomingBills = [
    { name: 'Rent Payment', amount: 25000, due: 'Jan 30', daysLeft: 1, priority: 'high' },
    { name: 'Internet Bill', amount: 899, due: 'Jan 28', daysLeft: -1, priority: 'overdue' },
    { name: 'Gym Membership', amount: 2000, due: 'Feb 1', daysLeft: 3, priority: 'medium' },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        body {
          font-family: 'Outfit', system-ui, -apple-system, sans-serif;
          overflow-x: hidden;
          background: linear-gradient(to bottom right, #020617, #312e81, #020617);
          color: white;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .animate-slide-down {
          animation: slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .glass-effect:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .stat-card {
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .stat-card:hover::before {
          opacity: 1;
        }

        .wallet-card {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .wallet-card:hover {
          transform: translateY(-8px) scale(1.02);
        }

        .transaction-item {
          transition: all 0.2s ease;
        }

        .transaction-item:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(8px);
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .glow-effect {
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.3);
        }

        .btn {
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          font-family: 'Outfit', sans-serif;
        }

        .btn:active {
          transform: scale(0.95);
        }

        input {
          font-family: 'Outfit', sans-serif;
        }
      `}</style>

      <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, rgb(2, 6, 23), rgb(49, 46, 129), rgb(2, 6, 23))' }}>
        {/* Animated Background */}
        <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{ 
            position: 'absolute', 
            top: '80px', 
            left: '80px', 
            width: '384px', 
            height: '384px', 
            background: 'rgba(139, 92, 246, 0.2)', 
            borderRadius: '9999px', 
            filter: 'blur(60px)',
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
          <div style={{ 
            position: 'absolute', 
            bottom: '80px', 
            right: '80px', 
            width: '384px', 
            height: '384px', 
            background: 'rgba(168, 85, 247, 0.2)', 
            borderRadius: '9999px', 
            filter: 'blur(60px)',
            animation: 'pulse 6s ease-in-out infinite',
            animationDelay: '1s'
          }}></div>
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            width: '384px', 
            height: '384px', 
            background: 'rgba(217, 70, 239, 0.1)', 
            borderRadius: '9999px', 
            filter: 'blur(60px)',
            animation: 'pulse 5s ease-in-out infinite',
            animationDelay: '2s'
          }}></div>
        </div>

        {/* Top Navigation Bar */}
        <nav className="glass-effect animate-slide-down" style={{ 
          position: 'sticky', 
          top: 0, 
          zIndex: 50,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <button 
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="btn"
                  style={{ 
                    padding: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '12px',
                    display: 'none'
                  }}
                >
                  <Menu size={24} style={{ color: 'white' }} />
                </button>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div className="glow-effect" style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: '16px', 
                    background: 'linear-gradient(to bottom right, rgb(139, 92, 246), rgb(168, 85, 247))', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center'
                  }}>
                    <Wallet size={24} style={{ color: 'white' }} />
                  </div>
                  <div>
                    <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', margin: 0 }}>FinTrack</h1>
                    <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0 }}>Smart Money Manager</p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div className="glass-effect" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  padding: '10px 16px', 
                  borderRadius: '12px'
                }}>
                  <Search size={18} style={{ color: '#94a3b8' }} />
                  <input 
                    type="text" 
                    placeholder="Search transactions..."
                    style={{ 
                      background: 'transparent', 
                      border: 'none', 
                      outline: 'none', 
                      color: 'white',
                      width: '256px',
                      fontSize: '14px'
                    }}
                  />
                </div>

                <button className="btn" style={{ 
                  position: 'relative',
                  padding: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px'
                }}>
                  <Bell size={22} style={{ color: 'white' }} />
                  <span style={{ 
                    position: 'absolute', 
                    top: '8px', 
                    right: '8px', 
                    width: '10px', 
                    height: '10px', 
                    background: 'rgb(244, 63, 94)', 
                    borderRadius: '9999px',
                    animation: 'pulse 2s ease-in-out infinite'
                  }}></span>
                </button>

                <button className="btn" style={{ 
                  padding: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px'
                }}>
                  <Settings size={22} style={{ color: 'white' }} />
                </button>

                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '12px', 
                  background: 'linear-gradient(to bottom right, rgb(139, 92, 246), rgb(168, 85, 247))', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  color: 'white',
                  cursor: 'pointer'
                }}>
                  JD
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main style={{ maxWidth: '1600px', margin: '0 auto', padding: '40px 24px', position: 'relative', zIndex: 10 }}>
          
          {/* Stats Overview */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '24px', 
            marginBottom: '40px'
          }}>
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-effect stat-card animate-slide-up"
                style={{ 
                  borderRadius: '24px', 
                  padding: '28px',
                  animationDelay: `${idx * 0.1}s`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div style={{ 
                    padding: '14px', 
                    borderRadius: '16px', 
                    background: stat.color === 'indigo' ? 'linear-gradient(to bottom right, rgb(99, 102, 241), rgb(139, 92, 246))' :
                                stat.color === 'emerald' ? 'linear-gradient(to bottom right, rgb(16, 185, 129), rgb(13, 148, 136))' :
                                stat.color === 'rose' ? 'linear-gradient(to bottom right, rgb(244, 63, 94), rgb(236, 72, 153))' :
                                'linear-gradient(to bottom right, rgb(245, 158, 11), rgb(249, 115, 22))'
                  }}>
                    <stat.icon size={24} style={{ color: 'white' }} />
                  </div>
                  <span style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    fontSize: '14px', 
                    fontWeight: '600', 
                    padding: '6px 12px', 
                    borderRadius: '9999px',
                    background: stat.trend === 'up' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(244, 63, 94, 0.2)',
                    color: stat.trend === 'up' ? 'rgb(52, 211, 153)' : 'rgb(248, 113, 113)'
                  }}>
                    {stat.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    {stat.change}
                  </span>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>{stat.title}</p>
                <p style={{ 
                  color: 'white', 
                  fontSize: '36px', 
                  fontWeight: 'bold',
                  fontFamily: "'Space Mono', monospace",
                  margin: 0
                }}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Wallets Section */}
          <div className="animate-slide-up" style={{ marginBottom: '40px', animationDelay: '0.4s' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <div>
                <h2 style={{ fontSize: '30px', fontWeight: 'bold', color: 'white', marginBottom: '4px' }}>My Wallets</h2>
                <p style={{ color: '#94a3b8', margin: 0 }}>Manage your accounts and cards</p>
              </div>
              <button className="btn glow-effect" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px', 
                padding: '14px 24px', 
                background: 'linear-gradient(to right, rgb(139, 92, 246), rgb(168, 85, 247))', 
                borderRadius: '16px',
                color: 'white',
                fontWeight: '600'
              }}>
                <Plus size={20} />
                <span>Add Wallet</span>
              </button>
            </div>

            <div className="scrollbar-hide" style={{ 
              display: 'flex', 
              gap: '24px', 
              overflowX: 'auto', 
              paddingBottom: '16px'
            }}>
              {wallets.map((wallet, idx) => (
                <div
                  key={idx}
                  className="wallet-card glass-effect"
                  style={{ 
                    borderRadius: '24px', 
                    padding: '28px', 
                    minWidth: '320px',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <div style={{ 
                      padding: '12px', 
                      borderRadius: '12px', 
                      background: `linear-gradient(to bottom right, ${wallet.gradient.includes('violet') ? 'rgb(139, 92, 246), rgb(168, 85, 247)' : 
                                                                     wallet.gradient.includes('emerald') ? 'rgb(16, 185, 129), rgb(13, 148, 136)' :
                                                                     'rgb(249, 115, 22), rgb(244, 63, 94)'})`
                    }}>
                      <wallet.icon size={24} style={{ color: 'white' }} />
                    </div>
                    <span style={{ 
                      fontSize: '12px', 
                      color: '#94a3b8', 
                      fontWeight: '600', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.05em', 
                      padding: '6px 12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '9999px'
                    }}>
                      {wallet.type}
                    </span>
                  </div>
                  <h4 style={{ color: 'white', fontWeight: '600', fontSize: '18px', marginBottom: '12px' }}>{wallet.name}</h4>
                  <p style={{ 
                    color: 'white', 
                    fontSize: '30px', 
                    fontWeight: 'bold',
                    fontFamily: "'Space Mono', monospace",
                    margin: 0
                  }}>
                    ₹{wallet.balance.toLocaleString()}
                  </p>
                  <div style={{ 
                    marginTop: '24px', 
                    paddingTop: '16px', 
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span style={{ color: '#94a3b8', fontSize: '14px' }}>View Details</span>
                    <ChevronRight size={18} style={{ color: '#94a3b8' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transactions & Bills Grid */}
          <div className="animate-slide-up" style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '24px',
            animationDelay: '0.6s'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
              
              {/* Recent Transactions */}
              <div className="glass-effect" style={{ borderRadius: '24px', padding: '28px', gridColumn: 'span 2' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '4px' }}>Recent Activity</h2>
                    <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0 }}>Latest transactions across all accounts</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button className="btn" style={{ padding: '10px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px' }}>
                      <Filter size={18} style={{ color: '#94a3b8' }} />
                    </button>
                    <button style={{ 
                      fontSize: '14px', 
                      color: 'rgb(167, 139, 250)', 
                      fontWeight: '600',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}>
                      View All
                    </button>
                  </div>
                </div>

                <div>
                  {recentTransactions.map((txn, idx) => (
                    <div
                      key={idx}
                      className="transaction-item"
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between', 
                        padding: '16px',
                        borderRadius: '16px',
                        cursor: 'pointer',
                        marginBottom: '8px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ fontSize: '30px' }}>{txn.icon}</div>
                        <div>
                          <p style={{ color: 'white', fontWeight: '600', fontSize: '16px', margin: 0 }}>{txn.title}</p>
                          <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0 }}>{txn.category} • {txn.date}</p>
                        </div>
                      </div>
                      <div>
                        <p style={{ 
                          fontSize: '20px', 
                          fontWeight: 'bold',
                          color: txn.type === 'expense' ? 'rgb(251, 113, 133)' : 'rgb(52, 211, 153)',
                          fontFamily: "'Space Mono', monospace",
                          margin: 0,
                          textAlign: 'right'
                        }}>
                          {txn.type === 'expense' ? '-' : '+'}₹{txn.amount.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Bills */}
              <div className="glass-effect" style={{ borderRadius: '24px', padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.2)' }}>
                    <Calendar size={20} style={{ color: 'rgb(167, 139, 250)' }} />
                  </div>
                  <div>
                    <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0 }}>Upcoming Bills</h2>
                    <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0 }}>3 payments due soon</p>
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  {upcomingBills.map((bill, idx) => (
                    <div
                      key={idx}
                      style={{ 
                        padding: '20px',
                        borderRadius: '16px',
                        marginBottom: '16px',
                        background: bill.priority === 'overdue' ? 'rgba(244, 63, 94, 0.1)' :
                                   bill.priority === 'high' ? 'rgba(245, 158, 11, 0.1)' :
                                   'rgba(255, 255, 255, 0.05)',
                        border: bill.priority === 'overdue' ? '2px solid rgba(244, 63, 94, 0.3)' :
                               bill.priority === 'high' ? '2px solid rgba(245, 158, 11, 0.3)' :
                               '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                        <div>
                          <p style={{ color: 'white', fontWeight: '600', margin: 0 }}>{bill.name}</p>
                          <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0 }}>Due: {bill.due}</p>
                        </div>
                        <button className="btn" style={{ padding: '8px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px' }}>
                          <MoreVertical size={18} style={{ color: '#94a3b8' }} />
                        </button>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <p style={{ 
                          color: 'white', 
                          fontSize: '24px', 
                          fontWeight: 'bold',
                          fontFamily: "'Space Mono', monospace",
                          margin: 0
                        }}>
                          ₹{bill.amount.toLocaleString()}
                        </p>
                        {bill.priority === 'overdue' && (
                          <span style={{ 
                            fontSize: '12px', 
                            color: 'rgb(251, 113, 133)', 
                            fontWeight: '600', 
                            padding: '4px 10px',
                            background: 'rgba(244, 63, 94, 0.2)',
                            borderRadius: '9999px'
                          }}>
                            OVERDUE
                          </span>
                        )}
                        {bill.priority === 'high' && (
                          <span style={{ 
                            fontSize: '12px', 
                            color: 'rgb(251, 191, 36)', 
                            fontWeight: '600', 
                            padding: '4px 10px',
                            background: 'rgba(245, 158, 11, 0.2)',
                            borderRadius: '9999px'
                          }}>
                            {bill.daysLeft} DAY LEFT
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="btn glow-effect" style={{ 
                  width: '100%', 
                  padding: '16px', 
                  background: 'linear-gradient(to right, rgb(139, 92, 246), rgb(168, 85, 247))', 
                  borderRadius: '16px',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  Pay All Bills
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="animate-slide-up" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '16px', 
            marginTop: '40px',
            animationDelay: '0.8s'
          }}>
            {[
              { icon: Plus, label: 'Add Expense', gradient: 'linear-gradient(to bottom right, rgb(244, 63, 94), rgb(236, 72, 153))' },
              { icon: TrendingUp, label: 'Add Income', gradient: 'linear-gradient(to bottom right, rgb(16, 185, 129), rgb(13, 148, 136))' },
              { icon: BarChart3, label: 'Analytics', gradient: 'linear-gradient(to bottom right, rgb(139, 92, 246), rgb(168, 85, 247))' },
              { icon: CreditCard, label: 'Budgets', gradient: 'linear-gradient(to bottom right, rgb(245, 158, 11), rgb(249, 115, 22))' },
            ].map((action, idx) => (
              <div
                key={idx}
                className="glass-effect btn"
                style={{ 
                  borderRadius: '16px', 
                  padding: '24px',
                  cursor: 'pointer'
                }}
              >
                <div className="glow-effect" style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '16px', 
                  background: action.gradient, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '16px',
                  transition: 'transform 0.3s ease'
                }}>
                  <action.icon size={26} style={{ color: 'white' }} />
                </div>
                <p style={{ color: 'white', fontWeight: '600', fontSize: '16px', margin: 0 }}>{action.label}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}