export default {
  name: "missionPage",
  title: "Mission Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "Our Mission",
    },
    {
      name: "intro",
      title: "Introduction",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", title: "Alternative Text", type: "string" },
          ],
        },
      ],
    },
    {
      name: "programs",
      title: "Programs & Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Program Title", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 4 },
            { name: "icon", title: "Icon (emoji)", type: "string" },
          ],
        },
      ],
      initialValue: [
        {
          title: "Baby Essentials Distribution",
          description:
            "We provide diapers, formula, clothing, cribs, car seats, and other essential items that every baby needs. Our goal is to ensure no family has to choose between basic necessities and other expenses.",
          icon: "👶",
        },
        {
          title: "Pregnancy Support",
          description:
            "From maternity clothes to prenatal resources, we support mothers throughout their pregnancy journey with practical help and emotional encouragement.",
          icon: "🤰",
        },
        {
          title: "Early Childhood Resources",
          description:
            "Our support continues beyond infancy, providing resources for toddlers and young children including educational materials, developmental toys, and parenting guides.",
          icon: "📚",
        },
        {
          title: "Community Connections",
          description:
            "We help families connect with other resources in the community, including healthcare providers, social services, educational programs, and support groups.",
          icon: "🤝",
        },
      ],
    },
    {
      name: "additionalContent",
      title: "Additional Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    prepare: () => ({ title: "Mission Page" }),
  },
};
