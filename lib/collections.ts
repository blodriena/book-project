import { CollectionBook } from '@/components/BookCollection'

export type IconType = 'flame' | 'sparkles' | 'award' | 'book' | 'heart' | 'brain' | 'rocket'

export interface Collection {
  id: string
  name: string
  slug: string
  description: string
  iconType: IconType
  color: string
  books: CollectionBook[]
}

const BESTSELLING_BOOKS: CollectionBook[] = [
  {
    id: 'bs-1',
    title: 'It Ends with Us',
    authors: ['Colleen Hoover'],
    price: 17.99,
    averageRating: 4.7,
    ratingsCount: 12540,
    imageUrl: 'https://covers.openlibrary.org/b/id/8424999-M.jpg',
    description: 'A gripping tale of love and resilience',
  },
  {
    id: 'bs-2',
    title: 'Fourth Wing',
    authors: ['Rebecca Yarros'],
    price: 18.99,
    averageRating: 4.8,
    ratingsCount: 9870,
    imageUrl: 'https://covers.openlibrary.org/b/id/8425088-M.jpg',
    description: 'An epic fantasy about war and romance',
  },
  {
    id: 'bs-3',
    title: 'Holly',
    authors: ['Stephen King'],
    price: 19.99,
    averageRating: 4.4,
    ratingsCount: 8720,
    imageUrl: 'https://covers.openlibrary.org/b/id/8425177-M.jpg',
    description: 'A gripping thriller from the master',
  },
  {
    id: 'bs-4',
    title: 'Reminders of Him',
    authors: ['Colleen Hoover'],
    price: 16.99,
    averageRating: 4.6,
    ratingsCount: 7650,
    imageUrl: 'https://covers.openlibrary.org/b/id/8425266-M.jpg',
    description: 'An unforgettable journey of redemption',
  },
  {
    id: 'bs-5',
    title: 'The Woman in Cabin 10',
    authors: ['Ruth Ware'],
    price: 17.99,
    averageRating: 4.3,
    ratingsCount: 6540,
    imageUrl: 'https://covers.openlibrary.org/b/id/8425355-M.jpg',
    description: 'A mystery on the high seas',
  },
  {
    id: 'bs-6',
    title: 'Daisy Jones & The Six',
    authors: ['Taylor Jenkins Reid'],
    price: 18.99,
    averageRating: 4.5,
    ratingsCount: 11230,
    imageUrl: 'https://covers.openlibrary.org/b/id/8425444-M.jpg',
    description: 'A 70s rock band saga like no other',
  },
]

const NEW_ARRIVALS: CollectionBook[] = [
  { id: 'na-1', title: 'The House of Evernight', authors: ['Sylvia Moreno-Garcia'], price: 20.99, averageRating: 4.6, ratingsCount: 3210, imageUrl: 'https://covers.openlibrary.org/b/id/8425533-M.jpg', description: 'Gothic romance with supernatural twists' },
  { id: 'na-2', title: 'Empire of Sand', authors: ['Tasha Suri'], price: 19.99, averageRating: 4.7, ratingsCount: 2980, imageUrl: 'https://covers.openlibrary.org/b/id/8425622-M.jpg', description: 'Lush fantasy set in a richly imagined world' },
  { id: 'na-3', title: 'The Song of Achilles', authors: ['Madeline Miller'], price: 18.99, averageRating: 4.8, ratingsCount: 4120, imageUrl: 'https://covers.openlibrary.org/b/id/8425711-M.jpg', description: 'A reimagining of Greek mythology' },
  { id: 'na-4', title: 'Babel', authors: ['R.F. Kuang'], price: 21.99, averageRating: 4.5, ratingsCount: 3540, imageUrl: 'https://covers.openlibrary.org/b/id/8425800-M.jpg', description: 'An alternate history with powerful themes' },
  { id: 'na-5', title: 'The Bone Shard Daughter', authors: ['Andrea Stewart'], price: 19.99, averageRating: 4.4, ratingsCount: 2870, imageUrl: 'https://covers.openlibrary.org/b/id/8425889-M.jpg', description: 'Dark fantasy with Asian-inspired worldbuilding' },
  { id: 'na-6', title: 'The City of Dusk', authors: ['Tara Sim'], price: 20.99, averageRating: 4.6, ratingsCount: 3450, imageUrl: 'https://covers.openlibrary.org/b/id/8425978-M.jpg', description: 'An epic fantasy of gods and mortals' },
]

const AWARD_WINNERS: CollectionBook[] = [
  { id: 'aw-1', title: 'The Midnight Library', authors: ['Matt Haig'], price: 16.99, averageRating: 4.5, ratingsCount: 2845, imageUrl: 'https://covers.openlibrary.org/b/id/8423246-M.jpg', description: 'Award-winning tale of infinite possibilities' },
  { id: 'aw-2', title: 'Lessons in Chemistry', authors: ['Bonnie Garmus'], price: 18.99, averageRating: 4.4, ratingsCount: 3210, imageUrl: 'https://covers.openlibrary.org/b/id/8424127-M.jpg', description: 'Goodreads Choice Award winner' },
  { id: 'aw-3', title: 'The Four Winds', authors: ['Kristin Hannah'], price: 19.99, averageRating: 4.6, ratingsCount: 4120, imageUrl: 'https://covers.openlibrary.org/b/id/8424401-M.jpg', description: 'Critically acclaimed historical fiction' },
  { id: 'aw-4', title: 'Circe', authors: ['Madeline Miller'], price: 17.99, averageRating: 4.7, ratingsCount: 5340, imageUrl: 'https://covers.openlibrary.org/b/id/8424502-M.jpg', description: 'Shortlisted for major literary awards' },
  { id: 'aw-5', title: 'Project Hail Mary', authors: ['Andy Weir'], price: 19.99, averageRating: 4.5, ratingsCount: 7200, imageUrl: 'https://covers.openlibrary.org/b/id/8424704-M.jpg', description: 'Hugo Award nominated sci-fi adventure' },
  { id: 'aw-6', title: 'The Invisible Life of Addie LaRue', authors: ['V.E. Schwab'], price: 18.99, averageRating: 4.7, ratingsCount: 6890, imageUrl: 'https://covers.openlibrary.org/b/id/8425067-M.jpg', description: 'A stunning and imaginative dark fantasy' },
]

const FANTASY_PICKS: CollectionBook[] = [
  { id: 'f-1', title: 'Fourth Wing', authors: ['Rebecca Yarros'], price: 18.99, averageRating: 4.8, ratingsCount: 9870, imageUrl: 'https://covers.openlibrary.org/b/id/8425088-M.jpg', description: 'Epic dragon-riding fantasy' },
  { id: 'f-2', title: 'A Court of Thorns and Roses', authors: ['Sarah J. Maas'], price: 17.99, averageRating: 4.4, ratingsCount: 8950, imageUrl: 'https://covers.openlibrary.org/b/id/8425156-M.jpg', description: 'Dark fae fantasy with romance' },
  { id: 'f-3', title: 'The Name of the Wind', authors: ['Patrick Rothfuss'], price: 19.99, averageRating: 4.6, ratingsCount: 10240, imageUrl: 'https://covers.openlibrary.org/b/id/8425245-M.jpg', description: 'Epic fantasy of magic and adventure' },
  { id: 'f-4', title: 'The Poppy War', authors: ['R.F. Kuang'], price: 18.99, averageRating: 4.5, ratingsCount: 7680, imageUrl: 'https://covers.openlibrary.org/b/id/8425334-M.jpg', description: 'Dark Asian-inspired fantasy' },
  { id: 'f-5', title: 'Six of Crows', authors: ['Leigh Bardugo'], price: 17.99, averageRating: 4.7, ratingsCount: 11340, imageUrl: 'https://covers.openlibrary.org/b/id/8425423-M.jpg', description: 'Heist fantasy with complex characters' },
  { id: 'f-6', title: 'The Blade Itself', authors: ['Joe Abercrombie'], price: 19.99, averageRating: 4.5, ratingsCount: 9120, imageUrl: 'https://covers.openlibrary.org/b/id/8425512-M.jpg', description: 'Dark gritty fantasy epic' },
]

const ROMANCE_PICKS: CollectionBook[] = [
  { id: 'r-1', title: 'It Ends with Us', authors: ['Colleen Hoover'], price: 17.99, averageRating: 4.7, ratingsCount: 12540, imageUrl: 'https://covers.openlibrary.org/b/id/8424999-M.jpg', description: 'Emotional and powerful romance' },
  { id: 'r-2', title: 'The Hating Game', authors: ['Sally Thorne'], price: 16.99, averageRating: 4.4, ratingsCount: 8230, imageUrl: 'https://covers.openlibrary.org/b/id/8425601-M.jpg', description: 'Enemies-to-lovers perfection' },
  { id: 'r-3', title: 'Outlander', authors: ['Diana Gabaldon'], price: 19.99, averageRating: 4.6, ratingsCount: 15670, imageUrl: 'https://covers.openlibrary.org/b/id/8425690-M.jpg', description: 'Epic time-travel romance' },
  { id: 'r-4', title: 'The Seven Husbands of Evelyn Hugo', authors: ['Taylor Jenkins Reid'], price: 18.99, averageRating: 4.8, ratingsCount: 6870, imageUrl: 'https://covers.openlibrary.org/b/id/8424603-M.jpg', description: 'Glamorous and unforgettable' },
  { id: 'r-5', title: 'Pride and Prejudice', authors: ['Jane Austen'], price: 14.99, averageRating: 4.9, ratingsCount: 25400, imageUrl: 'https://covers.openlibrary.org/b/id/8425779-M.jpg', description: 'Timeless classic romance' },
  { id: 'r-6', title: 'The Rosie Project', authors: ['Graeme Simsion'], price: 17.99, averageRating: 4.3, ratingsCount: 6540, imageUrl: 'https://covers.openlibrary.org/b/id/8425868-M.jpg', description: 'Charming romantic comedy' },
]

const SELF_HELP_PICKS: CollectionBook[] = [
  { id: 'sh-1', title: 'Atomic Habits', authors: ['James Clear'], price: 18.99, averageRating: 4.8, ratingsCount: 18920, imageUrl: 'https://covers.openlibrary.org/b/id/8425957-M.jpg', description: 'Transform your life with tiny changes' },
  { id: 'sh-2', title: 'The Power of Now', authors: ['Eckhart Tolle'], price: 17.99, averageRating: 4.6, ratingsCount: 14320, imageUrl: 'https://covers.openlibrary.org/b/id/8426046-M.jpg', description: 'Spiritual and philosophical guide' },
  { id: 'sh-3', title: 'Educated', authors: ['Tara Westover'], price: 19.99, averageRating: 4.7, ratingsCount: 12450, imageUrl: 'https://covers.openlibrary.org/b/id/8426135-M.jpg', description: 'Inspiring memoir of resilience' },
  { id: 'sh-4', title: 'Thinking, Fast and Slow', authors: ['Daniel Kahneman'], price: 20.99, averageRating: 4.4, ratingsCount: 9870, imageUrl: 'https://covers.openlibrary.org/b/id/8426224-M.jpg', description: 'Psychology and decision-making' },
  { id: 'sh-5', title: 'The 7 Habits of Highly Effective People', authors: ['Stephen R. Covey'], price: 18.99, averageRating: 4.5, ratingsCount: 11230, imageUrl: 'https://covers.openlibrary.org/b/id/8426313-M.jpg', description: 'Proven principles for success' },
  { id: 'sh-6', title: 'Mindset', authors: ['Carol S. Dweck'], price: 17.99, averageRating: 4.6, ratingsCount: 10540, imageUrl: 'https://covers.openlibrary.org/b/id/8426402-M.jpg', description: 'The psychology of success' },
]

const SCIFI_PICKS: CollectionBook[] = [
  { id: 'sc-1', title: 'Project Hail Mary', authors: ['Andy Weir'], price: 19.99, averageRating: 4.5, ratingsCount: 7200, imageUrl: 'https://covers.openlibrary.org/b/id/8424704-M.jpg', description: 'Thrilling space adventure' },
  { id: 'sc-2', title: 'The Expanse Series', authors: ['James S.A. Corey'], price: 19.99, averageRating: 4.6, ratingsCount: 12340, imageUrl: 'https://covers.openlibrary.org/b/id/8426491-M.jpg', description: 'Epic space opera' },
  { id: 'sc-3', title: 'Dune', authors: ['Frank Herbert'], price: 18.99, averageRating: 4.7, ratingsCount: 16870, imageUrl: 'https://covers.openlibrary.org/b/id/8426580-M.jpg', description: 'Science fiction masterpiece' },
  { id: 'sc-4', title: 'Neuromancer', authors: ['William Gibson'], price: 16.99, averageRating: 4.4, ratingsCount: 8920, imageUrl: 'https://covers.openlibrary.org/b/id/8426669-M.jpg', description: 'Cyberpunk classic' },
  { id: 'sc-5', title: 'Foundation', authors: ['Isaac Asimov'], price: 17.99, averageRating: 4.6, ratingsCount: 13450, imageUrl: 'https://covers.openlibrary.org/b/id/8426758-M.jpg', description: 'Groundbreaking sci-fi epic' },
  { id: 'sc-6', title: 'The Martian', authors: ['Andy Weir'], price: 17.99, averageRating: 4.7, ratingsCount: 14230, imageUrl: 'https://covers.openlibrary.org/b/id/8426847-M.jpg', description: 'Survival on Mars' },
]

export const COLLECTIONS: Collection[] = [
  { id: 'bestsellers', name: 'Bestsellers', slug: 'bestsellers', description: 'Most loved books across genres right now', iconType: 'flame', color: 'gold', books: BESTSELLING_BOOKS },
  { id: 'new-arrivals', name: 'New Arrivals', slug: 'new-arrivals', description: 'Just added to our premium collection', iconType: 'sparkles', color: 'gold', books: NEW_ARRIVALS },
  { id: 'award-winners', name: 'Award Winners', slug: 'award-winners', description: 'Critically acclaimed and celebrated', iconType: 'award', color: 'gold', books: AWARD_WINNERS },
  { id: 'fantasy', name: 'Fantasy', slug: 'fantasy', description: 'Immerse yourself in magical worlds', iconType: 'book', color: 'gold', books: FANTASY_PICKS },
  { id: 'romance', name: 'Romance', slug: 'romance', description: 'Heartwarming and passionate stories', iconType: 'heart', color: 'gold', books: ROMANCE_PICKS },
  { id: 'self-help', name: 'Self-Help & Personal Growth', slug: 'self-help', description: 'Transform your life and mind', iconType: 'brain', color: 'gold', books: SELF_HELP_PICKS },
  { id: 'sci-fi', name: 'Science Fiction', slug: 'sci-fi', description: 'Explore futures and possibilities', iconType: 'rocket', color: 'gold', books: SCIFI_PICKS },
]

export function getCollectionBySlug(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug)
}
