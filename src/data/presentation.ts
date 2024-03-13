type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string[];
  description: string[];
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "guido.forloop@gmail.com",
  title: ["Ciao! Sono Guido ✌️", "amichevole Recruiter di quartiere."],
  // profile: "/profile.webp",
  description: [
    "I love getting into relationship with people, technology, dogs (but also cats), LinkedIn, tech communities, I even love developers. However, I don't know if the feeling is mutual.",
    "My favorite word is 'abigeato.'",
    "Lately I also love GitHub, if you want to browse you can find my repos here: https://github.com/GuidoPenta",
    "Oh, I founded forloop.tech , the first company that offers Recruiting as a Service with subcriptions.",
  ],
  socials: [
    {
      label: "X",
      link: "https://twitter.com/guidopenta",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/guido-penta/",
    },
    {
      label: "Github",
      link: "https://github.com/GuidoPenta",
    },
  ],
};

export default presentation;
