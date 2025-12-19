// src/data/serviceAreasVa.ts
// List of service areas for bed bug services in VA
// Each entry: { cityName, slugCity, nearby: [slugCity, ...] }

export interface ServiceArea {
  cityName: string;
  slugCity: string;
  nearby: string[];
}

export const serviceAreasVa: ServiceArea[] = [
  { cityName: "Richmond", slugCity: "richmond", nearby: ["henrico", "short-pump", "glen-allen", "highland-springs", "varina"] },
  { cityName: "Henrico", slugCity: "henrico", nearby: ["richmond", "short-pump", "glen-allen", "lakeside", "sandston"] },
  { cityName: "Short Pump", slugCity: "short-pump", nearby: ["glen-allen", "henrico", "richmond", "lakeside", "ashland"] },
  { cityName: "Glen Allen", slugCity: "glen-allen", nearby: ["short-pump", "henrico", "richmond", "ashland", "mechanicsville"] },
  { cityName: "Highland Springs", slugCity: "highland-springs", nearby: ["varina", "sandston", "henrico", "richmond", "lakeside"] },
  { cityName: "Varina", slugCity: "varina", nearby: ["highland-springs", "sandston", "henrico", "richmond", "chester"] },
  { cityName: "Sandston", slugCity: "sandston", nearby: ["highland-springs", "varina", "henrico", "richmond", "lakeside"] },
  { cityName: "Lakeside", slugCity: "lakeside", nearby: ["henrico", "richmond", "short-pump", "glen-allen", "ashland"] },
  { cityName: "Chesterfield", slugCity: "chesterfield", nearby: ["midlothian", "north-chesterfield", "chester", "bon-air", "moseley"] },
  { cityName: "Midlothian", slugCity: "midlothian", nearby: ["chesterfield", "north-chesterfield", "bon-air", "moseley", "brandermill"] },
  { cityName: "North Chesterfield", slugCity: "north-chesterfield", nearby: ["chesterfield", "midlothian", "chester", "bon-air", "moseley"] },
  { cityName: "Chester", slugCity: "chester", nearby: ["chesterfield", "north-chesterfield", "varina", "colonial-heights", "prince-george"] },
  { cityName: "Bon Air", slugCity: "bon-air", nearby: ["midlothian", "chesterfield", "north-chesterfield", "moseley", "brandermill"] },
  { cityName: "Moseley", slugCity: "moseley", nearby: ["midlothian", "chesterfield", "bon-air", "brandermill", "powhatan"] },
  { cityName: "Brandermill", slugCity: "brandermill", nearby: ["midlothian", "moseley", "chesterfield", "bon-air", "powhatan"] },
  { cityName: "Mechanicsville", slugCity: "mechanicsville", nearby: ["ashland", "hanover", "atlee", "richmond", "glen-allen"] },
  { cityName: "Ashland", slugCity: "ashland", nearby: ["mechanicsville", "hanover", "atlee", "glen-allen", "short-pump"] },
  { cityName: "Hanover", slugCity: "hanover", nearby: ["mechanicsville", "ashland", "atlee", "richmond", "glen-allen"] },
  { cityName: "Atlee", slugCity: "atlee", nearby: ["mechanicsville", "ashland", "hanover", "richmond", "glen-allen"] },
  { cityName: "Petersburg", slugCity: "petersburg", nearby: ["colonial-heights", "hopewell", "prince-george", "chester", "richmond"] },
  { cityName: "Colonial Heights", slugCity: "colonial-heights", nearby: ["petersburg", "hopewell", "prince-george", "chester", "richmond"] },
  { cityName: "Hopewell", slugCity: "hopewell", nearby: ["petersburg", "colonial-heights", "prince-george", "chester", "richmond"] },
  { cityName: "Prince George", slugCity: "prince-george", nearby: ["petersburg", "colonial-heights", "hopewell", "chester", "richmond"] },
  { cityName: "Powhatan", slugCity: "powhatan", nearby: ["goochland", "moseley", "brandermill", "chesterfield", "amelia-court-house"] },
  { cityName: "Goochland", slugCity: "goochland", nearby: ["powhatan", "amelia-court-house", "richmond", "ashland", "short-pump"] },
  { cityName: "Amelia Court House", slugCity: "amelia-court-house", nearby: ["powhatan", "goochland", "farmville", "chesterfield", "moseley"] },
  { cityName: "Farmville", slugCity: "farmville", nearby: ["amelia-court-house", "powhatan", "goochland", "prince-edward", "richmond"] },
  { cityName: "New Kent", slugCity: "new-kent", nearby: ["williamsburg", "toano", "richmond", "henrico", "varina"] },
  { cityName: "Williamsburg", slugCity: "williamsburg", nearby: ["toano", "new-kent", "richmond", "henrico", "varina"] },
  { cityName: "Toano", slugCity: "toano", nearby: ["williamsburg", "new-kent", "richmond", "henrico", "varina"] },
  { cityName: "Fredericksburg", slugCity: "fredericksburg", nearby: ["spotsylvania", "stafford", "king-george", "richmond", "ashland"] },
  { cityName: "Spotsylvania", slugCity: "spotsylvania", nearby: ["fredericksburg", "stafford", "king-george", "richmond", "ashland"] },
  { cityName: "Stafford", slugCity: "stafford", nearby: ["fredericksburg", "spotsylvania", "king-george", "richmond", "ashland"] },
  { cityName: "King George", slugCity: "king-george", nearby: ["fredericksburg", "spotsylvania", "stafford", "richmond", "ashland"] },
  { cityName: "Newport News", slugCity: "newport-news", nearby: ["hampton", "norfolk", "williamsburg", "toano", "richmond"] },
  { cityName: "Hampton", slugCity: "hampton", nearby: ["newport-news", "norfolk", "williamsburg", "toano", "richmond"] },
  { cityName: "Norfolk", slugCity: "norfolk", nearby: ["newport-news", "hampton", "williamsburg", "toano", "richmond"] },
  { cityName: "Virginia Beach", slugCity: "virginia-beach", nearby: ["norfolk", "chesapeake", "portsmouth", "hampton", "newport-news"] },
  { cityName: "Chesapeake", slugCity: "chesapeake", nearby: ["virginia-beach", "norfolk", "portsmouth", "hampton", "newport-news"] },
  { cityName: "Portsmouth", slugCity: "portsmouth", nearby: ["virginia-beach", "chesapeake", "norfolk", "hampton", "newport-news"] },
  { cityName: "Suffolk", slugCity: "suffolk", nearby: ["portsmouth", "chesapeake", "norfolk", "hampton", "newport-news"] },
  { cityName: "Charlottesville", slugCity: "charlottesville", nearby: ["albemarle", "waynesboro", "staunton", "richmond", "ashland"] },
  { cityName: "Albemarle", slugCity: "albemarle", nearby: ["charlottesville", "waynesboro", "staunton", "richmond", "ashland"] },
  { cityName: "Waynesboro", slugCity: "waynesboro", nearby: ["charlottesville", "albemarle", "staunton", "richmond", "ashland"] },
  { cityName: "Staunton", slugCity: "staunton", nearby: ["charlottesville", "albemarle", "waynesboro", "richmond", "ashland"] },
];
