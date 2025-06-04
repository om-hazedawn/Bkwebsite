interface WhatsNewItem {
  id: number;
  title: string;
  description: string;
  date: string;
  image?: {
    url: string;
  };
}

interface WhatsNewResponse {
  data: WhatsNewItem[];
}

export async function getWhatsNew(): Promise<WhatsNewResponse> {
  // This is a placeholder implementation
  // Replace with actual API call when backend is ready
  return {
    data: [
      {
        id: 1,
        title: "New Project Announcement",
        description: "Build King has been awarded a major infrastructure project...",
        date: "2024-06-04",
        image: {
          url: "/construction-port.png"
        }
      },
      {
        id: 2,
        title: "Sustainability Achievement",
        description: "Our commitment to environmental sustainability...",
        date: "2024-06-03",
        image: {
          url: "/sustainability/csr_cc.webp"
        }
      }
    ]
  };
}