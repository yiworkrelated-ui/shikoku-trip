export enum ActivityType {
  Transport = 'TRANSPORT',
  Sightseeing = 'SIGHTSEEING',
  Dining = 'DINING',
  Hotel = 'HOTEL',
  Shopping = 'SHOPPING',
}

export interface ItineraryItem {
  id: string;
  time: string;
  title: string;
  location: string; // The raw address or search query
  type: ActivityType;
  notes?: string;
  url?: string; // For things like flight status or restaurant links
  // AI Enriched fields
  aiDescription?: string;
  mustEat?: string[];
  mustBuy?: string[];
  tips?: string[];
  // Manually added rich content for popup
  detailedInfo?: {
    title: string;
    content: string;
  }[];
}

export interface DailyItinerary {
  date: string;
  displayDate: string; // e.g., "12/20 (Sat)"
  region: string; // e.g., "Tokushima" or "Takamatsu"
  items: ItineraryItem[];
  weather?: string; // To be filled by AI or mock
  temperature?: string;
}

export interface FlightInfo {
  code: string;
  from: string;
  to: string;
  depTime: string;
  arrTime: string;
  date: string;
  terminal: string;
}

export interface AccommodationInfo {
  name: string;
  dates: string;
  address: string;
  phone?: string;
}