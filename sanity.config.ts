import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "chosen-and-cherished",
  title: "Chosen and Cherished",
  projectId: "hw33wdbk",
  dataset: "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site Settings")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.divider(),
            S.listItem().title("About Page").child(S.document().schemaType("aboutPage").documentId("aboutPage")),
            S.listItem().title("Homepage").child(S.document().schemaType("homepage").documentId("homepage")),
            S.listItem().title("Mission Page").child(S.document().schemaType("missionPage").documentId("missionPage")),
            S.listItem().title("Get Involved").child(S.document().schemaType("getInvolvedPage").documentId("getInvolvedPage")),
            S.divider(),
            S.listItem().title("News Articles").child(
              S.documentTypeList("newsArticle").title("News Articles")
            ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
