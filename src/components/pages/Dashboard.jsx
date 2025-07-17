
import React, { useState, useEffect } from 'react';
import {
    Search,
    Files,
    Inbox,
    Clock,
    Plus,
    Filter,
    Calendar,
    MoreHorizontal,
    Users,
    Settings
} from 'lucide-react';

const Dashboard = () => {
    const [activeView, setActiveView] = useState('List View');
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const maxScroll = 1000; // Maximum scroll distance for full rotation
            const progress = Math.min(scrollTop / maxScroll, 1);
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sidebarItems = [
        { icon: Search, label: 'Search', active: false },
        { icon: Files, label: 'Files', active: false },
        { icon: Inbox, label: 'Inbox', active: false },
        { icon: Clock, label: 'Time tracking', active: false },
    ];

    const projectCards = [
        {
            id: 1,
            title: 'Paperwork and administration',
            description: 'Here you can find info about your payment information...',
            category: 'General to-dos',
            categoryColor: 'bg-gray-600',
            date: '30 October',
            comments: 1,
            avatar: '/api/placeholder/24/24'
        },
        {
            id: 2,
            title: 'Website goals',
            description: 'Getting with what mobile industry audience is more likely to get converted...',
            category: 'Strategy and Planning',
            categoryColor: 'bg-yellow-600',
            date: '19 October',
            comments: 1,
            avatar: '/api/placeholder/24/24'
        },
        {
            id: 3,
            title: 'First layout & interactions',
            description: '',
            category: 'Design',
            categoryColor: 'bg-blue-600',
            date: '23 October',
            comments: 0,
            avatar: '/api/placeholder/24/24'
        }
    ];

    return (
        <div className="min-h-[200vh] bg-gray-950" style={{ perspective: '2000px' }}>


            <div
                className="flex h-[600px] w-[1000px] mx-auto my-8 bg-black text-white rounded-xl overflow-hidden transition-transform duration-100 ease-out"
                style={{
                    background: 'radial-gradient(ellipse at top, rgba(15, 15, 35, 0.8) 0%, rgba(0, 0, 0, 1) 50%)',
                    transform: `
            rotateX(${75 - scrollProgress * 75}deg) 
            rotateY(${15 - scrollProgress * 15}deg)
            translateZ(${-300 + scrollProgress * 300}px)
            translateY(${100 - scrollProgress * 100}px)
            scale(${0.7 + scrollProgress * 0.3})
          `,
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'center center',
                    boxShadow: `
            0 ${110 - scrollProgress * 80}px ${300 - scrollProgress * 200}px rgba(59, 130, 246, ${0.4 - scrollProgress * 0.25}),
            0 ${55 - scrollProgress * 40}px ${150 - scrollProgress * 100}px rgba(0, 0, 0, ${0.9 - scrollProgress * 0.5}),
            inset 0 0 ${60 - scrollProgress * 40}px rgba(59, 130, 246, ${0.2 - scrollProgress * 0.1})
          `
                }}
            >
                {/* Sidebar */}
                <div className="w-48 bg-gray-900 border-r border-blue-900/30" style={{
                    background: 'linear-gradient(180deg, #0f0f23 0%, #1a1a2e 100%)',
                    boxShadow: 'inset -1px 0 0 rgba(59, 130, 246, 0.1)'
                }}>
                    {/* Header */}
                    <div className="p-3 border-b border-blue-900/20">
                        <div className="flex items-center space-x-2">
                            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                                <span className="text-black text-xs font-bold">A</span>
                            </div>
                            <span className="font-semibold text-sm">Aligno</span>
                        </div>
                    </div>

                    {/* Progress Tracking */}
                    <div className="p-3 border-b border-blue-900/20">
                        <div className="flex items-center space-x-2 text-xs text-gray-400">
                            <Clock size={14} />
                            <span>Progress Tracking</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="p-3">
                        <div className="space-y-1">
                            {sidebarItems.map((item, index) => (
                                <div key={index} className="flex items-center space-x-2 p-1.5 rounded hover:bg-blue-900/20 cursor-pointer transition-colors">
                                    <item.icon size={14} className="text-blue-300/70" />
                                    <span className="text-xs text-gray-300">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Spaces */}
                    <div className="p-3">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-gray-500 uppercase tracking-wide">Spaces</span>
                            <Plus size={12} className="text-gray-500 cursor-pointer" />
                        </div>

                        <div className="space-y-1">
                            <div className="flex items-center space-x-2 p-1.5 rounded cursor-pointer" style={{
                                background: 'rgba(59, 130, 246, 0.1)',
                                boxShadow: '0 0 10px rgba(59, 130, 246, 0.2)'
                            }}>
                                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                                <span className="text-xs">Client</span>
                                <div className="ml-auto">
                                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                                </div>
                            </div>

                            <div className="ml-4 space-y-1">
                                <div className="flex items-center space-x-2 p-1 hover:bg-blue-900/20 rounded cursor-pointer transition-colors">
                                    <div className="w-2 h-2 bg-orange-500 rounded"></div>
                                    <span className="text-xs text-gray-400">Website Sprint</span>
                                </div>
                                <div className="flex items-center space-x-2 p-1 hover:bg-blue-900/20 rounded cursor-pointer transition-colors">
                                    <div className="w-2 h-2 bg-pink-500 rounded"></div>
                                    <span className="text-xs text-gray-400">Social Media Marketing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col">
                    {/* Top Bar */}
                    <div className="h-12 border-b border-blue-900/20 flex items-center justify-between px-4" style={{
                        background: 'linear-gradient(90deg, rgba(15, 15, 35, 0.8) 0%, rgba(26, 26, 46, 0.8) 100%)'
                    }}>
                        <div className="flex items-center space-x-3">
                            <nav className="flex items-center space-x-2 text-xs">
                                <span className="text-gray-400">Client</span>
                                <span className="text-gray-600">›</span>
                                <span className="text-gray-400">Mobile</span>
                                <span className="text-gray-600">›</span>
                                <span className="text-white">Website</span>
                            </nav>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-2">
                                <div className="flex -space-x-1">
                                    <div className="w-6 h-6 bg-orange-500 rounded-full border-2 border-gray-900"></div>
                                    <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-gray-900"></div>
                                    <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900"></div>
                                </div>
                                <span className="text-xs text-gray-400">Invite</span>
                            </div>
                            <Search size={16} className="text-blue-300/70 cursor-pointer hover:text-blue-300 transition-colors" />
                            <MoreHorizontal size={16} className="text-blue-300/70 cursor-pointer hover:text-blue-300 transition-colors" />
                            <button className="bg-orange-600 hover:bg-orange-700 px-3 py-1 rounded-lg text-xs font-medium">
                                Buy Template
                            </button>
                        </div>
                    </div>

                    {/* Content Header */}
                    <div className="p-4 border-b border-blue-900/20" style={{
                        background: 'linear-gradient(180deg, rgba(15, 15, 35, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%)'
                    }}>
                        <h1 className="text-xl font-bold mb-3">Website</h1>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-3">
                                    <button
                                        className={`px-2 py-1 text-xs rounded ${activeView === 'List View' ? 'bg-orange-600 text-white' : 'text-gray-400 hover:text-white'}`}
                                        onClick={() => setActiveView('List View')}
                                    >
                                        ≡ List View
                                    </button>
                                    <button
                                        className={`px-2 py-1 text-xs rounded ${activeView === 'Kanban' ? 'bg-orange-600 text-white' : 'text-gray-400 hover:text-white'}`}
                                        onClick={() => setActiveView('Kanban')}
                                    >
                                        ⊞ Kanban
                                    </button>
                                    <button
                                        className={`px-2 py-1 text-xs rounded ${activeView === 'Calendar' ? 'bg-orange-600 text-white' : 'text-gray-400 hover:text-white'}`}
                                        onClick={() => setActiveView('Calendar')}
                                    >
                                        <Calendar size={12} className="inline mr-1" /> Calendar
                                    </button>
                                </div>
                                <span className="text-gray-400 text-xs">+ Add View</span>
                            </div>

                            <div className="flex items-center space-x-2">
                                <button className="flex items-center space-x-1 px-2 py-1 rounded text-xs" style={{
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    border: '1px solid rgba(59, 130, 246, 0.3)'
                                }}>
                                    <Filter size={12} />
                                    <span>Filter (1)</span>
                                </button>
                                <button className="flex items-center space-x-1 px-2 py-1 rounded text-xs" style={{
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    border: '1px solid rgba(59, 130, 246, 0.3)'
                                }}>
                                    <Plus size={12} />
                                    <span>Add Task</span>
                                </button>
                                <button className="flex items-center space-x-1 px-2 py-1 rounded text-xs" style={{
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    border: '1px solid rgba(59, 130, 246, 0.3)'
                                }}>
                                    <Settings size={12} />
                                    <span>Customize</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="flex-1 p-4" style={{
                        background: 'radial-gradient(ellipse at center, rgba(15, 15, 35, 0.8) 0%, rgba(0, 0, 0, 0.95) 70%)'
                    }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {projectCards.map((card) => (
                                <div key={card.id} className="rounded-lg p-3 border transition-all duration-300 hover:scale-105" style={{
                                    background: 'linear-gradient(145deg, rgba(15, 15, 35, 0.8) 0%, rgba(26, 26, 46, 0.6) 100%)',
                                    border: '1px solid rgba(59, 130, 246, 0.2)',
                                    boxShadow: '0 8px 32px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                }}>
                                    {/* Category Badge */}
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center space-x-2">
                                            <div className={`w-2 h-2 rounded-full ${card.categoryColor}`}></div>
                                            <span className="text-xs text-gray-400">{card.category}</span>
                                        </div>
                                        <Plus size={14} className="text-gray-500 cursor-pointer" />
                                    </div>

                                    {/* Card Content */}
                                    <h3 className="font-medium text-white mb-2 text-sm">{card.title}</h3>
                                    {card.description && (
                                        <p className="text-xs text-gray-400 mb-3 line-clamp-2">{card.description}</p>
                                    )}

                                    {/* Card Footer */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-xs text-gray-500">{card.date}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            {card.comments > 0 && (
                                                <span className="text-xs text-gray-500">{card.comments}</span>
                                            )}
                                            <div className="w-5 h-5 bg-orange-500 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Add New Card */}
                            <div className="rounded-lg p-3 border-dashed transition-all duration-300 cursor-pointer flex items-center justify-center min-h-[140px] hover:scale-105" style={{
                                background: 'linear-gradient(145deg, rgba(15, 15, 35, 0.4) 0%, rgba(26, 26, 46, 0.3) 100%)',
                                border: '2px dashed rgba(59, 130, 246, 0.3)',
                                boxShadow: '0 4px 16px rgba(59, 130, 246, 0.05)'
                            }}>
                                <div className="text-center">
                                    <Plus size={20} className="text-blue-400/60 mx-auto mb-2" />
                                    <span className="text-xs text-blue-300/70">Add new task</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;