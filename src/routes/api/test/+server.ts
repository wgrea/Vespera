// src/routes/api/test/+server.ts
import { db } from '$lib/server/database'; // Fix the import path
import { json } from '@sveltejs/kit';

export async function GET() {
  try {
    // Remove 'await' since methods are now synchronous
    const drinks = db.getDrinks();
    const bars = db.getBars();
    const clubs = db.getClubs();
    const events = db.getEvents();
    
    // Since getAllVenuesForDrink doesn't exist in your simplified Database class,
    // just return the counts for now
    return json({
      success: true,
      counts: {
        drinks: drinks.length,
        bars: bars.length,
        clubs: clubs.length,
        events: events.length
      },
      sample: drinks[0] ? {
        drink: drinks[0].name,
        message: "Venue mapping not available in simplified database"
      } : null
    });
  } catch (error) {
    return json({
      success: false,
      error: String(error)
    }, { status: 500 });
  }
}