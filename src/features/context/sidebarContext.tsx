// import {
//   Slot,
//   component$,
//   createContextId,
//   useContextProvider,
//   useStore,
// } from "@builder.io/qwik";

// export const categoryContext = createContextId<{ category: string }>(
//   "Category_Context"
// );

// export const SidebarProvider = component$(() => {
//   const selectedCategory = useStore({ category: "" });

//   useContextProvider(categoryContext, selectedCategory);

//   return (
//       <Slot />
//   );
// });
