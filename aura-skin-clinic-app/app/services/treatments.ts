type TreatmentDetail = {
  intro: string;
  description: string;
  procedure: string;
  assetPrefix: string;
  beforeAlt: string;
  afterAlt: string;
  compare?: boolean;
};

export const treatmentDetails: Record<string, TreatmentDetail> = {
  "Laser pigmentation removal": {
    intro: "Targeted care for dark spots and uneven skin tone.",
    description: "Laser pigmentation removal targets excess pigment in the skin to help fade dark spots and improve uneven skin tone.",
    procedure: "During treatment, a handheld laser directs controlled light energy at the affected areas, targeting the pigment that gives the spots their colour.",
    assetPrefix: "pigmentation",
    beforeAlt: "AI-generated illustration of a woman’s cheek with pigmentation",
    afterAlt: "AI-generated illustration of the same cheek with reduced pigmentation",
  },
  // https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-faqs
  "Hair reduction": {
    intro: "Less unwanted hair. Less everyday upkeep.",
    description: "Laser hair reduction targets hair follicles to reduce unwanted hair growth over a course of treatments.",
    procedure: "A handheld laser delivers pulses of light to the treatment area. Pigment in the hair absorbs this energy, which heats the follicles and helps reduce future growth.",
    assetPrefix: "hair-reduction",
    beforeAlt: "AI-generated illustration of a lower leg with visible dark hair",
    afterAlt: "AI-generated illustration of the same lower leg with reduced hair",
  },
  // https://www.aad.org/public/cosmetic/younger-looking/firm-sagging-skin
  "Skin tightening": {
    intro: "A firmer feel. A more defined contour.",
    description: "Non-surgical skin tightening uses controlled energy to heat deeper layers of skin, stimulating collagen for a firmer appearance over time.",
    procedure: "A handheld device is applied to the treatment area, delivering energy beneath the skin’s surface to encourage the skin’s natural collagen response.",
    assetPrefix: "skin-tightening",
    beforeAlt: "AI-generated illustration of a woman with mild skin laxity around the jaw and neck",
    afterAlt: "AI-generated illustration of the same woman with subtly firmer-looking jaw and neck skin",
  },
  "Warts, corns and calluses removal": {
      "intro": "Care for raised growths and thickened skin.",
      "description": "Treatment removes or reduces unwanted warts and helps relieve thickened skin caused by corns and calluses.",
      "procedure": "Depending on the lesion, treatment may involve freezing a wart, applying a prescribed preparation or carefully reducing hardened skin. The method is chosen for the type and location of the growth.",
      "assetPrefix": "warts-removal",
      "beforeAlt": "AI-generated illustration of a hand with a small common wart",
      "afterAlt": "AI-generated illustration of the same hand with the wart reduced"
  },
  "Tattoo removal": {
      "intro": "Gradually fade unwanted ink.",
      "description": "Laser tattoo removal breaks down tattoo pigment so the body can gradually clear the smaller ink particles.",
      "procedure": "A handheld laser delivers short pulses of light over the tattoo. Treatment is usually carried out over several sessions, allowing the skin time to heal between visits.",
      "assetPrefix": "tattoo-removal",
      "beforeAlt": "AI-generated illustration of a forearm with a small leaf tattoo",
      "afterAlt": "AI-generated illustration of the same tattoo with faded residual ink"
  },
  "PRP/PRF face treatment": {
      "intro": "Platelet-based care for skin rejuvenation.",
      "description": "PRP and PRF use components from your own blood in treatments intended to improve skin quality and texture.",
      "procedure": "A small blood sample is collected and spun to separate a platelet-rich preparation. It is then introduced into the treatment areas using injections or alongside microneedling, depending on the technique.",
      "assetPrefix": "prp-face",
      "beforeAlt": "AI-generated illustration of facial skin with fine lines and uneven texture",
      "afterAlt": "AI-generated illustration of the same face with subtly refined skin texture"
  },
  "Face lifting": {
      "intro": "Support for a more defined facial contour.",
      "description": "Face lifting treatments aim to improve sagging around the cheeks and jawline for a more lifted appearance.",
      "procedure": "The technique depends on the lifting method selected. Options may involve an energy-based device applied to the skin or a lifting procedure that supports the underlying tissue.",
      "assetPrefix": "face-lifting",
      "beforeAlt": "AI-generated illustration of mild lower-face sagging",
      "afterAlt": "AI-generated illustration of the same face with a subtly lifted lower cheek"
  },
  "Microdermabrasion": {
      "intro": "Gentle exfoliation for smoother-feeling skin.",
      "description": "Microdermabrasion removes surface dead skin cells to help improve dullness and superficial roughness.",
      "procedure": "A handheld tip is passed over the skin, gently exfoliating the outer layer while suction lifts away the loosened cells.",
      "assetPrefix": "microdermabrasion",
      "beforeAlt": "AI-generated illustration of mildly dry rough cheek texture",
      "afterAlt": "AI-generated illustration of the same cheek with subtly smoother surface texture"
  },
  "Hydra facial": {
      "intro": "Cleanse, refresh and hydrate.",
      "description": "A hydrating facial combines exfoliation, pore cleansing and serum application to refresh congested or dehydrated skin.",
      "procedure": "A specialised handheld tip moves across the face, loosening surface debris and using gentle suction to lift impurities while delivering hydrating solutions.",
      "assetPrefix": "hydra-facial",
      "beforeAlt": "AI-generated illustration of mildly dehydrated facial skin",
      "afterAlt": "AI-generated illustration of the same face with a subtly refreshed hydrated appearance"
  },
  "Vitiligo": {
      "intro": "Care for patches of lost skin pigment.",
      "description": "Vitiligo treatment aims to help control the condition and encourage pigment to return in affected areas.",
      "procedure": "Treatment may involve prescribed creams or controlled light therapy, depending on the type and extent of the patches. Light-based treatment is delivered in planned sessions to the affected skin.",
      "assetPrefix": "vitiligo",
      "beforeAlt": "AI-generated illustration of forearm skin with vitiligo patches",
      "afterAlt": "AI-generated illustration of partial repigmentation with substantial patches remaining"
  },
  "Psoriasis": {
      "intro": "Help for scaling, irritation and flare-ups.",
      "description": "Psoriasis treatment helps reduce inflammation and scaling and manage recurring patches of affected skin.",
      "procedure": "Depending on severity, care may use prescribed skin preparations, controlled light therapy or medicines. Topical treatments are applied to the affected areas; light therapy is given in measured sessions.",
      "assetPrefix": "psoriasis",
      "beforeAlt": "AI-generated illustration of a mild scaly psoriasis plaque on an elbow",
      "afterAlt": "AI-generated illustration of the same elbow with reduced scaling and a residual patch"
  },
  "Microneedling": {
      "intro": "Encourage collagen for more even skin texture.",
      "description": "Microneedling creates tiny controlled punctures in the skin to stimulate collagen production and help soften the appearance of shallow scars and uneven texture.",
      "procedure": "A device fitted with fine sterile needles is passed over the treatment area at a controlled depth. A numbing cream may be used beforehand to improve comfort.",
      "assetPrefix": "microneedling",
      "beforeAlt": "AI-generated illustration of shallow pitted cheek scars",
      "afterAlt": "AI-generated illustration of the same cheek with modestly softened residual scars"
  },
  "Hyperhidrosis": {
      "intro": "Care for excessive sweating.",
      "description": "Hyperhidrosis treatment helps reduce sweating that affects everyday comfort, especially on the palms, feet or underarms.",
      "procedure": "Options may include prescription antiperspirants, iontophoresis or injections. Iontophoresis passes a mild electrical current through water around the hands or feet; injections are placed in the affected skin to temporarily reduce sweating signals.",
      "assetPrefix": "hyperhidrosis",
      "beforeAlt": "AI-generated treatment illustration of palms with a light sheen of moisture",
      "afterAlt": "",
      "compare": false
  },
  "Acne treatments": {
      "intro": "Manage breakouts and clogged pores.",
      "description": "Acne treatment helps clear blocked pores and reduce inflammation, with the aim of controlling active breakouts.",
      "procedure": "Treatment may combine prescribed creams or gels with medication when needed. Selected procedures can be added for suitable skin, depending on the type and severity of the acne.",
      "assetPrefix": "acne-treatment",
      "beforeAlt": "AI-generated illustration of cheek acne and small blemishes",
      "afterAlt": "AI-generated illustration of the same cheek with fewer active blemishes and residual marks"
  },
  "Scar treatments": {
      "intro": "Soften the appearance of healed scars.",
      "description": "Scar treatments can improve a scar’s texture, colour or raised appearance, helping it blend more closely with the surrounding skin.",
      "procedure": "Depending on the scar, treatment may involve laser resurfacing, microneedling, injections or topical preparations. Each method works differently to remodel or flatten scar tissue over time.",
      "assetPrefix": "scar-treatment",
      "beforeAlt": "AI-generated illustration of a fully healed slightly raised forearm scar",
      "afterAlt": "AI-generated illustration of the same scar looking flatter but still visible"
  },
};
