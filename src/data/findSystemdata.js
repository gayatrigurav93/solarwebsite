import { Sun, BatteryCharging, Zap } from "lucide-react";
const findSystemData = [
{id: 1,
    icon: Zap,
    img:"/images/ongrid.png",
    title: "On-Grid Solar System",
    subtitle: "Connected to the Electricity Grid",
    description:
      "Generate solar electricity and use it to power your home while staying connected to the main electricity grid. Export excess energy where net metering is available.",
    features: [
      "Reduces electricity bills",
      "No battery required",
      "Ideal for areas with reliable grid supply",
    ],},
{id: 2,
   img:"/images/offgrid.png",
    icon: BatteryCharging,
    title: "Off-Grid Solar System",
    subtitle: "Independent Power Solution",
    description:
      "Generate and store solar energy in batteries to power your home independently, making it suitable for locations with limited or no grid access.",
    features: [
      "Battery storage included",
      "Power during grid outages",
      "Ideal for remote locations",
    ],},
{id: 3,
    icon: Sun,
     img:"/images/hybrid.png",
    title: "Hybrid Solar System",
    subtitle: "The Best of Both Worlds",
    description:
      "Combine solar panels, battery storage and grid connectivity to enjoy flexible power management and backup during electricity outages.",
    features: [
      "Solar and battery backup",
      "Grid connectivity",
      "Flexible energy management",
    ],}
]

export default findSystemData;