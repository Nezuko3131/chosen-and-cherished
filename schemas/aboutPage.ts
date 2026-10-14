export default {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "About Us",
    },
    {
      name: "ourStory",
      title: "Our Story",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", title: "Alternative Text", type: "string" },
            { name: "caption", title: "Caption", type: "string" },
          ],
        },
      ],
    },
    {
      name: "mission",
      title: "Our Mission",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "vision",
      title: "Our Vision",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "values",
      title: "Our Values",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Value Title", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 3 },
          ],
        },
      ],
    },
    {
      name: "whoWeServe",
      title: "Who We Serve",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }: any) {
      return { title: title || "About Page" };
    },
  },
};
