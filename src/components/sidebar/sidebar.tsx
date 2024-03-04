import { component$ } from "@builder.io/qwik";
// import { createContextId, useContextProvider } from "@builder.io/qwik";

const bookCategories = [
  "Fiction",
  "Non-fiction",
  "Mystery",
  "Romance",
  "Fantasy",
  "Historical Fiction",
  "Thriller",
  "Biography",
  "History",
  "Self-help",
  "Psychology",
  "Philosophy",
  "Religion",
  "Travel",
  "Cookbooks",
  "Art & Photography",
  "Science",
];

// export const categoryContext =
//   createContextId<Signal<string>>("Category Context");

export const Sidebar = component$(() => {
  //   const selectedCategory = useSignal("");

  //   useContextProvider(categoryContext, selectedCategory);

  return (
    <div class="border-4 border-[#292828] rounded-lg p-4 max-h-fit mt-3 ml-2 inline-block">
      <p class="underline underline-offset-2 text-xl pb-4">Categories</p>
      <ul>
        {bookCategories.map((category, index) => (
          <li key={index}>
            <input
              class="accent-[#292828] outline-none  cursor-pointer"
              type="checkbox"
              id={category}
              name={category}
              value={category}
              //   onClick$={() => (selectedCategory.value = category)}
            />
            <label class="px-2 text-sm">{category}</label>
          </li>
        ))}
      </ul>
    </div>
  );
});
