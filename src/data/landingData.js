export const SERVICES = [
  {
    id: "process-automation",
    title: "Process Automation",
    description: "End-to-end workflow automation for your business processes.",
    metrics: "Eliminates manual work",
    iconName: "Cpu"
  },
  {
    id: "n8n-make-development",
    title: "n8n & Make.com Development",
    description: "Powerful workflows, integrations and custom solutions.",
    metrics: "Robust API connections",
    iconName: "Shuffle"
  },
  {
    id: "ai-agents-assistants",
    title: "AI Agents & Assistants",
    description: "AI-powered agents that handle tasks, answer and act.",
    metrics: "24/7 autonomous support",
    iconName: "Bot"
  },
  {
    id: "api-integrations",
    title: "API Integrations",
    description: "Connect any tools, platforms and APIs seamlessly.",
    metrics: "Seamless system sync",
    iconName: "Link2"
  },
  {
    id: "systems-data-architecture",
    title: "Systems & Data Architecture",
    description: "Scalable database structures and data management.",
    metrics: "Single source of truth",
    iconName: "Database"
  }
];

export const PROBLEMS = [
  {
    title: "Repetitive manual tasks",
    description: "Time wasted on repetitive copying and pasting.",
    iconName: "RefreshCw"
  },
  {
    title: "Disconnected tools & data",
    description: "Data silos lead to wasted time, mistakes and delays.",
    iconName: "GitFork"
  },
  {
    title: "No process visibility",
    description: "Difficult to track performance and operational status.",
    iconName: "EyeOff"
  },
  {
    title: "Human errors & delays",
    description: "Manual entry creates typos and delays client response.",
    iconName: "AlertTriangle"
  },
  {
    title: "Wasted time & resources",
    description: "Expensive employee hours spent on low-value admin work.",
    iconName: "Clock"
  }
];

export const PROCESS_STEPS = [
  {
    step: "1",
    phase: "Audit",
    title: "Audit",
    description: "We analyze your processes and tools.",
    iconName: "Search"
  },
  {
    step: "2",
    phase: "Architecture",
    title: "Architecture",
    description: "We design the optimal automation blueprint.",
    iconName: "Network"
  },
  {
    step: "3",
    phase: "Build",
    title: "Build",
    description: "We build and integrate the automation.",
    iconName: "Code2"
  },
  {
    step: "4",
    phase: "Test",
    title: "Test",
    description: "We test everything for reliability.",
    iconName: "FileCheck"
  },
  {
    step: "5",
    phase: "Launch",
    title: "Launch",
    description: "We deploy and make it go live.",
    iconName: "Rocket"
  },
  {
    step: "6",
    phase: "Support",
    title: "Support",
    description: "We monitor, optimize and support.",
    iconName: "Headphones"
  }
];

export const CASE_STUDIES = [
  {
    title: "Telegram booking bot with Airtable",
    iconName: "MessageSquare",
    imageType: "table",
    description: "Automated booking system with payments, reminders and database management.",
    linkText: "View case →",
    techUsed: ["Telegram API", "Airtable", "n8n"]
  },
  {
    title: "AI assistant integrated into Wix",
    iconName: "Bot",
    imageType: "chat",
    description: "Smart AI assistant for lead qualification and customer support automation.",
    linkText: "View case →",
    techUsed: ["OpenAI", "Wix", "Make.com"]
  },
  {
    title: "HubSpot + Gmail + Calendar",
    iconName: "Mail",
    imageType: "flow",
    description: "Automated follow-ups, email sequences and meeting scheduling.",
    linkText: "View case →",
    techUsed: ["HubSpot", "Google Workspace", "Make.com"]
  },
  {
    title: "n8n + Supabase semantic search bot",
    iconName: "Database",
    imageType: "search",
    description: "AI bot for semantic search across documents and internal knowledge base.",
    linkText: "View case →",
    techUsed: ["n8n", "Supabase", "OpenAI"]
  }
];

export const TECH_STACK = [
  { name: "n8n", category: "Core Automation" },
  { name: "Make", category: "Core Automation" },
  { name: "Airtable", category: "Database & Backend" },
  { name: "Supabase", category: "Database & Backend" },
  { name: "OpenAI", category: "Artificial Intelligence" },
  { name: "Google Workspace", category: "Workspace" },
  { name: "HubSpot", category: "CRM" }
];
