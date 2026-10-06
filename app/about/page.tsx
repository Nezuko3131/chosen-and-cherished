import { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity";
import type { AboutPage } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Chosen and Cherished, our mission, vision, values, and the families we serve.",
};

const defaultContent = {
  title: "About Us",
  ourStory: [
    {
      _type: "block",
      bold: true,
      children: [{ _type: "span", text: "Chosen & Cherished was born from a simple desire: to make sure no mother feels she has to choose between keeping her baby and having the proper resources to provide for that baby's needs." }],
    },
    {
      _type: "block",
      children: [{ _type: "span", text: "This mission is deeply personal to me." }],
    },
    {
      _type: "block",
      children: [{ _type: "span", text: "I grew up in the Dominican Republic, where I witnessed firsthand the struggles many single mothers and families face. Then, at just 19 years old, I became one of those mothers." }],
    },
    {
      _type: "block",
      children: [{ _type: "span", text: "In 2006, I left a very unhealthy relationship, and came to the United States with my nine-month-old son. I had a carry-on bag and not much else. I know what it feels like to start from scratch while having a little person completely dependent on you. I was terrified, yet determined to create a better life for my son." }],
    },
    {
      _type: "block",
      children: [{ _type: "span", text: "That experience never left me." }],
    },
    {
      _type: "block",
      bold: true,
      lightGreen: true,
      children: [{ _type: "span", text: "Today, when I see a young mother struggling financially, facing pregnancy alone, or rebuilding her life after leaving a difficult situation, I see a younger version of myself in her." }],
    },
    {
      _type: "block",
      children: [{ _type: "span", text: "For years, I have quietly helped mothers by using my own resources and collecting donated baby items from our community. After seeing the overwhelming generosity of people willing to help, I realized this could become something much bigger." }],
    },
    {
      _type: "block",
      bold: true,
      lightGreen: true,
      children: [{ _type: "span", text: "Chosen & Cherished was born." }],
    },
    {
      _type: "block",
      children: [{ _type: "span", text: "We are a faith-based organization providing baby essentials, practical support, and community to mothers choosing life." }],
    },
    {
      _type: "block",
      children: [{ _type: "span", text: "Because when a mother sees a positive pregnancy test, the cost of diapers, clothing, a car seat, or a safe place for her baby to sleep should never be the reason she feels she cannot choose her child." }],
    },
    {
      _type: "block",
      children: [{ _type: "span", text: "Our purpose is simple: to remind her that she doesn't have to do this alone." }],
    },
    {
      _type: "block",
      bold: true,
      lightGreen: true,
      children: [{ _type: "span", text: "You chose life. Now let us choose to walk beside you." }],
    },
  ],
  mission:
    "To provide essential baby supplies, resources, and compassionate support to pregnant mothers and families experiencing financial hardship.",
  vision:
    "A community where every mother and baby has access to the essentials they need to thrive, with dignity and hope.",
  values: [
    {
      title: "Compassion",
      description:
        "We approach every mother and family with genuine care and understanding, recognizing the challenges they face.",
    },
    {
      title: "Dignity",
      description:
        "We believe every family deserves to be treated with respect and honor, never feeling like charity cases.",
    },
    {
      title: "Hope",
      description:
        "We provide not just material support, but emotional encouragement and hope for brighter tomorrows.",
    },
    {
      title: "Community",
      description:
        "We build connections between families, creating a support network that extends beyond our direct services.",
    },
    {
      title: "Faith",
      description:
        "Our work is grounded in the belief that every life has purpose and value, and that communities can transform lives.",
    },
  ],
  whoWeServe: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "We serve pregnant mothers and families with children from birth through early childhood who are experiencing financial hardship. Our services are available regardless of background, circumstance, or belief.",
        },
      ],
    },
  ],
};

async function getAboutContent(): Promise<AboutPage | null> {
  try {
    return await sanityFetch<AboutPage>({
      query: `*[_type == "aboutPage"][0]`,
    });
  } catch {
    return null;
  }
}

function renderBlocks(blocks: any[] | undefined): string {
  if (!blocks || !Array.isArray(blocks)) return "";
  return blocks
    .map((block) => {
      if (block._type === "block") {
        const text = block.children?.map((child: any) => child.text || "").join("") || "";
        const classes = ["mb-6"];
        if (block.lightGreen) classes.push("text-sage-400", "font-medium");
        if (block.bold) classes.push("font-bold");
        return `<p class="${classes.join(" ")}">${text}</p>`;
      }
      return "";
    })
    .join("");
}

export default async function AboutPage() {
  const about = await getAboutContent();
  const content = about && about.title ? about : defaultContent;

  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 section-padding">
        <div className="container-narrow text-center">
          <h1 className="heading-lg text-forest-500 mb-4">{content.title}</h1>
          <p className="text-xl text-warm-700 max-w-2xl mx-auto">
            A faith-based nonprofit dedicated to supporting mothers and families
            during life&apos;s most important moments.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="heading-md text-sage-400 mb-8 text-center">Our Story</h2>
          <div
            className="text-body text-warm-700"
            dangerouslySetInnerHTML={{
              __html: renderBlocks(content.ourStory),
            }}
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-cream-100">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card">
              <h3 className="heading-sm text-forest-500 mb-4">Our Mission</h3>
              <p className="text-body text-warm-700 italic">
                "{content.mission}"
              </p>
            </div>
            <div className="card">
              <h3 className="heading-sm text-forest-500 mb-4">Our Vision</h3>
              <p className="text-body text-warm-700 italic">
                "{content.vision}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="heading-md text-forest-500 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.values.map((value, index) => (
              <div key={index} className="card">
                <h3 className="heading-sm text-forest-500 mb-3">{value.title}</h3>
                <p className="text-body-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding bg-cream-100">
        <div className="container-narrow">
          <h2 className="heading-md text-forest-500 mb-6">Who We Serve</h2>
          <div
            className="text-body text-warm-700"
            dangerouslySetInnerHTML={{
              __html: renderBlocks(content.whoWeServe),
            }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage-400 text-white">
        <div className="container-narrow text-center">
          <h2 className="heading-md mb-4">Get Involved</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            There are many ways to support our mission and make a difference in the
            lives of families in your community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/donate"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-sage-400 font-medium rounded-lg transition-all duration-200 hover:bg-cream-50"
            >
              Donate Now
            </a>
            <a
              href="/get-involved"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg transition-all duration-200 hover:bg-white hover:text-sage-400"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
