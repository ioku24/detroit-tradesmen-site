
import { Match, Player, Staff, HallOfFamer, Sponsor, NewsItem, GearCategory } from './types';

// EXTERNAL LINKS
export const ZEFFY_URL = "https://www.zeffy.com/ticketing/detroit-tradesmen-rugby-dues"; 
export const RUGBY_IMPORTS_URL = "https://www.rugbyimports.com/collections/detroit-tradesmen-rugby-club";
export const AKUMA_URL = RUGBY_IMPORTS_URL; 

export const SCHEDULE: Match[] = [
  // Fall 2025 Season - ARCHIVED
  { id: 'f1', date: "SAT AUG 30", time: "1:00 PM", opponent: "Cincinnati Wolfhounds", location: "Cincinnati, OH", isHome: false, status: 'completed' },
  { id: 'f2', date: "SAT SEP 06", time: "1:00 PM", opponent: "Chicago Griffins", location: "Handy Park, Redford", isHome: true, status: 'completed' },
  { id: 'f3', date: "SAT SEP 13", time: "1:00 PM", opponent: "Indianapolis Impalas", location: "Indianapolis, IN", isHome: false, status: 'completed' },
  { id: 'f4', date: "SAT SEP 20", time: "1:00 PM", opponent: "Pittsburgh Harlequins", location: "Handy Park, Redford", isHome: true, status: 'completed' },
  { id: 'f5', date: "SAT SEP 27", time: "1:00 PM", opponent: "Indianapolis Impalas", location: "Handy Park, Redford", isHome: true, status: 'completed' },
  { id: 'f6', date: "SAT OCT 04", time: "1:00 PM", opponent: "Cincinnati Wolfhounds", location: "Handy Park, Redford", isHome: true, status: 'completed' },
  { id: 'f7', date: "SAT OCT 11", time: "1:00 PM", opponent: "Chicago Griffins", location: "Chicago, IL", isHome: false, status: 'completed' },
  { id: 'f8', date: "SAT OCT 25", time: "1:00 PM", opponent: "Pittsburgh Harlequins", location: "Pittsburgh, PA", isHome: false, status: 'completed' },
  { id: 'f9', date: "SAT NOV 08", time: "TBD", opponent: "Midwest Semi-Finals", location: "TBD", isHome: false, status: 'completed' },
  { id: 'f10', date: "SAT NOV 15", time: "TBD", opponent: "Midwest Final", location: "TBD", isHome: false, status: 'completed' },
];

export const UPCOMING_MATCH = SCHEDULE.find(m => m.status === 'upcoming');

export const STAFF: Staff[] = [
  { id: "staff-1", name: "Seamus Bannon", role: "Head Coach (15s)" },
  { id: "staff-2", name: "Coach Herb", role: "Assistant Coach (15s)" },
  { id: "staff-3", name: "Jack Okoth", role: "Head Coach (7s)" },
  { id: "staff-4", name: "Zack Simkins", role: "Assistant Coach (7s)" },
];

export const ROSTER: Player[] = [
  // FORWARDS - Props
  { id: "1", name: "Aaron Cooch", position: "Prop", division: "D1", group: "forwards", image: "https://ik.imagekit.io/fukntosc3/Aaron%20Cooch.png" },
  { id: "2", name: "David Murray", position: "Prop", division: "D1", group: "forwards", image: "https://ik.imagekit.io/fukntosc3/David%20Murray.png" },
  { id: "3", name: "Bradly Allen", position: "Prop", division: "D1/D3", group: "forwards" },
  { id: "4", name: "Linda Thwala", position: "Prop", division: "D1", group: "forwards" },
  { id: "5", name: "Eric Davis", position: "Prop", division: "D3", nickname: "Bear", group: "forwards" },
  { id: "6", name: "Matthew Maczuga", position: "Prop", division: "D3", nickname: "Tater Tot", group: "forwards" },
  { id: "60", name: "Joe Daman", position: "Prop", division: "D1/D3", group: "forwards", image: "https://ik.imagekit.io/fukntosc3/Joe%20Damon%20.png" },
  
  // FORWARDS - Hookers
  { id: "7", name: "Brandon Asbel", position: "Hooker", division: "D1", group: "forwards" },
  { id: "8", name: "Ryan Koenig", position: "Hooker", division: "D1/D3", group: "forwards" },
  { id: "9", name: "Joshua Kliment", position: "Hooker", division: "D1", group: "forwards" },
  { id: "10", name: "Brent Tobiczyk", position: "Hooker", division: "D3", group: "forwards" },
  { id: "11", name: "Jake Spitler", position: "Hooker", division: "D3", nickname: "Spud", group: "forwards" },
  
  // FORWARDS - Locks
  { id: "12", name: "Mike Gieselman", position: "Lock", division: "D1", nickname: "Goose", group: "forwards", image: "https://ik.imagekit.io/fukntosc3/Goose.png" },
  { id: "13", name: "Tyler Williamson", position: "Lock", division: "D1", group: "forwards" },
  { id: "14", name: "Danny Leatherman", position: "Lock", division: "D1/D3", group: "forwards" },
  { id: "15", name: "Pawel Fadanelli", position: "Lock", division: "D1", group: "forwards" },
  { id: "16", name: "Sam Lilley", position: "Lock", division: "D1/D3", group: "forwards" },
  { id: "17", name: "Eric Jenks", position: "Lock", division: "D3", group: "forwards" },
  
  // FORWARDS - Flankers
  { id: "18", name: "Colin Turner", position: "Flanker", division: "D1", group: "forwards" },
  { id: "19", name: "Mike Washington", position: "Flanker", division: "D1", group: "forwards" },
  { id: "20", name: "Joshua Gatewood", position: "Flanker", division: "D1", group: "forwards" },
  { id: "21", name: "Gavin Spisak", position: "Flanker", division: "D1", isCaptain: true, group: "forwards", image: "https://ik.imagekit.io/fukntosc3/Gavin%20Spisak%20.png" },
  { id: "22", name: "Ben Spisak", position: "Flanker", division: "D1", group: "forwards" },
  { id: "23", name: "Chening Duker", position: "Flanker", division: "D1", group: "forwards", image: "https://ik.imagekit.io/fukntosc3/Chenning.png" },
  { id: "24", name: "Joe Bargerstock", position: "Flanker", division: "D1/D3", group: "forwards" },
  { id: "25", name: "Mike Metz", position: "Flanker", division: "D3", group: "forwards" },
  { id: "26", name: "Pat Miyamoto", position: "Flanker", division: "D3", group: "forwards" },
  
  // FORWARDS - Number 8
  { id: "27", name: "Simi Moala", position: "Number 8/Wing", division: "D1", nickname: "Toko", group: "forwards" },
  { id: "28", name: "Derek Fraser", position: "Number 8", division: "D1/D3", group: "forwards" },
  { id: "29", name: "Conrad Bontrager", position: "Number 8", division: "D1/D3", group: "forwards" },
  { id: "30", name: "Zach Hudson", position: "Number 8", division: "D1/D3", nickname: "Django", group: "forwards" },
  
  // FORWARDS - General
  { id: "31", name: "Tyler Landfried", position: "Forward", division: "D1/D3", group: "forwards", image: "https://www.awesomescreenshot.com/image/57905440?key=aa97ac278e452986c96026a839548a53" },
  { id: "32", name: "Henry Kantzes", position: "Forward", division: "D1/D3", group: "forwards" },
  { id: "33", name: "Jacob Wright", position: "Forward", division: "D1", group: "forwards" },
  
  // BACKS - Scrum Halves
  { id: "34", name: "Rory Goodsail", position: "Scrum Half", division: "D1", group: "backs" },
  { id: "35", name: "Kevin Muto", position: "Scrum Half", division: "D1/D3", group: "backs" },
  { id: "36", name: "Al Levine", position: "Scrum Half", division: "D3", group: "backs" },
  
  // BACKS - Fly Halves
  { id: "37", name: "Caleb Raubenheimer", position: "Fly Half", division: "D1/D3", group: "backs" },
  { id: "38", name: "Adam Saad", position: "Fly Half", division: "D1/D3", isCaptain: true, group: "backs" },
  
  // BACKS - Wings
  { id: "39", name: "Ehron Enyedy", position: "Wing", division: "D1", group: "backs", image: "https://ik.imagekit.io/fukntosc3/Ehron%20Enyedy%20.png" },
  { id: "40", name: "Ryan Ruspaj", position: "Wing", division: "D1/D3", group: "backs" },
  { id: "41", name: "DJ Pinneo", position: "Wing", division: "D1/D3", group: "backs", image: "https://ik.imagekit.io/fukntosc3/DJ%20.png" },
  { id: "42", name: "Jacob Barry", position: "Wing", division: "D1", group: "backs" },
  { id: "43", name: "Ahmad Harajly", position: "Wing", division: "D1", group: "backs" },
  { id: "44", name: "Andrew Laskowski", position: "Wing", division: "D1/D3", nickname: "Laskow", group: "backs", image: "https://ik.imagekit.io/fukntosc3/Andrew%20L%20.png" },
  { id: "45", name: "Jarod Segal", position: "Wing", division: "D3", group: "backs" },
  
  // BACKS - Centers
  { id: "46", name: "Petelo Vatuvei", position: "Center", division: "D1", nickname: "Toko", group: "backs" },
  { id: "47", name: "Nick Kiessel", position: "Center", division: "D1", group: "backs" },
  { id: "48", name: "George Andary", position: "Center", division: "D1/D3", group: "backs", image: "https://ik.imagekit.io/fukntosc3/George%20A.png" },
  { id: "49", name: "Pita Moala", position: "Center", division: "D1", nickname: "Toko", group: "backs" },
  { id: "50", name: "Siaosi Manufekai", position: "Center", division: "D1", nickname: "Toti", group: "backs" },
  { id: "51", name: "Kyle Harris", position: "Center", division: "D1/D3", group: "backs", image: "https://ik.imagekit.io/fukntosc3/Kyle%20Harris%20.png" },
  { id: "52", name: "Junior Sailo", position: "Center", division: "D1/D3", nickname: "Boso", group: "backs" },
  { id: "58", name: "Mike Metz", position: "Center", division: "D1", group: "backs" },

  // BACKS - Fullbacks
  { id: "53", name: "Imad Harajly", position: "Fullback", division: "D1", group: "backs", image: "https://ik.imagekit.io/fukntosc3/Imad%20H.png" },
  { id: "54", name: "Evan Shoup", position: "Fullback", division: "D1", group: "backs", image: "https://ik.imagekit.io/fukntosc3/Evan%20Shoup" },
  { id: "55", name: "Quinn Murray", position: "Fullback", division: "D3", group: "backs" },
  { id: "56", name: "Colin Tucker", position: "Fullback", division: "D3", nickname: "Wheels", group: "backs" },
  
  // BACKS - General
  { id: "57", name: "Mitch Wolfe", position: "Back", division: "D1/D3", group: "backs" },
];

export const HALL_OF_FAME: HallOfFamer[] = [
  { 
    id: '1', 
    name: "Robert 'Bob' Smith", 
    years: "1978-1990", 
    position: "Prop", 
    achievement: "Founding Member, 3x Captain",
    image: "https://ik.imagekit.io/fukntosc3/1.webp" 
  },
  { 
    id: '2', 
    name: "John Doe", 
    years: "1985-1998", 
    position: "Fly Half", 
    achievement: "Midwest MVP 1992",
    image: "https://ik.imagekit.io/fukntosc3/2.webp" 
  },
  { 
    id: '3', 
    name: "Mike 'Iron' Tyson", 
    years: "1990-2005", 
    position: "Number 8", 
    achievement: "150 Caps",
    image: "https://images.unsplash.com/photo-1531053326607-9d349096d887?q=80&w=600&auto=format&fit=crop"
  },
  { 
    id: '4', 
    name: "Bill Williams", 
    years: "1982-1995", 
    position: "Center", 
    achievement: "USA Eagle 1989",
    image: "https://images.unsplash.com/photo-1520330836518-a0c326d97e8a?q=80&w=600&auto=format&fit=crop"
  },
];

export const SPONSORS: Sponsor[] = [
  { name: "Intex", logo: "INTEX", image: "https://ik.imagekit.io/fukntosc3/Intex.svg", tier: 'legacy' },
  { name: "Narens Associates", logo: "NAI", image: "https://ik.imagekit.io/fukntosc3/Nai.svg", tier: 'legacy' },
  { name: "Plymouth Physical Therapy Specialists", logo: "PPT", image: "https://ik.imagekit.io/fukntosc3/Plymouth%20PTS%20logo.svg", tier: 'season' },
  { name: "Uniq Cannabis", logo: "UNIQ", image: "https://ik.imagekit.io/fukntosc3/uniq%20logo%20white.svg", tier: 'season', backgroundColor: '#1a2a4a' }
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    title: "Tradesmen Six Nations Watch Party",
    date: "February 3, 2023",
    author: "Social Chair",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
    excerpt: "Join us this Saturday at McShane's Irish Pub for the Six Nations kick-off. Food, drinks, and rugby.",
    content: [
      "The Detroit Tradesmen RFC invites all players, alumni, and supporters to join us for the kick-off of the 2023 Six Nations Championship.",
      "We will be gathering at McShane's Irish Pub & Whiskey Bar in Corktown starting at 9:00 AM this Saturday. This is a great opportunity to meet the current squad, reconnect with old teammates, and enjoy the highest level of international rugby.",
      "The schedule for the day is as follows:",
      "- 9:15 AM: Wales vs Ireland",
      "- 11:45 AM: England vs Scotland",
      "Drink specials will be available for anyone wearing Tradesmen gear. We look forward to seeing you there!"
    ],
    tags: ["Social", "Events", "Six Nations"]
  },
  {
    id: '2',
    title: "2022 Banquet Recap",
    date: "February 7, 2022",
    author: "Executive Committee",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
    excerpt: "Celebrating a year of hard hits, big wins, and brotherhood. Check out the award winners inside.",
    content: [
      "Last weekend, the club came together to celebrate the 2022 competitive season. It was a night of reflection, celebration, and looking forward to the future.",
      "We are proud to announce this year's award winners:",
      "- D1 MVP: John Smith",
      "- D3 MVP: Mike Jones",
      "- Rookie of the Year: David Johnson",
      "- Club Man of the Year: Steve Brown",
      "Thank you to everyone who made this season possible, from our coaching staff to our dedicated medical team. We are already preparing for a massive 2023 campaign."
    ],
    tags: ["Awards", "Banquet", "Recap"]
  },
  {
    id: '3',
    title: "2021 Season Recap",
    date: "January 22, 2022",
    author: "Club President",
    image: "https://images.unsplash.com/photo-1529260830199-42c42dda5f3d?q=80&w=800&auto=format&fit=crop",
    excerpt: "A look back at the highs and lows of our return to play following the hiatus.",
    content: [
      "The 2021 season was unlike any other. After a long hiatus due to global events, the Tradesmen returned to the pitch with a renewed sense of purpose.",
      "Our Division 1 side finished strong with a 6-2 record, securing a spot in the Midwest playoffs. The development of our younger players was a highlight, with several rookies stepping up to play key minutes in critical matches.",
      "Division 3 showed tremendous heart, providing a competitive outlet for over 40 players throughout the season. The depth of our squad has never been better."
    ],
    tags: ["Season Recap", "Match Report"]
  },
  {
    id: '4',
    title: "Tradesmen Annual Golf Outing",
    date: "August 25, 2021",
    author: "Fundraising Committee",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=800&auto=format&fit=crop",
    excerpt: "Fore! The annual golf outing was a massive success, raising funds for our youth programs.",
    content: [
      "The sun was shining and the fairways were green for our Annual Golf Outing. We had a record turnout this year with over 30 foursomes competing for the coveted trophy.",
      "More importantly, thanks to our sponsors and participants, we raised over $5,000 for our youth rugby initiatives and field maintenance fund.",
      "Special thanks to our title sponsor, Intex, for their continued support. We'll see you all on the links next year!"
    ],
    tags: ["Fundraising", "Golf", "Social"]
  },
  {
    id: '5',
    title: "40th Anniversary Weekend",
    date: "June 12, 2020",
    author: "Alumni Association",
    image: "https://images.unsplash.com/photo-1520330836518-a0c326d97e8a?q=80&w=800&auto=format&fit=crop",
    excerpt: "Four decades of Detroit Rugby. A historic weekend for the club celebrating our founding.",
    content: [
      "It's hard to believe it has been 40 years since the Detroit Tradesmen were founded. What started as a small group of players looking for a game has grown into one of the premier rugby clubs in the Midwest.",
      "The anniversary weekend was filled with memories, matches, and plenty of stories. Alumni from as far back as the original 1978 squad were in attendance.",
      "Here's to the next 40 years of dominance!"
    ],
    tags: ["History", "Anniversary", "Old Boys"]
  },
  {
    id: '6',
    title: "Celebration of Kirk 'Shooter' Borger",
    date: "June 12, 2020",
    author: "Tradesmen RFC",
    image: "https://images.unsplash.com/photo-1628891436214-e2b2fb94709f?q=80&w=800&auto=format&fit=crop",
    excerpt: "Honoring the life and legacy of a Tradesmen legend who gave everything to the club.",
    content: [
      "The Detroit Tradesmen family mourns the loss of Kirk 'Shooter' Borger. Shooter was more than a player; he was a mentor, a leader, and a friend to everyone who wore the jersey.",
      "A memorial service will be held this weekend to honor his contributions to the club and the sport of rugby in Michigan. His legacy will live on in every tackle, every try, and every song we sing."
    ],
    tags: ["In Memoriam", "Legend"]
  }
];

// Simplified Category List to replace generic items
export const GEAR_CATEGORIES: GearCategory[] = [
  {
    id: 'match',
    name: 'Match Day Kit',
    description: 'Authentic jerseys, shorts, and performance socks for the pitch.',
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'training',
    name: 'Training Gear',
    description: 'High-performance tees, tanks, and warm-up gear for practice.',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'social',
    name: 'Sideline & Social',
    description: 'Hoodies, jackets, hats, and accessories for the afterparty.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop'
  }
];
