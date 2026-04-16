export const serviceCategories = [
  {
    title: "Growth Services",
    items: [
      { name: "Sales & Demand Generation", slug: "sales-demand-generation" },
      { name: "Paid Advertising", slug: "paid-advertising" },
      { name: "Email Marketing", slug: "email-marketing" },
    ],
  },
  {
    title: "Creative Services",
    items: [
      { name: "Content Creation", slug: "content-creation" },
      { name: "Social Media Management", slug: "smm" },
      { name: "Photorealistic 3D Animation", slug: "3d-animation" },
    ],
  },
  {
    title: "Talent & Agency Solutions",
    items: [
      { name: "Dedicated Resources", slug: "dedicated-resources" },
      { name: "White Label Services", slug: "white-label" },
    ],
  },
  {
    title: "Capital Solutions",
    items: [
      { name: "Fundraising Support", slug: "fundraising" },
      { name: "Founders Portal", slug: "founders-portal" },
      { name: "Investors Portal", slug: "investors-portal" },
    ],
  },
];

export const businessTypes = [
  { label: "For Startups & Scale-ups", value: "startups" },
  { label: "For Enterprise", value: "enterprise" },
];

export const commitmentOptions = [
  { label: "3 months", value: 3 },
  { label: "6 months", value: 6 },
  { label: "12 months", value: 12 },
];

export const pricingPlans = {
  "sales-demand-generation": {
    startups: {
      3: [
        {
          name: "Starter",
          price: 1499,
          setup: 999,
          sqaPrice: 500,
          badge: null,
          commitment: "3 months",
          whoIsItFor: "Early-stage businesses building their first repeatable sales pipeline.",
          channels: { count: 1, label: "Any 1 channel", icons: ["email", "linkedin"] },
          highlights: [
            "Fully managed outreach across one channel",
            "200 leads sourced & enriched monthly",
            "Up to 2 in-house specialist team members to collaborate with you",
            "CRM integration & data sync",
            "Domain & account warming included",
            "List hygiene & verification",
            "GorillaPerks™ Investor Portal, Multi-Service & Partner Discounts",
            "Dedicated SDR add-on available",
          ],
          matrixFeatures: [
            { tag: "BUILT-IN", label: "Algorithmic Team Profit Sharing" },
            { tag: "OPTIONAL", label: "Performance Recognition Tips" },
            { tag: "ADD-ON", label: "Outcome-Linked Success Bonus" },
          ],
        },
        {
          name: "Grow",
          price: 2499,
          setup: 1499,
          sqaPrice: 500,
          badge: "POPULAR",
          commitment: "3 months",
          whoIsItFor: "Growth-stage businesses scaling customer acquisition across multiple channels.",
          channels: { count: 2, label: "Any 2 channels", icons: ["email", "linkedin"] },
          highlights: [
            "Fully managed outreach across three channels",
            "400 leads sourced & enriched monthly",
            "Up to 3 in-house specialist team members to collaborate with you",
            "Written appointment setting by our team",
            "CRM integration and data sync",
            "Domain & account warming included",
            "List hygiene & verification",
            "GorillaPerks™ Investor Portal, Multi-Service & Partner Discounts",
            "Dedicated SDR add-on available",
          ],
          matrixFeatures: [
            { tag: "BUILT-IN", label: "Algorithmic Team Profit Sharing" },
            { tag: "OPTIONAL", label: "Performance Recognition Tips" },
          ],
        },
        {
          name: "Scale",
          price: 5999,
          setup: 1799,
          sqaPrice: 500,
          badge: null,
          commitment: "6 months",
          whoIsItFor: "Established businesses accelerating revenue with comprehensive multi-channel outbound.",
          channels: { count: 3, label: "3 channels", icons: ["email", "linkedin", "phone"] },
          highlights: [
            "Fully managed demand generation across email, LinkedIn, and phone",
            "750 leads sourced & enriched monthly",
            "Up to 4 in-house specialist team members to collaborate with you",
            "Written appointment setting by our UK-based team",
            "Comprehensive reputation management",
            "Domain & account warming included",
            "List hygiene & verification",
            "GorillaPerks™ Investor Portal, Multi-Service & Partner Discounts",
            "Dedicated SDR add-on available",
          ],
          matrixFeatures: [
            { tag: "BUILT-IN", label: "Algorithmic Team Profit Sharing" },
            { tag: "OPTIONAL", label: "Performance Recognition Tips" },
          ],
        },
      ],
    },
  },
};

// Default to sales-demand-generation for all commitment/type combos
function getPlans(service, type, months) {
  const servicePlans = pricingPlans[service];
  if (!servicePlans) return pricingPlans["sales-demand-generation"].startups[3];
  const typePlans = servicePlans[type];
  if (!typePlans) return pricingPlans["sales-demand-generation"].startups[3];
  return typePlans[months] || pricingPlans["sales-demand-generation"].startups[3];
}

export { getPlans };