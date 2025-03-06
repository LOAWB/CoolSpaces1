// Module data
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

// Checklist data
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

// Track active sections
let activeModule = null;
let activeChecklist = null;

// DOM elements
const moduleContentEl = document.getElementById('moduleContent');
const checklistContentEl = document.getElementById('checklistContent');
const defaultMessageEl = document.getElementById('defaultMessage');

// Toggle module content
function toggleModule(id) {
  // If clicking the same module, close it
  if (activeModule === id) {
    moduleContentEl.classList.add('hidden');
    defaultMessageEl.classList.remove('hidden');
    activeModule = null;
    return;
  }

  // Otherwise, show the module content
  const module = modules.find(m => m.id === id);
  if (!module) return;

  // Update active states
  activeModule = id;
  activeChecklist = null;
  
  // Hide other content areas
  checklistContentEl.classList.add('hidden');
  defaultMessageEl.classList.add('hidden');
  
  // Build module content
  let contentHTML = `
    <div class="flex items-center mb-4">
      <div class="text-3xl mr-3">${module.icon}</div>
      <h2 class="text-2xl font-bold text-gray-800">${module.title}</h2>
    </div>
    
    <div class="space-y-6">
  `;
  
  module.content.forEach(section => {
    contentHTML += `
      <div class="border-l-4 border-blue-500 pl-4">
        <h3 class="font-semibold text-lg text-gray-800 mb-2">${section.subtitle}</h3>
        <ul class="space-y-2">
    `;
    
    section.details.forEach(detail => {
      contentHTML += `
        <li class="flex items-start">
          <span class="text-blue-500 mr-2">•</span>
          <span class="text-gray-700">${detail}</span>
        </li>
      `;
    });
    
    contentHTML += `
        </ul>
      </div>
    `;
  });
  
  contentHTML += `</div>`;
  
  // Display the content
  moduleContentEl.innerHTML = contentHTML;
  moduleContentEl.classList.remove('hidden');
}

// Toggle checklist content
function toggleChecklist(id) {
  // If clicking the same checklist, close it
  if (activeChecklist === id) {
    checklistContentEl.classList.add('hidden');
    defaultMessageEl.classList.remove('hidden');
    activeChecklist = null;
    return;
  }

  // Otherwise, show the checklist content
  const checklist = checklists.find(c => c.id === id);
  if (!checklist) return;

  // Update active states
  activeChecklist = id;
  activeModule = null;
  
  // Hide other content areas
  moduleContentEl.classList.add('hidden');
  defaultMessageEl.classList.add('hidden');
  
  // Build checklist content
  let contentHTML = `
    <h2 class="text-2xl font-bold text-gray-800 mb-4">${checklist.title}</h2>
    <div class="space-y-3">
  `;
  
  checklist.items.forEach((item, idx) => {
    contentHTML += `
      <div class="flex items-center p-2 hover:bg-gray-50 rounded">
        <input 
          type="checkbox" 
          class="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mr-3 cursor-pointer"
          id="checklist-${id}-item-${idx}"
          ${item.completed ? 'checked' : ''}
          onchange="toggleChecklistItem(${id}, ${idx})"
        />
        <label 
          for="checklist-${id}-item-${idx}"
          class="text-gray-700 cursor-pointer"
        >
          ${item.text}
        </label>
      </div>
    `;
  });
  
  contentHTML += `</div>`;
  
  // Display the content
  checklistContentEl.innerHTML = contentHTML;
  checklistContentEl.classList.remove('hidden');
}

// Toggle checklist item completion
function toggleChecklistItem(checklistId, itemIndex) {
  // Find the checklist
  const checklistIndex = checklists.findIndex(c => c.id === checklistId);
  if (checklistIndex === -1) return;
  
  // Toggle the completion status
  checklists[checklistIndex].items[itemIndex].completed = 
    !checklists[checklistIndex].items[itemIndex].completed;
  
  // Save to localStorage
  saveChecklistsToLocalStorage();
}

// Save checklists to localStorage
function saveChecklistsToLocalStorage() {
  localStorage.setItem('cleaningBusinessChecklists', JSON.stringify(checklists));
}

// Load checklists from localStorage
function loadChecklistsFromLocalStorage() {
  const savedChecklists = localStorage.getItem('cleaningBusinessChecklists');
  if (savedChecklists) {
    const parsedChecklists = JSON.parse(savedChecklists);
    
    // Update our checklists with saved completion status
    parsedChecklists.forEach(savedChecklist => {
      const checklistIndex = checklists.findIndex(c => c.id === savedChecklist.id);
      if (checklistIndex !== -1) {
        savedChecklist.items.forEach((item, idx) => {
          if (idx < checklists[checklistIndex].items.length) {
            checklists[checklistIndex].items[idx].completed = item.completed;
          }
        });
      }
    });
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  loadChecklistsFromLocalStorage();
  
  // Add custom styling to cards
  const moduleCards = document.querySelectorAll('.module-card');
  moduleCards.forEach(card => {
    card.classList.add('flex-shrink-0', 'rounded-lg', 'shadow-md', 'flex', 'flex-col', 
                      'items-center', 'justify-center', 'cursor-pointer', 
                      'transition-all', 'duration-200', 'bg-white', 'hover:bg-blue-50',
                      'h-40', 'w-full');
  });
  
  const checklistCards = document.querySelectorAll('.checklist-card');
  checklistCards.forEach(card => {
    card.classList.add('flex-shrink-0', 'rounded-lg', 'shadow-md', 'flex', 'flex-col', 
                      'items-center', 'justify-center', 'cursor-pointer', 
                      'transition-all', 'duration-200', 'bg-white', 'hover:bg-green-50',
                      'h-40', 'w-full');
  });
}); 