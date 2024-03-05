import {
  Resource,
  component$,
  useContext,
  useResource$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { getBooks } from "~/features/api/fetchBooks";
import { categoryContext } from "~/routes/layout";
import { type Book } from "~/features/api/fetchBooks";

export default component$(() => {
  const userData = useContext(categoryContext);
  console.log(userData.value);
  const categoriesResource = useResource$(async ({ track, cleanup }) => {
    track(() => userData.value);
    console.log(userData.value);

    const controller = new AbortController();
    cleanup(() => controller.abort());

    return console.log("success");
  });
  return (
    <Resource
      value={categoriesResource}
      onPending={() => <div class="bg-red-500">Loading...</div>}
      onRejected={() => <div>Error:</div>}
      onResolved={() => (
        <div class="flex flex-wrap gap-4 p-4 justify-center">resolved</div>
      )}
    />
    // <></>
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
