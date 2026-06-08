export interface GoogleBook {
  id: string
  volumeInfo: {
    title: string
    authors?: string[]
    description?: string
    imageLinks?: {
      thumbnail?: string
      smallThumbnail?: string
    }
    averageRating?: number
    ratingsCount?: number
    publishedDate?: string
    pageCount?: number
    categories?: string[]
  }
  saleInfo?: {
    listPrice?: {
      amount: number
      currencyCode: string
    }
  }
}

const MOCK_BOOKS = [
  {
    id: '1',
    title: 'The Midnight Library',
    authors: ['Matt Haig'],
    description: 'A dazzling novel about all the choices that go into a life well lived. A woman finds herself in a library between life and death.',
    imageUrl: 'https://covers.openlibrary.org/b/id/8423246-M.jpg',
    price: 16.99,
    averageRating: 4.5,
    ratingsCount: 2845,
  },
  {
    id: '2',
    title: 'Lessons in Chemistry',
    authors: ['Bonnie Garmus'],
    description: 'A woman in 1960s California becomes a television sensation in this novel celebrating the housewives who changed the face of science.',
    imageUrl: 'https://covers.openlibrary.org/b/id/8424127-M.jpg',
    price: 18.99,
    averageRating: 4.4,
    ratingsCount: 3210,
  },
  {
    id: '3',
    title: 'Remarkably Bright',
    authors: ['Catherine Bybee'],
    description: 'A whimsical holiday romance about a widow who finds joy and love in unexpected places.',
    imageUrl: 'https://covers.openlibrary.org/b/id/8424312-M.jpg',
    price: 15.99,
    averageRating: 4.2,
    ratingsCount: 1850,
  },
  {
    id: '4',
    title: 'The Four Winds',
    authors: ['Kristin Hannah'],
    description: 'A sweeping epic of a woman facing impossible choices during the Great Depression and the Dust Bowl.',
    imageUrl: 'https://covers.openlibrary.org/b/id/8424401-M.jpg',
    price: 19.99,
    averageRating: 4.6,
    ratingsCount: 4120,
  },
  {
    id: '5',
    title: 'Circe',
    authors: ['Madeline Miller'],
    description: 'The goddess Circe transforms from an outsider into a formidable sorceress in this reimagining of Greek mythology.',
    imageUrl: 'https://covers.openlibrary.org/b/id/8424502-M.jpg',
    price: 17.99,
    averageRating: 4.7,
    ratingsCount: 5340,
  },
  {
    id: '6',
    title: 'The Seven Husbands of Evelyn Hugo',
    authors: ['Taylor Jenkins Reid'],
    description: 'A reclusive Hollywood icon breaks her silence to reveal the truth about her glamorous past.',
    imageUrl: 'https://covers.openlibrary.org/b/id/8424603-M.jpg',
    price: 18.99,
    averageRating: 4.8,
    ratingsCount: 6870,
  },
  {
    id: '7',
    title: 'Project Hail Mary',
    authors: ['Andy Weir'],
    description: 'A lone astronaut must save Earth and humanity in this thrilling science fiction adventure.',
    imageUrl: 'https://covers.openlibrary.org/b/id/8424704-M.jpg',
    price: 19.99,
    averageRating: 4.5,
    ratingsCount: 7200,
  },
  {
    id: '8',
    title: 'The Silent Patient',
    authors: ['Alex Michaelides'],
    description: 'A shocking psychological thriller that will keep you guessing until the very last page.',
    imageUrl: 'https://covers.openlibrary.org/b/id/8424805-M.jpg',
    price: 16.99,
    averageRating: 4.3,
    ratingsCount: 8100,
  },
]

export async function fetchBooks(query: string = 'fiction', startIndex: number = 0) {
  try {
    // First try the Google Books API
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&startIndex=${startIndex}&maxResults=40&orderBy=relevance`,
      { signal: AbortSignal.timeout(5000) }
    )

    if (response.ok) {
      const data = await response.json()

      if (data.items && data.items.length > 0) {
        const books = data.items
          .filter((item: GoogleBook) => item.volumeInfo && item.volumeInfo.title)
          .map((item: GoogleBook) => ({
            id: item.id,
            title: item.volumeInfo.title || 'Unknown Title',
            authors: item.volumeInfo.authors || ['Unknown Author'],
            description: item.volumeInfo.description || '',
            imageUrl: item.volumeInfo.imageLinks?.thumbnail || '',
            price: item.saleInfo?.listPrice?.amount || Math.random() * 45 + 8,
            averageRating: item.volumeInfo.averageRating || 0,
            ratingsCount: item.volumeInfo.ratingsCount || 0,
            publishedDate: item.volumeInfo.publishedDate || '',
            pageCount: item.volumeInfo.pageCount || 0,
            categories: item.volumeInfo.categories || [],
          }))

        return books.length > 0 ? books : MOCK_BOOKS
      }
    }
  } catch (error) {
    console.log('API unavailable, using mock data')
  }

  // Return mock data if API fails
  return MOCK_BOOKS
}
