import type { Site, Metadata, Socials, AboutMe} from "@types";

export const SITE: Site = {
  NAME: "Anki Yang",
  EMAIL: "ankiyang1201@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Anki Yang's portfolio",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "About Anki",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Just Blog",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "Telegram",
    HREF: "https://t.me/freedomank",
  },
  { 
    NAME: "Discord",
    HREF: " https://discord.com/users/nanana7711"
  },
  {
    NAME: "Linkedin",
    HREF: "https://www.linkedin.com/in/ankiyang",
  }
];

export const ABOUTCONTENT: AboutMe = {
  TITLE: "About | Anki Yang", 
  SUBTITLE: "Some information about myself",
  DESCRIPTION: `
  ![Side](/side.jpg)

  Hello, stranger! **My name is Anki**, 
  and I was born in 1992 in China. 
  After graduating with an engineering degree, 
  I embarked on a journey into programming. 
  I love playing games since I was young and always 
  very curious to know how softwares all worked under the hood. 
  I started to **self-learning** about web development and launched 
  my career in China. 
  I chose **backend development** becase I am interested in knowing how the product works 
  behind the scenes, in a place where the user sees nothing and does not know how the information is processed, 
  how it is stored, etc.
  

  In 2019, I moved to **New Zealand** to start a new adventure, completed a Master's degree in **Computer Science**. 
  Over the graduate courses, I significantly expanded my knowldge and perspective in 
  software development. Since then, I have been working as a backend developer, continuously honing my skills.

  During my 5 years in New Zealand, I have grown from a novice self-taught programmer into 
  a confident **senior developer** with advanced skills, capable of handling complex challenges independently. 
  This journey has not only shaped my technical abilities but also strengthened my confidence in my role.


  In my free time, I enjoy outdoor activities like **running** and hiking. 
  I’m also a big music lover and am learning **English** and **Japanese** to better 
  connect with others and express myself. 
  I have a deep appreciation for nature and animals, and I love traveling with those 
  close to me. I’m also an avid reader, with a particular interest in novels, history books. 
  `, // Markdown is supported

};
