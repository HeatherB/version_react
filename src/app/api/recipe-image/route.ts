import { NextRequest, NextResponse } from 'next/server';

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query') || 'food';
  const width = searchParams.get('w') || '400';
  const height = searchParams.get('h') || '300';

  if (!PEXELS_API_KEY) {
    // Fallback to a default food image
    return NextResponse.json({ 
      url: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    });
  }

  try {
    // Search for food + recipe name
    const searchQuery = `food ${query}`;
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(searchQuery)}&per_page=1&orientation=landscape`,
      {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
        next: { revalidate: 86400 }, // Cache for 24 hours
      }
    );

    if (!response.ok) {
      throw new Error('Pexels API error');
    }

    const data = await response.json();
    
    if (data.photos && data.photos.length > 0) {
      const photo = data.photos[0];
      return NextResponse.json({ 
        url: `${photo.src.original}?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop`
      });
    }

    // Fallback if no results
    return NextResponse.json({ 
      url: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    });
  } catch (error) {
    console.error('Pexels API error:', error);
    return NextResponse.json({ 
      url: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    });
  }
}
