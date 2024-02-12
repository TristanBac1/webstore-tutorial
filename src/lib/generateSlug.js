export function generateSlug(input) {
  const slug = input
    .toLowerCase() //Convert title to Lowercase
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/[^\w\-]/g, "") //Replace non-word characters except dashes
    .replace(/\-\-+/g, "-") //Replace multiple consecutive dashes with a single dash
    .replace(/^\-+/, "") //Remove dashes form the beginning
    .replace(/\-+$/, ""); //Remove dashes from the end

  return slug;
}
