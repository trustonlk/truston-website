export interface ClientOrganization {
  name: string;
  type: string;
  highlight: string;
  logo: string;
  website?: string;
  accent?: string;
}

export interface ClientSector {
  id: string;
  sectorName: string;
  sectorBadge: string;
  description: string;
  organizations: ClientOrganization[];
}

export const VERIFIED_CLIENTS_DATA: ClientSector[] = [
  {
    id: "education",
    sectorName: "Education Institutes",
    sectorBadge: "Higher Ed & Academic",
    description: "Reliable campus networks, computer labs, examination Wi-Fi, and administrative IT infrastructure powering modern education.",
    organizations: [
      {
        name: "ESOFT Metro Campus",
        type: "Private Higher Education Institute",
        highlight: "Branch campus network infrastructure, computer lab systems, and enterprise connectivity.",
        logo: "/images/clients/esoft.jpg",
        website: "https://esoft.lk"
      },
      {
        name: "ESOFT University",
        type: "Tertiary Education Institution",
        highlight: "Enterprise networking, IT peripherals, high-density lecture Wi-Fi, and structured cabling.",
        logo: "/images/clients/esu.png",
        website: "https://www.esu.lk"
      },
      {
        name: "BCAS Campus",
        type: "Academic Institution",
        highlight: "Campus connectivity, managed switch deployments, fiber uplinks, and technical hardware support.",
        logo: "/images/clients/bcas.png",
        website: "https://bcas.lk"
      },
      {
        name: "NIBM University",
        type: "Higher Education Institute",
        highlight: "Internet telephony (VoIP), enterprise IP-PBX communication systems, and campus-wide intercom facility infrastructure.",
        logo: "/images/clients/nibm.png",
        website: "https://nibm.ac.lk"
      },
      {
        name: "Wycherley International School",
        type: "International Academic School",
        highlight: "School campus network infrastructure, administrative IT systems, and classroom connectivity.",
        logo: "/images/clients/wycherley.webp",
        website: "https://wycherley.lk"
      },
      {
        name: "AIBS Campus",
        type: "Higher Education Institute",
        highlight: "Computer and peripherals supply, implementation, and managed IT services.",
        logo: "/images/clients/aibs.png",
        website: "https://aibs.edu.lk"
      },
      {
        name: "Times School of Higher Education",
        type: "Higher Education Institute",
        highlight: "Campus IT infrastructure, computing laboratory equipment supply, and managed hardware support.",
        logo: "/images/clients/times-school.png",
        website: "https://timesschool.lk"
      }
    ]
  },
  {
    id: "corporate",
    sectorName: "Corporate Companies",
    sectorBadge: "Enterprise & Industry",
    description: "Mission-critical corporate networking, secure data routing, AMC managed services, and digital office infrastructure.",
    organizations: [
      {
        name: "Prime Land (Pvt) Ltd",
        type: "Real Estate & Property Development",
        highlight: "Corporate head-office IT systems, high-speed switching hardware, and 24 x 7 managed SLA support.",
        logo: "/images/clients/primelands.png",
        website: "https://primelands.lk"
      },
      {
        name: "Bhoomi Realty (Pvt) Ltd",
        type: "Property & Real Estate Enterprise",
        highlight: "Enterprise network cabling, NAS storage systems, and endpoint hardware maintenance.",
        logo: "/images/clients/bhoomi.jpg",
        website: "https://bhoomirealty.lk"
      },
      {
        name: "Maskpen Labeling (Pvt) Ltd",
        type: "Industrial Manufacturing & Export",
        highlight: "Industrial facility networking, structured cabling, barcode automation networks, and endpoint infrastructure.",
        logo: "/images/clients/markspen.png",
        website: "https://markspengroup.com"
      },
      {
        name: "Wijeya Newspapers Limited",
        type: "National Publishing & Media Group",
        highlight: "High-availability pressroom IT infrastructure, low-latency newsroom network solutions, and technical support.",
        logo: "/images/clients/wijeya.png",
        website: "http://www.wijeyanewspapers.lk"
      },
      {
        name: "Dijital Team",
        type: "Digital Workforce & Technology Services",
        highlight: "Firewall implementation, security consultation, and complete computer and laptop managed services and support.",
        logo: "/images/clients/dijital-team.png",
        website: "https://dijitalteam.com"
      },
      {
        name: "Koobiyo Delivery Service",
        type: "Logistics & Express Courier Network",
        highlight: "Enterprise network infrastructure and network security implementation.",
        logo: "/images/clients/koobiyo.png",
        website: "https://koombiyodelivery.lk"
      }
    ]
  },
  {
    id: "hospitality",
    sectorName: "Hotels & Villas",
    sectorBadge: "Hospitality & Leisure",
    description: "Seamless guest Wi-Fi coverage, IP telephony, CCTV surveillance, and discrete structured infrastructure for luxury properties.",
    organizations: [
      {
        name: "La Muraille Hotel",
        type: "Boutique Luxury Hospitality",
        highlight: "High-speed guest Wi-Fi connectivity, discreet IP surveillance system, and heritage villa telephony.",
        logo: "/images/clients/la-muraille.svg"
      },
      {
        name: "Thema Collection",
        type: "Luxury Eco-Resort & Hotel Chain",
        highlight: "Resort-wide multi-acre campus IT infrastructure, VoIP communication systems, and remote management.",
        logo: "/images/clients/thema-collection.svg",
        website: "https://themacollection.com"
      }
    ]
  }
];

export interface TechPartner {
  name: string;
  category: string;
  logo: string;
  description: string;
  badge?: string;
}

export const TIER1_TECH_PARTNERS: TechPartner[] = [
  {
    name: "Cisco Systems",
    category: "Enterprise Routing & Switching",
    logo: "/images/partners/cisco.svg",
    description: "Catalyst switches, ISR enterprise routers, and secure campus switching fabrics.",
    badge: "Tier-1 Partner"
  },
  {
    name: "Fortinet",
    category: "Next-Gen Cybersecurity",
    logo: "/images/partners/fortinet.svg",
    description: "FortiGate Next-Generation Firewalls, secure SD-WAN, and zero-trust perimeter defense.",
    badge: "Security Tier-1"
  },
  {
    name: "Sophos",
    category: "Endpoint & Gateway Security",
    logo: "/images/partners/sophos.svg",
    description: "Synchronized security, XGS next-gen firewalls, and Intercept X EDR.",
    badge: "Cyber Security"
  },
  {
    name: "SonicWall",
    category: "Unified Threat Management",
    logo: "/images/partners/sonicwall.svg",
    description: "TZ and NSa high-performance firewalls with Capture ATP sandbox protection.",
    badge: "UTM Firewall"
  },
  {
    name: "Ubiquiti UniFi",
    category: "High-Density Wireless & Switching",
    logo: "/images/partners/ubiquiti.svg",
    description: "Enterprise Wi-Fi 6/7 access points, 10G aggregation switches, and cloud-managed gateways.",
    badge: "Certified Deployment"
  },
  {
    name: "HPE Aruba",
    category: "Edge & Campus Infrastructure",
    logo: "/images/partners/aruba.svg",
    description: "CX enterprise switching series, ClearPass network access control, and dynamic segmentation.",
    badge: "Enterprise Edge"
  },
  {
    name: "Ruckus Networks",
    category: "Carrier-Grade Wi-Fi & Switching",
    logo: "/images/partners/ruckus.svg",
    description: "BeamFlex+ adaptive antenna technology, ICX switches, and SmartZone controller.",
    badge: "High-Density Wi-Fi"
  },
  {
    name: "Ruijie Reyee",
    category: "Cloud-Managed Enterprise Networking",
    logo: "/images/partners/ruijie.svg",
    description: "Enterprise switches, hospitality Wi-Fi APs, and cloud-native network management.",
    badge: "Cloud Managed"
  },
  {
    name: "MikroTik",
    category: "ISP & Core Routing Hardware",
    logo: "/images/partners/mikrotik.svg",
    description: "High-throughput RouterBOARD platforms, bandwidth throttling, and carrier-grade BGP routing.",
    badge: "Core Routing"
  },
  {
    name: "Netgear",
    category: "Managed ProAV & Business Switches",
    logo: "/images/partners/netgear.svg",
    description: "M4250/M4300 ProAV AV-over-IP switches and multi-gigabit business networks.",
    badge: "Pro Networking"
  },
  {
    name: "D-Link",
    category: "Commercial Switching & CCTV POE",
    logo: "/images/partners/dlink.svg",
    description: "Smart managed PoE switches, long-range surveillance transmission, and industrial hubs.",
    badge: "Commercial IT"
  },
  {
    name: "Planet Technology",
    category: "Industrial Ethernet & PoE Solutions",
    logo: "/images/partners/planet.png",
    description: "Industrial-grade fiber switches, high-power Ultra PoE, and renewable energy gateways.",
    badge: "Industrial IP"
  },
  {
    name: "Grandstream",
    category: "Unified Communications & VoIP",
    logo: "/images/partners/grandstream.svg",
    description: "UCM IP-PBX appliances, HD IP phones, and facility access control intercoms.",
    badge: "VoIP Telecom"
  },
  {
    name: "Fanvil",
    category: "SIP Intercom & Desktop Telephony",
    logo: "/images/partners/fanvil.png",
    description: "Hospitality SIP phones, industrial emergency intercoms, and paging consoles.",
    badge: "SIP Endpoints"
  },
  {
    name: "Yeastar",
    category: "Cloud & Hybrid IP-PBX Systems",
    logo: "/images/partners/yeastar.svg",
    description: "P-Series PBX systems, Linkus UC softclients, and hotel communication integration.",
    badge: "IP Telephony"
  },
  {
    name: "Synology",
    category: "Network Attached Storage & NVR",
    logo: "/images/partners/synology.svg",
    description: "Enterprise RackStation NAS, multi-tier automated backup, and Surveillance Station.",
    badge: "Storage & Backup"
  },
  {
    name: "Schneider Electric / APC",
    category: "Critical Power & Precision Cooling",
    logo: "/images/partners/schneider.svg",
    description: "Smart-UPS online power protection, modular server rack enclosures, and environmental sensors.",
    badge: "Critical Power"
  },
  {
    name: "CommScope / Systimax",
    category: "Structured Cabling & Fiber Systems",
    logo: "/images/partners/commscope.svg",
    description: "Cat6A shielded copper channels, OM4/OS2 fiber backbones, and patch management.",
    badge: "Standards Compliant"
  },
  {
    name: "Corning",
    category: "Optical Communications & Fiber",
    logo: "/images/partners/corning.svg",
    description: "SMF-28 ultra-low-loss fiber, high-density distribution panels, and fiber enclosures.",
    badge: "Optical Fiber"
  },
  {
    name: "DINTEK Electronic",
    category: "Enterprise Structured Cabling",
    logo: "/images/partners/dintek.png",
    description: "Twisted-pair copper solutions, certified patch panels, and cabling hardware warranties.",
    badge: "Cabling Systems"
  },
  {
    name: "Extell Systems",
    category: "Data & Telecom Infrastructure",
    logo: "/images/partners/extell.svg",
    description: "Cat6/6A network patch cords, keystones, and server cabinet distribution systems.",
    badge: "Telecom Hardware"
  },
  {
    name: "ZKTeco",
    category: "Biometric Access & Time Attendance",
    logo: "/images/partners/zkteco.svg",
    description: "Facial recognition turnstiles, RFID smart card access controllers, and time tracking.",
    badge: "Access Control"
  },
  {
    name: "Dahua Technology",
    category: "Smart Optical & Perimeter Defense",
    logo: "/images/partners/dahua.svg",
    description: "WizSense AI perimeter detection, thermal monitoring, and IP intercom ecosystems.",
    badge: "Smart Security"
  },
  {
    name: "Hikvision",
    category: "IP Surveillance & Video Analytics",
    logo: "/images/partners/hikvision.svg",
    description: "DeepinView AI video analytics, ColorVu 4K low-light surveillance, and NVR arrays.",
    badge: "Security Vision"
  },
  {
    name: "Lenovo",
    category: "Enterprise Servers & Workstations",
    logo: "/images/partners/lenovo.svg",
    description: "ThinkSystem rack servers, high-reliability compute nodes, and business workstations.",
    badge: "Enterprise Compute"
  },
  {
    name: "Dell Technologies",
    category: "Enterprise Servers & Storage",
    logo: "/images/partners/dell.svg",
    description: "PowerEdge rack servers, PowerVault SAN/NAS arrays, and high-availability hypervisors.",
    badge: "Data Center"
  },
  {
    name: "Fluke Networks",
    category: "Rigorous Test & Certification",
    logo: "/images/partners/fluke.svg",
    description: "DSX-8000 CableAnalyzer field testing, OTDR tier-2 fiber diagnostics, and certified warranties.",
    badge: "Certified Testing"
  }
];
