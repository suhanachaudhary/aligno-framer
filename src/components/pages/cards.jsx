

import React from 'react';

const Cards = () => {
    // Team member data with subtle color hints
    const teamMembers = [
        {
            id: 1,
            name: "Emily Carter",
            role: "UI/UX Designer",
            quote: "Streamlined all our processes, saving us hours daily.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face",
            colorHint: "rgba(0, 150, 136, 0.15)", // Very subtle teal
            socialLinks: {
                instagram: "#",
                facebook: "#",
                twitter: "#"
            }
        },
        {
            id: 2,
            name: "Daisy M",
            role: "Brand and stuff",
            quote: "Incredibly intuitive and boosted team productivity immediately.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
            colorHint: "rgba(139, 69, 19, 0.12)", // Very subtle brown
            socialLinks: {
                instagram: "#",
                facebook: "#",
                twitter: "#"
            }
        },
        {
            id: 3,
            name: "Sarah Johnson",
            role: "Developers",
            quote: "Aligno transformed our project management efficiency!",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face",
            colorHint: "rgba(147, 51, 234, 0.12)", // Very subtle purple
            socialLinks: {
                instagram: "#",
                facebook: "#",
                twitter: "#"
            }
        },
        {
            id: 4,
            name: "Emily Carter",
            role: "BuyersEdge",
            quote: "Streamlined all our processes, saving us hours daily.",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop&crop=face",
            colorHint: "rgba(6, 182, 212, 0.10)", // Very subtle cyan
            socialLinks: {
                instagram: "#",
                facebook: "#",
                twitter: "#"
            }
        },
        {
            id: 5,
            name: "Daisy M",
            role: "Brand and stuff",
            quote: "Incredibly intuitive and boosted team productivity immediately.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face",
            colorHint: "rgba(75, 85, 99, 0.08)", // Very subtle gray
            socialLinks: {
                instagram: "#",
                facebook: "#",
                twitter: "#"
            }
        }
    ];

    // Duplicate array for infinite scroll
    const infiniteTeamMembers = [...teamMembers, ...teamMembers, ...teamMembers];

    return (
        <div className="bg-gray-900 py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Meet our{' '}
                        <span
                            className="italic font-serif"
                            style={{
                                background: 'linear-gradient(45deg, #ff6b6b, #ffa8a8, #ffe066)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            Team
                        </span>
                    </h2>
                </div>

                {/* Slider Container */}
                <div className="relative">
                    {/* Sliding Cards */}
                    <div
                        className="flex space-x-6"
                        style={{
                            animation: 'slideRightToLeft 30s linear infinite',
                            width: 'fit-content'
                        }}
                    >
                        {infiniteTeamMembers.map((member, index) => (
                            <div
                                key={`${member.id}-${index}`}
                                className="flex-shrink-0 w-80 h-96 rounded-2xl relative overflow-hidden group cursor-pointer"
                                style={{
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                                }}
                            >
                                {/* Background Image */}
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Gradient Overlay */}
                                <div
                                    className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
                                    style={{
                                        background: member.gradient
                                    }}
                                />

                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                                    {/* Quote */}
                                    <div className="pt-8">
                                        <p className="text-lg font-medium leading-relaxed">
                                            {member.quote}
                                        </p>
                                    </div>

                                    {/* Bottom Section */}
                                    <div>
                                        {/* Name and Role */}
                                        <div className="mb-4">
                                            <h3 className="text-xl font-bold">{member.name}</h3>
                                            <p className="text-white/80 text-sm">{member.role}</p>
                                        </div>

                                        {/* Social Media Icons */}
                                        <div className="flex space-x-3">
                                            <a
                                                href={member.socialLinks.instagram}
                                                className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                </svg>
                                            </a>

                                            <a
                                                href={member.socialLinks.facebook}
                                                className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                </svg>
                                            </a>

                                            <a
                                                href={member.socialLinks.twitter}
                                                className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        ))}
                    </div>

                    {/* Gradient Fade Edges */}
                    <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
                </div>
            </div>

            {/* CSS Animation */}
            <style jsx>{`
        @keyframes slideRightToLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        /* Pause animation on hover */
        .flex:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};

export default Cards;