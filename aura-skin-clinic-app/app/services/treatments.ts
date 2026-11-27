type TreatmentDetail = {
  intro: string;
  description: string;
  procedure: string;
  assetPrefix: string;
  beforeAlt: string;
  afterAlt: string;
  compare?: boolean;
};

export const aestheticTreatmentDetails: Record<string, TreatmentDetail> = {
  Facials: {
    intro: "Refresh your skin with personalised care.",
    description: "A facial combines cleansing, exfoliation and moisturising to refresh the skin. Products and techniques are chosen for your skin type and concerns.",
    procedure: "After assessing your skin, the practitioner cleanses and gently exfoliates it. A suitable mask and moisturiser may follow, with additional steps selected for your needs.",
    assetPrefix: "aesthetic-facials",
    beforeAlt: "AI-generated illustration of mildly dry facial skin",
    afterAlt: "AI-generated illustration of the same face with subtly hydrated skin and natural texture",
  },
  Cleanup: {
    intro: "A fresh start for congested skin.",
    description: "A cleanup focuses on cleansing and surface congestion, helping refresh skin that feels oily or has visible blackheads. It does not replace medical care for persistent acne.",
    procedure: "The skin is cleansed and gently exfoliated. Selected blackheads may be extracted where appropriate, followed by soothing skincare suited to your skin.",
    assetPrefix: "aesthetic-cleanup",
    beforeAlt: "AI-generated illustration of visible blackheads around the nose",
    afterAlt: "AI-generated illustration of the same nose with fewer blackheads and natural pores remaining",
  },
  Manicure: {
    intro: "Neat nails. Cared-for hands.",
    description: "A manicure tidies and shapes fingernails while caring for the surrounding skin. A natural finish or polish can complete the service.",
    procedure: "Nails are cleaned, trimmed if needed and filed into shape. The hands are moisturised and a finish is applied if requested, with gentle care around the cuticles.",
    assetPrefix: "aesthetic-manicure",
    beforeAlt: "AI-generated illustration of natural fingernails with slightly uneven edges",
    afterAlt: "AI-generated illustration of the same hand with neatly shaped nails and a clear finish",
  },
  Pedicure: {
    intro: "Freshen up your feet and toenails.",
    description: "A pedicure provides routine cosmetic care for healthy toenails and the surrounding skin, leaving feet neatly groomed and moisturised.",
    procedure: "Feet are cleaned, healthy toenails are trimmed and filed, and moisturiser is applied. A natural finish or polish may be added according to your preference.",
    assetPrefix: "aesthetic-pedicure",
    beforeAlt: "AI-generated illustration of healthy natural toenails before grooming",
    afterAlt: "AI-generated illustration of the same foot with neatly groomed toenails and a clear finish",
  },
  Waxing: {
    intro: "Smooth skin with less visible hair.",
    description: "Waxing temporarily removes unwanted hair from the root. It can be used on suitable body areas, with regrowth varying from person to person.",
    procedure: "The practitioner checks and cleans the area, then applies suitable wax and removes it with the hair. Gentle aftercare helps soothe the skin following the service.",
    assetPrefix: "aesthetic-waxing",
    beforeAlt: "AI-generated illustration of natural dark hair on a lower leg",
    afterAlt: "AI-generated illustration of the same lower leg after hair removal with natural skin texture retained",
  },
  Threading: {
    intro: "Precise grooming for a natural brow shape.",
    description: "Threading removes selected unwanted facial hairs using twisted thread. It is often used to tidy eyebrows while keeping their natural fullness.",
    procedure: "The practitioner discusses the desired shape, then rolls twisted thread over selected hairs to lift them from the root. The skin is gently soothed afterwards.",
    assetPrefix: "aesthetic-threading",
    beforeAlt: "AI-generated illustration of a natural eyebrow with stray hairs",
    afterAlt: "AI-generated illustration of the same eyebrow with stray hairs tidied and natural fullness retained",
  },
};

export const bodyTreatmentDetails: Record<string, TreatmentDetail> = {
  "Skin tightening": {
    intro: "Care for firmer-looking body skin.",
    description: "Non-surgical body skin tightening uses controlled energy to encourage collagen renewal and improve the appearance of mild skin laxity over time.",
    procedure: "After assessing the area, the clinician passes a suitable treatment device over the skin. The technique and number of sessions depend on your skin and the area being treated.",
    assetPrefix: "body-skin-tightening",
    beforeAlt: "AI-generated illustration of mild loose skin on an upper arm",
    afterAlt: "AI-generated illustration of the same arm with subtly firmer-looking skin",
  },
  "Body shaping": {
    intro: "A considered approach to body contours.",
    description: "Body shaping focuses on selected areas of fullness or skin laxity to make modest changes to body contour. It is not a treatment for obesity or a replacement for weight management.",
    procedure: "The clinician assesses your goals and the treatment area, then discusses suitable non-surgical options. A handheld device or applicator may be used, depending on the chosen method.",
    assetPrefix: "body-shaping",
    beforeAlt: "AI-generated illustration of an adult in fitted sportswear before body-contour care",
    afterAlt: "AI-generated illustration of the same adult with a modest change in waist contour",
  },
  "Fat reduction": {
    intro: "Target selected areas of fullness.",
    description: "Non-invasive fat reduction aims to reduce small localised pockets of fat in suitable patients. Changes develop gradually and vary with the treatment used.",
    procedure: "Following an assessment, a suitable applicator is placed over the selected area. The device may use controlled cooling or energy, depending on the method agreed at consultation.",
    assetPrefix: "body-fat-reduction-shirtless",
    beforeAlt: "AI-generated illustration of a shirtless adult man with mild abdominal fullness",
    afterAlt: "AI-generated illustration of the same abdomen with a subtle local contour change",
  },
  "Diet planning": {
    intro: "Everyday meals. A plan that fits you.",
    description: "Diet planning supports balanced eating around your health needs, food preferences and daily routine. The focus is on practical portions, variety and sustainable habits.",
    procedure: "Your consultation reviews your usual meals, health history and goals. You receive personalised guidance on food choices and portions, with follow-up to review progress.",
    assetPrefix: "body-diet-planning-single",
    beforeAlt: "AI-generated illustration of a balanced lunch with rice, chicken and vegetables",
    afterAlt: "",
    compare: false,
  },
  "RF/ ultrasound": {
    intro: "Energy-based care for skin and contours.",
    description: "Radiofrequency and ultrasound are different technologies used in selected non-surgical body treatments. Depending on the device, treatment may address mild skin laxity or localised fullness.",
    procedure: "A clinician applies a suitable handpiece to the treatment area, using coupling gel where required. Controlled energy is delivered beneath the skin, with settings and session planning tailored to the device and your assessment.",
    assetPrefix: "body-rf-ultrasound",
    beforeAlt: "AI-generated illustration of mild upper-arm skin laxity",
    afterAlt: "AI-generated illustration of the same upper arm with a subtle change in skin firmness",
  },
  "Management of allergic conditions": {
    intro: "Understand triggers. Manage symptoms.",
    description: "Allergy care begins with reviewing your symptoms and possible triggers. Treatment aims to manage reactions and support a practical plan for avoiding confirmed allergens.",
    procedure: "The doctor reviews your history and examines any affected skin. Care may include trigger-avoidance advice, suitable medicines or referral for testing.",
    assetPrefix: "body-allergy-care",
    beforeAlt: "AI-generated illustration of a mildly irritated dry patch on a forearm",
    afterAlt: "",
    compare: false,
  },
};

export const hairTreatmentDetails: Record<string, TreatmentDetail> = {
  Dandruff: {
    intro: "Care for flakes and an itchy scalp.",
    description: "Dandruff care helps manage loose flakes and scalp irritation. The right approach depends on your scalp condition and hair-care routine.",
    procedure: "After examining your scalp, the doctor may recommend a medicated shampoo or scalp preparation, with guidance on how to apply it and how often to use it.",
    assetPrefix: "hair-dandruff-v2",
    beforeAlt: "AI-generated illustration of dandruff flakes at the hair roots",
    afterAlt: "AI-generated illustration of the same scalp with fewer loose flakes",
  },
  "Hair fall": {
    intro: "Understand shedding. Plan the right care.",
    description: "Hair-fall care starts by identifying the cause of shedding or thinning. Treatment is chosen for your pattern of hair loss and scalp health.",
    procedure: "The doctor examines your scalp and reviews your health and hair-care history. Care may include topical treatment, prescribed medication or selected procedures, with follow-up to assess progress.",
    assetPrefix: "hair-fall-v2",
    beforeAlt: "AI-generated illustration of thinning hair at the crown",
    afterAlt: "AI-generated illustration of the same crown with modestly denser hair and residual thinning",
  },
  "Scalp psoriasis": {
    intro: "Manage scaling and scalp irritation.",
    description: "Scalp psoriasis care aims to reduce inflammation and loosen scales while helping manage recurring flare-ups.",
    procedure: "Treatment may involve prescribed scalp preparations, medicated shampoos or scale-softening products. The doctor selects an approach suited to the extent of the affected areas.",
    assetPrefix: "hair-scalp-psoriasis-v2",
    beforeAlt: "AI-generated illustration of a scaly patch at the hairline",
    afterAlt: "AI-generated illustration of the same hairline with less scaling and a residual patch",
  },
  "Hair PRP/PRF": {
    intro: "Platelet-based care for thinning hair.",
    description: "PRP and PRF use a platelet-rich preparation from your own blood as part of a treatment plan for selected types of hair thinning. Suitability and response vary.",
    procedure: "A small blood sample is collected and spun to separate the preparation. It is then introduced into selected scalp areas using fine injections, with the treatment schedule discussed at consultation.",
    assetPrefix: "hair-prp-v2",
    beforeAlt: "AI-generated illustration of mild diffuse crown thinning",
    afterAlt: "AI-generated illustration of the same crown with a modest change in hair density",
  },
  "Micro needling": {
    intro: "Targeted scalp care for thinning areas.",
    description: "Scalp microneedling uses fine needles to create controlled tiny punctures. It may be combined with other hair-loss treatments where appropriate.",
    procedure: "A sterile microneedling device is passed over selected scalp areas at a controlled depth. The doctor plans the sessions and any accompanying treatment after assessing your scalp.",
    assetPrefix: "hair-microneedling-v2",
    beforeAlt: "AI-generated illustration of a widened hair part",
    afterAlt: "AI-generated illustration of the same part with modestly denser surrounding hair",
  },
  "High frequency": {
    intro: "An additional step in scalp care.",
    description: "High-frequency scalp care uses a glass electrode as part of a scalp-care session. The doctor assesses whether it suits your scalp-care plan. It is not a substitute for treatment of the underlying cause of hair loss.",
    procedure: "A clinician moves a comb-shaped glass electrode through the hair near the scalp using the device's prescribed settings. The comparison illustrates grooming and surface appearance only, rather than new hair growth.",
    assetPrefix: "hair-high-frequency-v2",
    beforeAlt: "AI-generated illustration of scalp roots with loose flakes and clumped hair",
    afterAlt: "AI-generated illustration of the same scalp after grooming, with no change in hair density",
  },
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
