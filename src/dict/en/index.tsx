import { technologies } from "../../constants";

export default {
  // links
  about: "about",
  projects: "projects",
  experiences: "experiences",
  contact: "contact",

  // hero section
  greeting: "Hi i'm",
  fullname: "IMRANE AABBOU",
  catchphrase: <>Logique or art... <br className="sm:block hidden" />— Why not both ?</>,

  // about
  aboutTitle: "Overview.",
  aboutContent: <>
    <p>
      I’m a Full Stack Developer with a passion for creating web applications that seamlessly blend functionality and design. Whether working on the front-end or back-end, I enjoy building <strong className='font-bold'>efficient</strong>, <strong className='font-bold'>user-friendly</strong> solutions.
    </p>

    <p>
      I work with advanced technologies to create <strong className='font-bold'>clean</strong>, <strong className='font-bold'>scalable</strong>, and <strong className='font-bold'>maintainable</strong> code. When the solution isn’t obvious, I excel at <strong className='font-bold'>finding the right approach</strong> and making <strong className='font-bold'>thoughtful decisions</strong> to ensure the best outcome.

    </p>
    <p>
      I’m always pushing to learn more and improve with every challenge, aiming to deliver work that stands out both in <strong className='font-bold'>performance</strong> and <strong className='font-bold'>experience</strong>.
    </p>
  </>,


  // technologies section
  technologiesTitle: "Technologies.",


  // projects section
  projectsTitle: 'Projects.',
  projectsContent: <>
    These projects highlight what I’ve learned and how I apply it in real-world scenarios.<br />
    Each one comes with a brief description and links to code repositories or live demos.<br />
    They show my ability to handle complex problems, adapt to different technologies,
    and manage projects effectively—though I’m always refining my skills as I go.
  </>,


  // experiences section
  experiencesTitle: "Education & Experience.",
  experiencesResume: <>
    For more details check <a href="/cv.pdf" target='_blank' className="underline underline-offset-4 decoration-2 hover:text-dim">my resume</a>
  </>,

  // contact section
  contactTitle: "Contact.",
  formName: "Your Name",
  formNamePlaceholder: "What's your name ?",
  formEmail: "Your Email",
  formEmailPlaceholder: "For contact purpose only.",
  formMessage: "Message",
  formMessagePlaceholder: "Feel free to message. I will respond soon as I can !",
  send: "Send",
  sending: "Sending...",
};
