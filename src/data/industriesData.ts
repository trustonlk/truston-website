export interface IndustrySector {
  id: string;
  name: string;
  tagline: string;
  description: string;
  keyChallenges: string[];
  trustonSolutions: string[];
  icon: string;
}

export const INDUSTRIES_DATA: IndustrySector[] = [
  {
    id: "corporate",
    name: "Corporate Enterprises",
    tagline: "Resilient Corporate Infrastructure & Business Connectivity",
    description: "Multi-branch corporate offices require uninterrupted connectivity, secure enterprise file exchange, strict endpoint compliance, and seamless collaboration.",
    keyChallenges: [
      "Branch-to-headquarters network latency and bottlenecks",
      "Confidential data exposure and unauthorized endpoint access",
      "High downtime costs during unpredicted system failures",
      "Managing disparate IT vendors and maintenance contracts"
    ],
    trustonSolutions: [
      "High-availability enterprise routing and redundant WAN links",
      "Next-Gen Firewalls, SASE, DLP, and PAM identity controls",
      "Unified PABX telephony and high-definition conference rooms",
      "Comprehensive Annual Managed Services Contracts (AMC)"
    ],
    icon: "Building2"
  },
  {
    id: "education",
    name: "Educational Institutes",
    tagline: "High-Density Campus Networks & Learning Infrastructure",
    description: "Universities, campuses, and international schools require high-concurrency student Wi-Fi, secure laboratory networks, examination integrity, and administrative reliability.",
    keyChallenges: [
      "Surging Wi-Fi demand across lecture halls and outdoor common areas",
      "Network saturation during online exams and admissions periods",
      "Campus security, student safety, and physical perimeter oversight",
      "Managing computer lab fleets and peripheral equipment wear"
    ],
    trustonSolutions: [
      "High-density Wi-Fi 6 enterprise access points with smart roaming",
      "Bandwidth throttling, content filtering, and student VLAN separation",
      "Campus-wide IP CCTV surveillance and automated perimeter monitoring",
      "Desktop & laptop rental services for seasonal examinations & labs"
    ],
    icon: "GraduationCap"
  },
  {
    id: "hospitality",
    name: "Hotels & Villas",
    tagline: "Flawless Guest Connectivity, PABX & Property Surveillance",
    description: "Luxury resorts, business hotels, and boutique villas demand high-speed guest Wi-Fi coverage with zero dead zones, reliable guest room telephony, and discreet property surveillance.",
    keyChallenges: [
      "Thick concrete walls and sprawling outdoor villa layouts blocking RF signals",
      "Guest dissatisfaction caused by spotty Wi-Fi or slow streaming",
      "Unifying front-desk, housekeeping, and restaurant PABX communications",
      "Protecting guest privacy while securing property perimeters"
    ],
    trustonSolutions: [
      "Discrete in-wall and outdoor weather-rated Wi-Fi access points",
      "High-capacity IP-PBX communication systems with guest billing links",
      "Architectural optical fiber backbones interconnecting remote villas",
      "High-definition night-vision CCTV coverage across resort grounds"
    ],
    icon: "Hotel"
  },
  {
    id: "business-organizations",
    name: "Business Organizations",
    tagline: "Customized Technology Solutions & Managed IT Support",
    description: "Fast-growing businesses, logistics providers, and professional service firms requiring agile, cost-effective infrastructure without maintaining heavy in-house IT overhead.",
    keyChallenges: [
      "High capital expenditure (CapEx) on fast-depreciating hardware",
      "Lack of internal specialized engineers for cyber and network management",
      "Unplanned hardware breakdowns disrupting daily customer transactions",
      "Fragmented data storage with unreliable local backup routines"
    ],
    trustonSolutions: [
      "Flexible device rental options (laptops, PCs, switches, IP phones)",
      "Proactive preventive maintenance and computer/printer repair services",
      "Network Attached Storage (NAS) setups with automated backup policies",
      "Single point of contact for complete hardware and network support"
    ],
    icon: "Briefcase"
  }
];
