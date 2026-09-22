export interface ProcessStep {
  step: string;
  name: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export const SERVICE_PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    name: "Consultation",
    subtitle: "Understanding Your Needs",
    description: "Comprehensive discovery sessions assessing your existing IT posture, branch network topology, bandwidth requirements, security risks, and operational objectives.",
    deliverables: [
      "Physical site survey & pathway evaluation",
      "Network bandwidth & user concurrency analysis",
      "Cybersecurity vulnerability & posture check",
      "Budget alignment & lifecycle planning"
    ],
    icon: "Compass"
  },
  {
    step: "02",
    name: "Design",
    subtitle: "Tailored Solution Architecture",
    description: "Our certified engineers engineer a custom, scalable blueprint. From core routing topology and SASE firewall policies to structured rack layout and optical links.",
    deliverables: [
      "High-level and low-level architectural schematics",
      "Itemized hardware Bill of Materials (BOM)",
      "Redundancy & failover routing architecture",
      "Deployment milestones & safety protocols"
    ],
    icon: "Layers"
  },
  {
    step: "03",
    name: "Implementation",
    subtitle: "Expert Deployment",
    description: "Execution by certified engineers following rigorous ISO installation guidelines. We handle structured cable laying, rack mounting, server room setup, switch/router config, and surveillance integration.",
    deliverables: [
      "ISO-compliant fiber splicing & structured cabling",
      "Core switch, router, and access point commissioning",
      "Firewall rule configuration & endpoint agent rollout",
      "Minimal disruption cutover scheduling"
    ],
    icon: "Cpu"
  },
  {
    step: "04",
    name: "Testing",
    subtitle: "Quality Assurance",
    description: "Rigorous stress-testing and quality verification before sign-off. We perform Fluke DTX/DSX channel certification, throughput benchmarking, failover drills, and security penetration checks.",
    deliverables: [
      "Fluke certification test reports per cable drop",
      "Network throughput, packet loss & latency audits",
      "Power failure cutover & UPS runtime verification",
      "Formal stakeholder acceptance walkthrough"
    ],
    icon: "FileCheck"
  },
  {
    step: "05",
    name: "Support",
    subtitle: "Ongoing Maintenance",
    description: "Continuous operational assurance. We provide 24 x 7 dedicated emergency support, scheduled preventive maintenance visits, AMC management, hardware repairs, and proactive health checks.",
    deliverables: [
      "24 x 7 emergency NOC escalation access",
      "Scheduled quarterly preventive maintenance",
      "Printer, laptop, and hardware peripheral servicing",
      "Warranty tracking and rapid hardware replacement"
    ],
    icon: "LifeBuoy"
  }
];

export const WHY_CHOOSE_TRUSTON_DATA = [
  {
    number: "01",
    title: "Certified & Experienced Engineers",
    description: "Our team comprises certified professionals with extensive experience in implementing and supporting complex IT infrastructure projects. We invest in continuous training to stay ahead of technology trends.",
    badge: "Industry Certified",
    icon: "Award"
  },
  {
    number: "02",
    title: "24 x 7 Service Support",
    description: "We provide round-the-clock support to ensure your business operations remain uninterrupted, with dedicated engineers ready to handle any situation at any time.",
    badge: "Always Online",
    icon: "Clock"
  },
  {
    number: "03",
    title: "End-to-End Solutions",
    description: "From initial consultation and design to implementation and ongoing support, we manage every aspect of your IT infrastructure needs as a single point of contact.",
    badge: "Complete Lifecycle",
    icon: "Infinity"
  },
  {
    number: "04",
    title: "Quality and Compliance",
    description: "All our installations and services adhere to international ISO standards, ensuring the highest quality, reliability, and compliance with industry best practices.",
    badge: "ISO Compliant",
    icon: "ShieldCheck"
  },
  {
    number: "05",
    title: "Proven Track Record",
    description: "We have successfully delivered solutions to leading organizations across higher education, real estate, hospitality, and corporate manufacturing in Sri Lanka.",
    badge: "Verified Deployments",
    icon: "TrendingUp"
  },
  {
    number: "06",
    title: "Customized Solutions",
    description: "We understand that every organization is unique. Our solutions are tailored to meet your specific business requirements, budget constraints, and scalability needs.",
    badge: "Tailored Architecture",
    icon: "Sliders"
  },
  {
    number: "07",
    title: "Competitive Pricing",
    description: "We offer transparent, competitive pricing with flexible payment options including project-based capex, annual AMC contracts, and device rental arrangements.",
    badge: "Flexible Arrangements",
    icon: "DollarSign"
  }
];
