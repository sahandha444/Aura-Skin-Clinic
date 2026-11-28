const generalEnquiry = "Hello Aura, I’d like to make an enquiry.";

export function getWhatsAppUrl(message = generalEnquiry) {
  return `https://wa.me/94777682014?text=${encodeURIComponent(message)}`;
}

export const generalWhatsAppUrl = getWhatsAppUrl();
