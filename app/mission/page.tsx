import { Metadata } from "next";
import { sanityFetch } from "@/lib/sanity";
import type { MissionPage } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "Learn about the programs and services Chosen and Cherished offers to support mothers and families.",
};

const defaultContent = {
  title: "Our Mission",
  intro: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "At Chosen and Cherished, we provide comprehensive support to mothers and families from pregnancy through early childhood. Our programs are designed to address both practical needs and emotional well-being.",
        },
      ],
    },
  ],
  programs: [
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
};

async function getMissionContent(): Promise<MissionPage | null> {
  try {
    return await sanityFetch<MissionPage>({
      query: `*[_type == "missionPage"][0]`,
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
        return `<p>${text}</p>`;
      }
      return "";
    })
    .join("");
}

export default async function MissionPage() {
  const mission = await getMissionContent();
  const content = mission && mission.title ? mission : defaultContent;

  return (
    <>
      {/* Hero */}
      <section className="bg-cream-100 section-padding">
        <div className="container-narrow text-center">
          <h1 className="heading-lg text-forest-500 mb-4">{content.title}</h1>
          <div
            className="text-xl text-warm-700 max-w-2xl mx-auto text-body"
            dangerouslySetInnerHTML={{
              __html: renderBlocks(content.intro),
            }}
          />
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="heading-md text-forest-500 text-center mb-12">
            Programs & Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.programs.map((program, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">{program.icon}</span>
                  <div>
                    <h3 className="heading-sm text-forest-500 mb-3">
                      {program.title}
                    </h3>
                    <p className="text-body-sm">{program.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="section-padding bg-cream-100">
        <div className="container-narrow text-center">
          <blockquote className="text-xl md:text-2xl text-forest-500 font-serif italic leading-relaxed">
            "We believe that by supporting mothers and babies, we&apos;re investing in
            the future of our entire community."
          </blockquote>
        </div>
      </section>

      {/* How to Access */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="heading-md text-forest-500 mb-6">Need Assistance?</h2>
          <p className="text-body text-warm-700 mb-6">
            If you or someone you know could benefit from our services, we encourage
            you to reach out. There&apos;s no judgment here—only compassion and
            support.
          </p>
          <a
            href="https://app.boldsign.com/document/sign-bulk-links/?documentId=bb63d999-a396-410b-9d98-3aba278cc34fs_Rd6NF"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Request Assistance
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
