// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Materials for courses I taught",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-research-plans",
        
          title: "Research plans",
        
        description: "This is a first post to talk a little about my work",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/interest/";
          
        },
      },{id: "post-about-me",
        
          title: "About me",
        
        description: "This is a first post to talk a little about my work",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/career/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-new-website-is-on-sparkles-smile-this-is-a-guide-to-all-our-work-on-research-teaching-and-more-smile",
          title: 'New website is ON! :sparkles: :smile: This is a guide to all our...',
          description: "",
          section: "News",},{id: "news-vaga-de-doutorado-aberta-para-2026-1-no-cin-ufpe",
          title: 'Vaga de doutorado aberta para 2026.1 no CIn-UFPE',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_doutorado/";
            },},{id: "news-vagas-de-mestrado-abertas-para-2026-1-no-cin-ufpe",
          title: 'Vagas de mestrado abertas para 2026.1 no CIn-UFPE',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_mestrado/";
            },},{id: "news-descrição-do-pré-projeto-amp-gt-vagas-para-mestrado-e-doutorado-agora-estão-fechadas",
          title: 'Descrição do Pré-projeto–&amp;amp;gt;  Vagas para mestrado e doutorado agora estão fechadas',
          description: "",
          section: "News",},{id: "projects-aprendizado-semissupervisionado-online-para-predição-de-mudanças-críticas-em-software",
          title: 'Aprendizado semissupervisionado online para predição de mudanças críticas em software',
          description: "Projeto para predição de defeitos em software",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-am-para-qualidade-no-desenvolvimento-de-software",
          title: 'AM para qualidade no desenvolvimento de software',
          description: "Aprendizado de máquina online para a melhoria da qualidade e agilidade no desenvolvimento de software",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-aprendizado-de-máquina-para-agropecuária-4-0",
          title: 'Aprendizado de Máquina para agropecuária 4.0',
          description: "SISTEMAS INTELIGENTES – MODELAGEM PREDITIVA E INTERNET DAS COISAS PARA A PRODUÇÃO ANIMAL NA AGROPECUÁRIA 4.0",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-comitês-de-classificadores-semi-supervisionados-de-larga-escala",
          title: 'Comitês de classificadores semi-supervisionados de larga escala',
          description: "ML semissupervisionada eficiente",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-stable-prediction-of-defect-inducing-software-changes-spdisc",
          title: 'Stable Prediction of Defect-Inducing Software Changes (SPDISC)',
          description: "Software Defect Prediction with Data Stream Learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/other_project_templates/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/other_project_templates/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/other_project_templates/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/other_project_templates/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/other_project_templates/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/other_project_templates/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%67%66%73@%63%69%6E.%75%66%70%65.%62%72", "_blank");
        },
      },{
        id: 'social-lattes',
        title: 'Lattes',
        section: 'Socials',
        handler: () => {
          window.open("http://lattes.cnpq.br/2526739219416964", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-4806-3652", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=bxHKVogAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://portal.cin.ufpe.br/pessoas-e-grupos/professores/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
