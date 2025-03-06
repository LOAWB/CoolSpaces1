import React, { useState } from 'react';

const InteractiveBusinessGuide = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [activeChecklist, setActiveChecklist] = useState(null);
  
  const modules = [
    {
      id: 1,
      title: "Business Foundation",
      icon: "🏢",
      content: [
        {
          subtitle: "Business Name Selection",
          details: [
            "Keep it simple - don't overthink this step",
            "Include 'cleaning' in the name for clarity",
            "Focus on service quality - customers hire based on reputation, not fancy names",
            "Examples: Orange Window Cleaning, [Your City] Cleaning Services"
          ]
        },
        {
          subtitle: "Service Area Selection",
          details: [
            "Start in the area where you live",
            "Better knowledge of routes and neighborhoods",
            "Leverage existing connections for first clients",
            "Works in any area with reasonable population"
          ]
        },
        {
          subtitle: "Legal Structure",
          details: [
            "Form an LLC for liability protection",
            "File through Northwest Registered Agent, Prime Corporate Services, or directly with state",
            "Cost ranges from $50-$800 depending on state",
            "Obtain EIN for business bank account and payment processing"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Software & Insurance",
      icon: "💻",
      content: [
        {
          subtitle: "Essential Software",
          details: [
            "CleanWorks ($97/month): CRM and phone system for lead nurturing",
            "Booking Koala ($57/month): Quote generation and provider management",
            "These systems integrate for seamless operations"
          ]
        },
        {
          subtitle: "Insurance Requirements",
          details: [
            "General liability insurance: $1 million minimum coverage",
            "Cost range: $50-$100/month",
            "Provider options: Next Insurance, Thimble, Hiscox, FoxQuilt",
            "Apply as 'cleaning and janitorial services' with 'zero employees'"
          ]
        },
        {
          subtitle: "Why Insurance Matters",
          details: [
            "Protection if something goes wrong on a job",
            "Required for commercial jobs and contracts",
            "Needed for Google Local Service Ads verification",
            "Backup coverage even when cleaners have their own insurance"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Hiring Cleaners",
      icon: "🧹",
      content: [
        {
          subtitle: "Provider Recruitment Philosophy",
          details: [
            "Cleaners are the lifeblood of your business",
            "Build a roster like a sports team with backups",
            "Screen at least 10 cleaners weekly",
            "Always Be Recruiting - never stop hiring"
          ]
        },
        {
          subtitle: "Key Qualifications",
          details: [
            "Minimum 1 year cleaning experience (no training time)",
            "Reliable transportation (own vehicle required)",
            "Own cleaning equipment and supplies",
            "These requirements maintain profitability"
          ]
        },
        {
          subtitle: "Finding & Paying Cleaners",
          details: [
            "Indeed.com is the primary recruiting platform",
            "Pay rate: $25-$35/hour (40-45% of job value)",
            "Example: $100 job = $40 to cleaner",
            "Market context: Average W2 house cleaner makes $16/hour"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Marketing & Leads",
      icon: "📢",
      content: [
        {
          subtitle: "Google Local Service Ads",
          details: [
            "Priority setup - takes ~2 weeks for verification",
            "Requirements: Insurance verification, background check, 5+ reviews",
            "High-intent leads (already searching for cleaning)",
            "Target: 40-60% lead closure rate"
          ]
        },
        {
          subtitle: "NextDoor & Facebook Groups",
          details: [
            "Join as yourself - people buy from people",
            "Post personal introduction with cleaning business mention",
            "Include wholesome photo (family/pets)",
            "Ask satisfied customers for testimonials in same groups",
            "Leverage 'Keeping up with the Joneses' effect"
          ]
        },
        {
          subtitle: "Additional Lead Channels",
          details: [
            "Partnerships with related service providers",
            "Cold outreach (D7 Lead Finder for commercial contacts)",
            "Referral system with incentives",
            "Blend paid and organic channels to lower acquisition costs"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Sales Strategy",
      icon: "💰",
      content: [
        {
          subtitle: "Sales Process",
          details: [
            "Target closure rate: 50-60%",
            "25% closure = $8,750 revenue (from 100 leads)",
            "50% closure = $17,500 revenue (from same 100 leads)",
            "Follow provided sales script for consistent results"
          ]
        },
        {
          subtitle: "Pricing Strategy",
          details: [
            "First-time deep cleans: Average $350",
            "Regular recurring service: Weekly, bi-weekly, or monthly",
            "Closing <40%: Prices too high",
            "Closing >60%: Prices too low"
          ]
        },
        {
          subtitle: "Customer Acquisition Math",
          details: [
            "CAC (Customer Acquisition Cost) to LTV (Lifetime Value)",
            "Example: 10 leads at $50 each with 50% close rate = $100 CAC",
            "First job profit might be small ($75 on $350 clean)",
            "Lifetime value: $2,000-$4,000 per customer",
            "High initial CAC is acceptable with strong LTV"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Growth Systems",
      icon: "📈",
      content: [
        {
          subtitle: "Three Key Constraints",
          details: [
            "Sales conversion percentage",
            "Provider recruitment and quality",
            "Lead generation volume",
            "Identify which is limiting your growth"
          ]
        },
        {
          subtitle: "Constraint Solutions",
          details: [
            "Closing rate: Follow script, track performance, adjust pricing",
            "Provider constraint: Continuous recruitment (10+ weekly)",
            "Lead constraint: Add multiple channels beyond Google LSA"
          ]
        },
        {
          subtitle: "Commercial Considerations",
          details: [
            "Avoid net-30 payment terms when possible (cash flow risk)",
            "Call clients when sending quotes by email",
            "Commercial jobs require $1-2M insurance coverage",
            "Higher value but different sales approach"
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Brand Building",
      icon: "⭐",
      content: [
        {
          subtitle: "Review Generation",
          details: [
            "Focus platforms: Google Business, Facebook, Thumbtack, local groups",
            "After service: Call personally, then automated follow-up",
            "Higher reviews = higher search ranking and premium pricing",
            "Leads to free organic traffic"
          ]
        },
        {
          subtitle: "Service Windows",
          details: [
            "First clean of day: 1-hour arrival window",
            "Between cleans: 2-hour arrival window",
            "Clear communication about timing",
            "Regular updates to manage expectations"
          ]
        },
        {
          subtitle: "Competitive Advantage",
          details: [
            "Quality consistency across all jobs",
            "Professional, responsive communication",
            "Reliability and punctuality",
            "Accommodating special client requests"
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Seasonal Strategies",
      icon: "🌦️",
      content: [
        {
          subtitle: "Understanding Seasonality",
          details: [
            "Weather impacts on booking patterns",
            "Holiday periods affect scheduling",
            "Winter months typically slower",
            "Prepare for predictable patterns"
          ]
        },
        {
          subtitle: "Advertising Shift",
          details: [
            "Reduce bottom-of-funnel spend during slow seasons (Google LSA)",
            "Increase top-of-funnel marketing (Facebook ads)",
            "Create seasonal special offers",
            "Control impressions rather than relying on search volume"
          ]
        },
        {
          subtitle: "Seasonal Promotions",
          details: [
            "Pre-holiday cleaning specials",
            "Post-holiday refresh services",
            "Spring cleaning packages",
            "Back-to-school specials",
            "New Year refresh offers"
          ]
        }
      ]
    },
    {
      id: 9,
      title: "Virtual Assistants",
      icon: "👥",
      content: [
        {
          subtitle: "When & Where to Hire",
          details: [
            "Timing: At $30-40K monthly revenue",
            "Source: OnlineJobs.ph",
            "Starting rate: $6-7 per hour",
            "Interview multiple candidates"
          ]
        },
        {
          subtitle: "VA Responsibilities",
          details: [
            "Sales calls and lead management",
            "Customer follow-up",
            "Schedule coordination",
            "Cleaner communication",
            "Admin tasks and reporting"
          ]
        },
        {
          subtitle: "Management System",
          details: [
            "Daily 15-minute huddles",
            "End-of-day reports (calls, closures, revenue)",
            "Weekly 30-minute performance reviews",
            "2-3 sales call analyses weekly",
            "Communication via Slack or Discord"
          ]
        }
      ]
    },
    {
      id: 10,
      title: "Resources & Tools",
      icon: "🛠️",
      content: [
        {
          subtitle: "Software Resources",
          details: [
            "CleanWorks: CRM & phone system",
            "Booking Koala: Management software",
            "D7 Lead Finder: Commercial lead generation"
          ]
        },
        {
          subtitle: "Business Setup",
          details: [
            "Northwest Registered Agent: LLC filing",
            "Prime Corporate Services: Business formation",
            "State websites for direct filing"
          ]
        },
        {
          subtitle: "Insurance Providers",
          details: [
            "Next Insurance",
            "Thimble",
            "Hiscox",
            "FoxQuilt"
          ]
        }
      ]
    }
  ];
  
  const checklists = [
    {
      id: 1,
      title: "Startup Checklist",
      items: [
        { text: "Select business name with 'cleaning' in it", completed: false },
        { text: "Define service area (your local area)", completed: false },
        { text: "File LLC documentation", completed: false },
        { text: "Obtain EIN number", completed: false },
        { text: "Set up business bank account", completed: false },
        { text: "Purchase general liability insurance ($1M)", completed: false },
        { text: "Set up CleanWorks account ($97/month)", completed: false },
        { text: "Set up Booking Koala ($57/month)", completed: false },
        { text: "Create Indeed job posting for cleaners", completed: false },
        { text: "Screen at least 10 cleaners", completed: false }
      ]
    },
    {
      id: 2,
      title: "Marketing Checklist",
      items: [
        { text: "Set up Google Local Service Ads", completed: false },
        { text: "Join 5+ local Facebook/NextDoor groups", completed: false },
        { text: "Create personal introduction post", completed: false },
        { text: "Set up review request automation", completed: false },
        { text: "Create referral incentive system", completed: false },
        { text: "Develop standard service delivery protocol", completed: false },
        { text: "Prepare holiday/seasonal promotion templates", completed: false },
        { text: "Set up lead source tracking", completed: false }
      ]
    },
    {
      id: 3,
      title: "Growth Checklist",
      items: [
        { text: "Track close rate (target: 50-60%)", completed: false },
        { text: "Maintain weekly cleaner recruiting (10+ per week)", completed: false },
        { text: "Set up multi-channel lead generation", completed: false },
        { text: "Create commercial client package", completed: false },
        { text: "Develop seasonal marketing calendar", completed: false },
        { text: "Implement client rebooking system", completed: false },
        { text: "Create post-service review request process", completed: false },
        { text: "Create VA hiring process (for $30K+ revenue)", completed: false },
        { text: "Develop VA training materials and systems", completed: false }
      ]
    },
    {
      id: 4,
      title: "Key Performance Indicators",
      items: [
        { text: "Cleaner pay: 40-50% of job value", completed: false },
        { text: "Sales close rate: 50-60%", completed: false },
        { text: "Net profit margin: 30-40%", completed: false },
        { text: "Customer lifetime value: $2,000-$4,000", completed: false },
        { text: "First-time deep clean: ~$350 average", completed: false },
        { text: "Customer acquisition cost: Under $150", completed: false },
        { text: "3:1 cash collected to acquisition cost", completed: false },
        { text: "50+ Google reviews (first year)", completed: false }
      ]
    }
  ];

  // Toggle function for modules
  const toggleModule = (id) => {
    if (activeModule === id) {
      setActiveModule(null);
    } else {
      setActiveModule(id);
      setActiveChecklist(null);
    }
  };

  // Toggle function for checklists
  const toggleChecklist = (id) => {
    if (activeChecklist === id) {
      setActiveChecklist(null);
    } else {
      setActiveChecklist(id);
      setActiveModule(null);
    }
  };

  // Toggle function for checklist items
  const toggleChecklistItem = (checklistId, itemIndex) => {
    setActiveChecklist(prevState => {
      return prevState;
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Remote Cleaning Business Guide</h1>
          <p className="text-gray-600 text-lg">Complete System to Build a $1M+ Business</p>
        </div>
        
        {/* Modules Row */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Learning Modules</h2>
          <div className="flex overflow-x-auto pb-4 gap-4">
            {modules.map(module => (
              <div 
                key={module.id}
                className={`flex-shrink-0 w-40 h-40 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${activeModule === module.id ? 'bg-blue-600 text-white' : 'bg-white hover:bg-blue-50'}`}
                onClick={() => toggleModule(module.id)}
              >
                <div className="text-4xl mb-2">{module.icon}</div>
                <div className="text-center font-medium px-2">{module.title}</div>
                <div className="text-xs mt-2">{activeModule === module.id ? 'Click to close' : 'Click to view'}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Checklists Row */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Checklists</h2>
          <div className="flex overflow-x-auto pb-4 gap-4">
            {checklists.map(checklist => (
              <div 
                key={checklist.id}
                className={`flex-shrink-0 w-40 h-40 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${activeChecklist === checklist.id ? 'bg-green-600 text-white' : 'bg-white hover:bg-green-50'}`}
                onClick={() => toggleChecklist(checklist.id)}
              >
                <div className="text-4xl mb-2">✓</div>
                <div className="text-center font-medium px-2">{checklist.title}</div>
                <div className="text-xs mt-2">{activeChecklist === checklist.id ? 'Click to close' : 'Click to view'}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Content Display Area */}
        {activeModule && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-3">{modules[activeModule-1].icon}</div>
              <h2 className="text-2xl font-bold text-gray-800">{modules[activeModule-1].title}</h2>
            </div>
            
            <div className="space-y-6">
              {modules[activeModule-1].content.map((section, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">{section.subtitle}</h3>
                  <ul className="space-y-2">
                    {section.details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeChecklist && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6 transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{checklists[activeChecklist-1].title}</h2>
            
            <div className="space-y-3">
              {checklists[activeChecklist-1].items.map((item, idx) => (
                <div key={idx} className="flex items-center p-2 hover:bg-gray-50 rounded">
                  <input 
                    type="checkbox" 
                    className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mr-3 cursor-pointer"
                    id={`checklist-${activeChecklist}-item-${idx}`}
                    checked={item.completed}
                    onChange={() => toggleChecklistItem(activeChecklist, idx)}
                  />
                  <label 
                    htmlFor={`checklist-${activeChecklist}-item-${idx}`}
                    className="text-gray-700 cursor-pointer"
                  >
                    {item.text}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {!activeModule && !activeChecklist && (
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h2 className="text-xl text-gray-700 mb-3">Get Started</h2>
            <p className="text-gray-600">Click on any module or checklist above to view detailed information and track your progress.</p>
          </div>
        )}
        
        {/* Revenue Milestones */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Revenue Milestones</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-4 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"></div>
            <div className="p-6">
              <div className="flex justify-between mb-8">
                <div className="text-center">
                  <div className="text-blue-500 font-bold text-lg">Milestone 1</div>
                  <div className="text-2xl font-bold text-gray-800">$10,000</div>
                  <div className="text-sm text-gray-600">Monthly Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-purple-500 font-bold text-lg">Milestone 2</div>
                  <div className="text-2xl font-bold text-gray-800">$30,000</div>
                  <div className="text-sm text-gray-600">Monthly Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-red-500 font-bold text-lg">Milestone 3</div>
                  <div className="text-2xl font-bold text-gray-800">$100,000+</div>
                  <div className="text-sm text-gray-600">Monthly Revenue</div>
                </div>
              </div>
              <div className="text-gray-600 text-sm">
                <p className="mb-2">• At $10K: Focus on cleaner quality and lead generation</p>
                <p className="mb-2">• At $30K: Hire VA and implement systems</p>
                <p>• At $100K: Optimize all constraints and scale operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveBusinessGuide;