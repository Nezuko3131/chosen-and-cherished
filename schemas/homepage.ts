export default {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    {
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      initialValue: "You Are Chosen. You Are Cherished.",
    },
    {
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 2,
      initialValue:
        "Providing essential baby supplies, resources, and compassionate support to mothers and families experiencing financial hardship.",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", title: "Alternative Text", type: "string" },
      ],
    },
    {
      name: "missionStatement",
      title: "Mission Statement",
      type: "text",
      rows: 4,
      initialValue:
        "To provide essential baby supplies, resources, and compassionate support to pregnant mothers and families experiencing financial hardship, ensuring babies have access to basic necessities during pregnancy, infancy, and early childhood.",
    },
    {
      name: "impactSection",
      title: "Impact Section",
      type: "object",
      fields: [
        { name: "title", title: "Section Title", type: "string", initialValue: "Making a Difference" },
        {
          name: "items",
          title: "Impact Items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "icon", title: "Icon (emoji or text)", type: "string" },
                { name: "title", title: "Title", type: "string" },
                { name: "description", title: "Description", type: "text", rows: 2 },
              ],
            },
          ],
          initialValue: [
            {
              icon: "👶",
              title: "Providing Baby Essentials",
              description: "Diapers, formula, clothing, and more",
            },
            {
              icon: "❤️",
              title: "Offering Encouragement",
              description: "Emotional support and resources",
            },
            {
              icon: "👥",
              title: "Building Community",
              description: "Connection with other families",
            },
          ],
        },
      ],
    },
    {
      name: "waysToHelpSection",
      title: "Ways to Help Section",
      type: "object",
      fields: [
        { name: "title", title: "Section Title", type: "string", initialValue: "How You Can Help" },
        {
          name: "items",
          title: "Help Options",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "title", title: "Title", type: "string" },
                { name: "description", title: "Description", type: "text", rows: 2 },
                { name: "link", title: "Link URL", type: "string" },
                { name: "linkText", title: "Link Text", type: "string" },
              ],
            },
          ],
          initialValue: [
            {
              title: "Donate Items",
              description: "Send essential baby items through our Amazon Wishlist",
              link: "/wishlist",
              linkText: "View Wishlist",
            },
            {
              title: "Give Financially",
              description: "Your monetary donations help us purchase critical supplies",
              link: "/donate",
              linkText: "Donate Now",
            },
            {
              title: "Get Involved",
              description: "Volunteer your time and talents to support families",
              link: "/get-involved",
              linkText: "Learn More",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({ title: "Homepage Content" }),
  },
};
