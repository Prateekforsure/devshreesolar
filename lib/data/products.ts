// Types
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  price?: string;
  isFeatured?: boolean;
}

// Product Categories
export const categories = [
  { id: "solar-street-lights", name: "Solar Street Lights" },
  { id: "solar-panels", name: "Solar Panels" },
  { id: "solar-inverters", name: "Solar Inverters" },
  { id: "solar-water-heaters", name: "Solar Water Heaters" },
  { id: "solar-home-systems", name: "Solar Home Systems" },
  { id: "solar-garden-lights", name: "Solar Garden Lights" },
];

// Product Data
export const products: Product[] = [
  {
    id: "ssl-premium-30w",
    name: "Premium 30W Solar Street Light",
    category: "solar-street-lights",
    description: "High-performance 30W solar street light with integrated motion sensor and long-lasting battery.",
    image: "Premium 30W Solar Street Light.jpg",
    features: [
      "30W high-efficiency LED lamp",
      "Motion detection with dimming capability",
      "IP65 weather resistance",
      "Remote control operation",
      "3-year warranty"
    ],
    specifications: {
      "Power": "30W",
      "Solar Panel": "18V 45W Monocrystalline",
      "Battery": "12.8V 24Ah LiFePO4",
      "Lumen Output": "4500lm",
      "Color Temperature": "6000K",
      "Working Time": "12-14 hours",
      "Charging Time": "6-8 hours",
      "Mounting Height": "4-6m"
    },
    isFeatured: true
  },
  {
    id: "sp-mono-550w",
    name: "Monocrystalline 550W Solar Panel",
    category: "solar-panels",
    description: "High-efficiency monocrystalline solar panel designed for residential and commercial installations.",
    image: "Monocrystalline 550W Solar Panel.jpg",
    features: [
      "High conversion efficiency",
      "Anti-reflective glass coating",
      "Excellent low-light performance",
      "Robust aluminum frame",
      "PID resistant",
      "25-year performance warranty"
    ],
    specifications: {
      "Power Output": "550W",
      "Cell Type": "Monocrystalline",
      "Efficiency": "21.3%",
      "Operating Temperature": "-40°C to +85°C",
      "Dimensions": "2279 x 1134 x 35mm",
      "Weight": "28kg",
      "Maximum System Voltage": "1500V DC"
    },
    isFeatured: true
  },
  {
    id: "si-hybrid-5kw",
    name: "Hybrid 5kW Solar Inverter",
    category: "solar-inverters",
    description: "Advanced hybrid solar inverter with battery storage capability for on-grid and off-grid applications.",
    image: "Hybrid 5kW Solar Inverter.jpg",
    features: [
      "On-grid and off-grid operation",
      "Battery storage integration",
      "Wi-Fi monitoring",
      "High conversion efficiency",
      "Multiple MPPT trackers",
      "Smart load management"
    ],
    specifications: {
      "Capacity": "5kW",
      "Input Voltage Range": "80-480V DC",
      "AC Output": "220-240V, 50Hz",
      "MPPT Channels": "2",
      "Max. Efficiency": "98.2%",
      "Communication": "Wi-Fi, RS485",
      "Dimensions": "516 x 415 x 180mm",
      "Protection Degree": "IP65"
    },
    isFeatured: true
  },
  {
    id: "swh-evacuated-200l",
    name: "Evacuated Tube 200L Solar Water Heater",
    category: "solar-water-heaters",
    description: "High-performance evacuated tube solar water heater for residential and commercial applications.",
    image: "Evacuated Tube 200L Solar Water Heater.jpg",
    features: [
      "Evacuated tube technology",
      "Excellent heat retention",
      "Anti-freeze protection",
      "Low maintenance design",
      "Auxiliary electric heating",
      "5-year warranty"
    ],
    specifications: {
      "Capacity": "200L",
      "Number of Tubes": "20",
      "Tube Diameter": "58mm",
      "Tube Length": "1800mm",
      "Tank Material": "SUS304 Stainless Steel",
      "Insulation": "55mm PUF",
      "Working Pressure": "0.6MPa",
      "Auxiliary Heating": "2kW"
    },
    isFeatured: true
  },
  {
    id: "shs-premium-1kw",
    name: "Premium 1kW Solar Home System",
    category: "solar-home-systems",
    description: "Complete solar home system with panels, battery, and inverter for residential power needs.",
    image: "premium 1kW Solar Home System.jpeg",
    features: [
      "1kW solar array",
      "Lithium battery storage",
      "Pure sine wave inverter",
      "Smart monitoring system",
      "Load management capability",
      "Quick installation"
    ],
    specifications: {
      "System Capacity": "1kW",
      "Solar Panels": "4 x 250W Monocrystalline",
      "Battery": "48V 50Ah Lithium",
      "Inverter": "1.5kVA Pure Sine Wave",
      "Backup Time": "8-10 hours",
      "Controller": "MPPT 60A",
      "Installation": "Roof/Ground mount options"
    }
  },
  {
    id: "sgl-path-10w",
    name: "Pathway 10W Solar Garden Light",
    category: "solar-garden-lights",
    description: "Elegant solar garden light for pathways and landscaping with dusk-to-dawn operation.",
    image: "https://images.pexels.com/photos/186212/pexels-photo-186212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    features: [
      "10W LED light",
      "Dusk-to-dawn operation",
      "Decorative design",
      "Weatherproof construction",
      "No wiring required",
      "Easy installation"
    ],
    specifications: {
      "Power": "10W",
      "Solar Panel": "5W Polycrystalline",
      "Battery": "3.7V 5200mAh Li-ion",
      "Lumen Output": "1000lm",
      "Color Temperature": "3000K-6000K (adjustable)",
      "Height": "80cm",
      "Material": "Aluminum + Tempered Glass",
      "IP Rating": "IP65"
    }
  },
  {
    id: "ssl-integrated-60w",
    name: "Integrated 60W Solar Street Light",
    category: "solar-street-lights",
    description: "All-in-one solar street light with high brightness and extended battery life.",
    image: "Integrated 60W Solar Street Light.jpg",
    features: [
      "60W high-brightness LED",
      "Integrated design with sleek profile",
      "Smart controller with multiple modes",
      "Motion sensor with radar detection",
      "Anti-theft hardware",
      "5-year warranty"
    ],
    specifications: {
      "Power": "60W",
      "Solar Panel": "25V 90W Monocrystalline",
      "Battery": "25.6V 36Ah LiFePO4",
      "Lumen Output": "9000lm",
      "Color Temperature": "5700K",
      "Working Time": "3 rainy days backup",
      "Mounting Height": "6-8m",
      "Material": "Die-cast aluminum"
    }
  },
  {
    id: "sp-bifacial-600w",
    name: "Bifacial 600W Solar Panel",
    category: "solar-panels",
    description: "Dual-sided solar panel with increased energy yield through backside production.",
    image: "Bifacial 600W Solar Panel.jpg",
    features: [
      "Double-sided power generation",
      "Up to 30% additional yield",
      "Anti-PID technology",
      "Enhanced weak light performance",
      "Salt and ammonia resistance",
      "30-year performance warranty"
    ],
    specifications: {
      "Front Power": "600W",
      "Rear Power Gain": "Up to 30%",
      "Cell Type": "Bifacial Monocrystalline",
      "Front Efficiency": "22.1%",
      "Dimensions": "2384 x 1303 x 35mm",
      "Weight": "32.5kg",
      "Frame": "Anodized aluminum",
      "Backsheet": "Transparent"
    }
  }
];

// Get featured products
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

// Get products by category
export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

// Get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};