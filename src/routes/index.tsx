import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
// import { categoryContext } from "~/components/sidebar/sidebar";

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

interface Book {
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

export const useBooks = routeLoader$(async () => {
  const res = await fetch(
    `${BASE_URL}?q=search+subject:Fiction&key=${API_KEY}&maxResults=40`
  );
  const data = await res.json();
  const books: Book[] = data.items;
  return books;
});

export default component$(() => {
  // const userData = useContext(categoryContext);
  // console.log(userData.value);
  const signal = useBooks();
  return (
    <div class=" flex flex-wrap gap-4 p-4 justify-center">
      {signal.value.map((book) => (
        <div key={book.id}>
          <img
            class="h-full"
            src={book.volumeInfo.imageLinks.thumbnail}
            width={200}
            height={80}
          />
        </div>
      ))}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
