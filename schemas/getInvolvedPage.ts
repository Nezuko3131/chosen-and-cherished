export default {
  name: "getInvolvedPage",
  title: "Get Involved Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "Get Involved",
    },
    {
      name: "intro",
      title: "Introduction",
      type: "array",
      of: [{ type: "block" }],
      initialValue: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "There are many ways to join our mission and make a real difference in the lives of mothers and families. Whether you choose to give financially, donate items, or volunteer your time, every contribution matters.",
            },
          ],
        },
      ],
    },
    {
      name: "ways",
      title: "Ways to Get Involved",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 4 },
            { name: "icon", title: "Icon (emoji)", type: "string" },
            { name: "link", title: "Link URL", type: "string" },
            { name: "linkText", title: "Link Text", type: "string" },
          ],
        },
      ],
      initialValue: [
        {
          title: "Financial Donations",
          description:
            "Your monetary gifts help us purchase critical supplies that aren't always available through donations. Every dollar goes directly toward helping families in need.",
          icon: "💝",
          link: "/donate",
          linkText: "Donate Now",
        },
        {
          title: "Amazon Wishlist",
          description:
            "Purchase items directly from our Amazon Wishlist and they'll be shipped to families who need them most. It's a simple way to give with lasting impact.",
          icon: "📦",
          link: "/wishlist",
          linkText: "View Wishlist",
        },
        {
          title: "Spread the Word",
          description:
            "Follow us on social media, share our story with friends and family, and help us build awareness for our mission. Word of mouth makes a difference.",
          icon: "📣",
          link: "/contact",
          linkText: "Connect With Us",
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({ title: "Get Involved Page" }),
  },
};
