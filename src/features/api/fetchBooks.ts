const API_KEY = process.env.API_KEY;
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export interface Book {
  id: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors: string[];
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    categories: string[];
  };
}

export async function getBooks(
  category: string = "Fiction",
  searchTerm: string = "search+subject",
  controller?: AbortController
): Promise<Book[]> {
  const res = await fetch(
    `${BASE_URL}?q=${searchTerm}:${category}&key=${API_KEY}&maxResults=40`,
    { signal: controller?.signal }
  );
  const data = await res.json();
  const books: Book[] = data.items;
  return books;
}
