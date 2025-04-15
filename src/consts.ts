import type { Site, Metadata, Socials, AboutMe} from "@types";

export const SITE: Site = {
  NAME: "Anki",
  EMAIL: "ankiiy@proton.me",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Anki's portfolio",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "About Anki",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Just Blog",
};

export const TECH_BLOG: Metadata = {
  TITLE: "Tech Blog",
  DESCRIPTION: "Technical articles, tutorials and insights",
};

export const CAREER_BLOG: Metadata = {
  TITLE: "Career Growth",
  DESCRIPTION: "Career development, soft skills, and professional growth insights",
};

// Kept for reference but not currently used
export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

// Kept for reference but not currently used
export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Linkedin",
    HREF: "https://www.linkedin.com/in/ankiyang",
  }
];

export const ABOUTCONTENT: AboutMe = {
  TITLE: "About | Anki",
  SUBTITLE: "About myself",
  DESCRIPTION: `
  ![Side](/side.jpg)

  Hello, stranger! **My name is Anki**. 
  After graduating with an engineering degree from college, 
  I embarked on a journey into programming. 
  I love playing games since I was young and always 
  very curious to know how software all worked under the hood. 
  I started to self-learning about web development and launched my career. 
  I chose **backend development** because I am interested in knowing how the product works 
  behind the scenes, in a place where the user sees nothing and does not know how the information is processed, 
  how it is stored, etc.
  
  In 2019, I moved to New Zealand, completed a Master's degree in Computer Science. Since then, 
  I have been working as a backend developer, continuously honing my skills.

  Over the past years as an SWE, I've grown from a novice programmer into a senior developer capable of 
  handling complex challenges independently. This journey has not only shaped my technical abilities 
  but also strengthened my confidence in my role.


  When I'm not coding, I enjoy outdoor activities like running and hiking. 
  I'm also a passionate music lover and language learner. 
  My love for nature and animals drives my enjoyment of traveling with those 
  close to me. I’m also an avid reader, with a particular interest in novels, self management and psychology. 
  `, // Markdown is supported

};
