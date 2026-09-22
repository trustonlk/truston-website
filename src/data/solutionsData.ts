export interface SolutionItem {
  id: string;
  number: string;
  code: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  accentColor: string;
  icon: string;
  features: string[];
  businessValue: string;
  technicalDetails: {
    title: string;
    items: string[];
  }[];
}

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "network-solutions",
    number: "01",
    code: "NET-INFRA",
    title: "Network Solutions",
    shortDesc: "Complete network infrastructure solutions designed to ensure seamless connectivity, maximum uptime, and optimal performance.",
    fullDesc: "Truston provides end-to-end enterprise networking solutions—from high-level architecture and hardware procurement to configuration, deployment, and precision performance tuning. We ensure your corporate network handles mission-critical bandwidth demands reliably.",
    accentColor: "#0A1C9A",
    icon: "Network",
    features: [
      "High-level solution design for corporate networks",
      "Wired and wireless enterprise network deployments",
      "Enterprise-grade switches, routers, and access points",
      "Total network architecture and commissioning",
      "Network optimization and traffic performance tuning"
    ],
    businessValue: "Eliminates network latency, prevents costly outages, and scales easily as your organization expands across branches.",
    technicalDetails: [
      {
        title: "Architecture & Design",
        items: [
          "Core, distribution, and access layer design",
          "VLAN segmentation & QoS prioritization",
          "High-availability redundant routing protocols",
          "Multi-WAN failover & load balancing"
        ]
      },
      {
        title: "Hardware Integration",
        items: [
          "Layer 2/3 Managed Switches",
          "Enterprise Core Routers",
          "High-Density Wi-Fi 6/6E Access Points",
          "Centralized Cloud & On-Premises Controllers"
        ]
      }
    ]
  },
  {
    id: "security-solutions",
    number: "02",
    code: "CYBER-SEC",
    title: "Security Solutions",
    shortDesc: "Comprehensive enterprise security solutions safeguarding data, networks, and endpoints against modern cyber threats.",
    fullDesc: "Safeguard your organization with layered cyber defense architectures. Truston delivers perimeter firewalls, zero-trust network access, endpoint protection, and proactive network monitoring to ensure data integrity and compliance.",
    accentColor: "#00B048",
    icon: "ShieldCheck",
    features: [
      "Advanced next-generation network firewalls",
      "SASE (Secure Access Service Edge) implementation",
      "Endpoint security & zero-day threat defense",
      "DLP (Data Loss Prevention) systems",
      "PAM (Privileged Access Management)",
      "Network monitoring tools and threat detection"
    ],
    businessValue: "Mitigates security breaches, preserves corporate reputation, and enforces strict access policies across all organizational endpoints.",
    technicalDetails: [
      {
        title: "Perimeter & Zero-Trust",
        items: [
          "Next-Gen Firewall (NGFW) deployment",
          "Secure Access Service Edge (SASE) architecture",
          "Intrusion Prevention Systems (IPS/IDS)",
          "Encrypted VPN tunneling with MFA"
        ]
      },
      {
        title: "Data & Identity Governance",
        items: [
          "Data Loss Prevention (DLP) across endpoints and networks",
          "Privileged Access Management (PAM) for administrative roles",
          "Behavioral anomaly detection",
          "Real-time security telemetry & alerts"
        ]
      }
    ]
  },
  {
    id: "elv-solutions",
    number: "03",
    code: "ELV-SYS",
    title: "ELV Solutions",
    shortDesc: "Extra Low Voltage communication, telephony, and surveillance systems engineered for operational efficiency and safety.",
    fullDesc: "Truston designs and installs integrated Extra Low Voltage (ELV) solutions, bringing together IP telephony, call center communication platforms, and intelligent CCTV surveillance into a cohesive corporate facility system.",
    accentColor: "#1E3AEB",
    icon: "PhoneCall",
    features: [
      "PABX (Private Automatic Branch Exchange) systems",
      "Enterprise call center solutions & interactive IVR",
      "CCTV & comprehensive IP surveillance systems",
      "Unified facility security monitoring"
    ],
    businessValue: "Streamlines customer support operations, reduces intra-office telephony expenses, and secures corporate premises with crystal-clear visual monitoring.",
    technicalDetails: [
      {
        title: "Telephony & Contact Centers",
        items: [
          "IP-PBX & Hybrid PBX deployment",
          "SIP trunking & multi-branch extension routing",
          "Call recording, queuing, and agent analytics",
          "CRM integration for contact center desks"
        ]
      },
      {
        title: "Visual Surveillance & Monitoring",
        items: [
          "High-definition IP network cameras",
          "Network Video Recorders (NVR) with RAID storage",
          "Night-vision & perimeter analytics",
          "Centralized multi-site monitoring dashboards"
        ]
      }
    ]
  },
  {
    id: "smart-datacenter",
    number: "04",
    code: "DC-FACILITY",
    title: "Smart Data Center Solutions",
    shortDesc: "Resilient, scalable data center and server room environments engineered for continuous uptime and energy efficiency.",
    fullDesc: "From server room setup to complete data center facility architecture, Truston deploys high-density compute rooms equipped with precision cooling, resilient power distribution, structured rack organization, and cable containment.",
    accentColor: "#05126B",
    icon: "Server",
    features: [
      "Data center design and physical architecture",
      "Server room setup and density optimization",
      "Precision cooling and thermal containment",
      "Power management systems & clean UPS feeds",
      "Rack installation and structured cable management"
    ],
    businessValue: "Prevents hardware overheating, maximizes physical footprint efficiency, and ensures critical compute systems remain powered and online 24 x 7.",
    technicalDetails: [
      {
        title: "Physical Infrastructure",
        items: [
          "Modular 42U/48U server racks & patch enclosures",
          "Hot and cold aisle containment",
          "Overhead cable raceways and raised floor routing",
          "Environmental sensors (temp, humidity, water leak)"
        ]
      },
      {
        title: "Power & Cooling Architecture",
        items: [
          "Precision In-Row / Perimeter cooling units",
          "Redundant UPS power backup systems",
          "Intelligent Power Distribution Units (iPDUs)",
          "Emergency power cutover integration"
        ]
      }
    ]
  },
  {
    id: "cabling-solutions",
    number: "05",
    code: "OPTIC-CAB",
    title: "Cabling Solutions",
    shortDesc: "ISO-standard compliant structured cabling and fiber optic infrastructure built for multi-gigabit throughput and longevity.",
    fullDesc: "The physical transmission layer is the backbone of all digital operations. Truston executes professional fiber optic cable laying, precision fusion splicing, and certified copper installations conforming strictly to international ISO standards.",
    accentColor: "#00E65C",
    icon: "Cable",
    features: [
      "Fiber optic cable laying and precision termination",
      "Copper cabling installations (Cat5e, Cat6, Cat6a)",
      "Total end-to-end structured cabling solutions",
      "ISO-standard compliant installations and testing"
    ],
    businessValue: "Guarantees signal integrity, minimizes packet attenuation, eliminates interference, and establishes a 10-to-15 year future-proof physical network layer.",
    technicalDetails: [
      {
        title: "Fiber Optic Capabilities",
        items: [
          "Single-mode (OS2) and Multi-mode (OM3/OM4/OM5)",
          "Core-alignment fusion splicing",
          "OTDR trace testing and decibel loss verification",
          "Fiber patch panels, distribution boxes & pigtails"
        ]
      },
      {
        title: "Structured Copper Cabling",
        items: [
          "Cat6 & Cat6A UTP / STP horizontal cabling",
          "High-density patch panels & modular jacks",
          "Cable pathway management, conduits & cable trays",
          "Fluke DTX/DSX channel & permanent link certification"
        ]
      }
    ]
  },
  {
    id: "managed-services",
    number: "06",
    code: "MGD-OPS",
    title: "Managed Services",
    shortDesc: "Annual maintenance contracts (AMC) and proactive technical support ensuring uninterrupted operational continuity.",
    fullDesc: "Eliminate IT headaches with Truston’s comprehensive managed services. We handle preventive maintenance, rapid hardware repairs for computers, laptops, and printers, warranty claim management, and scheduled system health checks.",
    accentColor: "#0A1C9A",
    icon: "Headphones",
    features: [
      "Annual Managed Services Contracts (AMC)",
      "Printer, laptop, and desktop computer repair services",
      "Enterprise warranty management & RMA handling",
      "Total IT peripheral device servicing",
      "Proactive preventive maintenance programs"
    ],
    businessValue: "Reduces surprise downtime expenses, extends hardware lifespan, and frees internal teams to focus entirely on core business growth.",
    technicalDetails: [
      {
        title: "Preventive Care",
        items: [
          "Scheduled bi-monthly / quarterly hardware cleanings",
          "Thermal paste renewal & fan health inspections",
          "Firmware updates & system diagnostic logs",
          "Proactive component wear identification"
        ]
      },
      {
        title: "Rapid Repair & Maintenance",
        items: [
          "Component-level motherboards, power supplies, and logic boards",
          "Display panel replacements & mechanical repairs",
          "Printer fuser, roller, and printhead overhauls",
          "Dedicated spare parts buffer inventory"
        ]
      }
    ]
  },
  {
    id: "device-rental",
    number: "07",
    code: "RENT-FLEET",
    title: "Device Rental Services",
    shortDesc: "Flexible short-term and long-term equipment rentals for projects, seasonal spikes, conferences, and rapid scaling.",
    fullDesc: "Avoid large upfront capital expenditure with Truston’s enterprise device rental fleet. We provide certified enterprise laptops, desktop workstations, IP phones, switches, and routers with immediate configuration and support.",
    accentColor: "#008535",
    icon: "Laptop",
    features: [
      "Enterprise IP phones for temporary setups",
      "High-performance laptops and desktop computers",
      "Enterprise network switches and routers",
      "Flexible short-term and long-term rental agreements"
    ],
    businessValue: "Provides immediate equipment provisioning with zero capital lock-in, fully supported and maintained under our operational umbrella.",
    technicalDetails: [
      {
        title: "Available Equipment",
        items: [
          "Enterprise Laptops (Intel Core i5/i7, 16GB-32GB RAM)",
          "Workstation Desktops & High-Res Monitors",
          "Gigabit Managed PoE Switches & Core Routers",
          "HD Audio SIP/IP Phones with PoE"
        ]
      },
      {
        title: "Rental Terms & Support",
        items: [
          "Project-based daily, weekly, or monthly leases",
          "Annual long-term enterprise fleet contracts",
          "Pre-configured with customized client software image",
          "Hot-swap replacement guarantee during rental term"
        ]
      }
    ]
  }
];
