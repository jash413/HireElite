interface Position {
  x: number;
  y: number;
  scale: number;
}

// Deterministic pseudo-random number generator
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function getDistributedPosition(index: number, total: number): Position {
  // Use index as seed for consistent randomness
  const isEdgeLogo = index < total * 0.8;
  
  let x: number;
  let y: number;
  
  if (isEdgeLogo) {
    const angle = (index * (2 * Math.PI)) / (total * 0.8);
    const edgeRadius = 40;
    
    // Use seededRandom for consistent variations
    const radiusVariation = seededRandom(index * 13.37) * 5;
    const finalRadius = edgeRadius + radiusVariation;
    
    x = 50 + finalRadius * Math.cos(angle);
    y = 50 + finalRadius * Math.sin(angle);
    
    // Deterministic offsets
    x += seededRandom(index * 7.42) * 5;
    y += seededRandom(index * 9.18) * 5;
  } else {
    const centerAngle = ((index - total * 0.8) * (2 * Math.PI)) / (total * 0.2);
    const centerRadius = 15;
    
    x = 50 + centerRadius * Math.cos(centerAngle);
    y = 50 + centerRadius * Math.sin(centerAngle);
  }
  
  // Ensure logos stay within bounds
  x = Math.max(10, Math.min(90, x));
  y = Math.max(10, Math.min(90, y));
  
  // Deterministic scaling
  const scale = isEdgeLogo ? 
    0.8 + seededRandom(index * 3.14) * 0.2 : 
    0.9 + seededRandom(index * 2.71) * 0.2;

  return { x, y, scale };
}