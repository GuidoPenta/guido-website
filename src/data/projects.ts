export type Project = {
  title: string;
  description: string;
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Guida Galattica per il CV",
    description: "Il CV per il mercato italiano fatto come si deve! :)",
    link: "https://github.com/GuidoPenta/galactic-CV-guide",
  },
  {
    title: "Guida Galattica al profilo LinkedIn",
    description:
      "L'obiettivo è quello di darti degli spunti utili per rendere il tuo profilo LinkedIn attrattivo ma soprattutto 'keyword-friendly'.",
    link: "https://github.com/GuidoPenta/galactic-linkedin-profile-guide",
  },
  {
    title: "Italian tech communities",
    description:
      "Un insieme di communities, podcast, canali Twitch/Youtube e molto altro del tech italiano. Enjoy!",
    link: "https://github.com/GuidoPenta/awesome-italian-tech-communities",
  },
];

export default projects;
