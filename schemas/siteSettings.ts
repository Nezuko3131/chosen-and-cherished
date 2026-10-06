export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
      initialValue: "Chosen and Cherished",
    },
    {
      name: "description",
      title: "Site Description",
      type: "text",
      rows: 3,
    },
    {
      name: "amazonWishlistUrl",
      title: "Amazon Wishlist URL",
      type: "url",
      description: "The URL for the Amazon Baby Wishlist",
    },
    {
      name: "zeffyDonationUrl",
      title: "Zeffy Donation URL",
      type: "url",
      description: "The URL for donations via Zeffy",
    },
    {
      name: "contactFormUrl",
      title: "Contact Form URL",
      type: "url",
      description: "External form URL for contact requests",
    },
    {
      name: "email",
      title: "Contact Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "text",
      rows: 3,
    },
    {
      name: "socialLinks",
      title: "Social Media Links",
      type: "object",
      fields: [
        { name: "facebook", title: "Facebook", type: "url" },
        { name: "instagram", title: "Instagram", type: "url" },
        { name: "twitter", title: "Twitter/X", type: "url" },
      ],
    },
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
};
