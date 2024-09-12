import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import photos from "../public/image.jpeg";
import portifolio_img from "../public/portifolio-project.png";
import { useRecoilState, useRecoilValue } from "recoil";
import { languageAtom } from "./atoms";

const translations = {
  header: {
    logo: {
      en: "Hamidillo's portifolio",
      ru: "Портфолио Хамидилло",
      uz: "Hamidilloning portfeliosi",
    },
    nav: {
      pojects: {
        en: "pojects",
        ru: "проекты",
        uz: "loyihalar",
      },
      technologies: {
        en: "technologies",
        ru: "технологии",
        uz: "texnologiyalar",
      },
      About: {
        en: "About",
        ru: "О",
        uz: "Haqida",
      },
    },
    headerDiv: {
      hello: {
        en: "Hello, i'm Hamidillo,",
        ru: "Привет, я Хамидилло,",
        uz: "Salom, men Hamidillo,",
      },
      devoloper: {
        en: " frontend devoloper",
        ru: "разработчик интерфейса",
        uz: "frontend dasturchi man",
      },
      FrontEnd: {
        en: "Junior FrontEnd Developer ( React Js )",
        ru: "Младший разработчик FrontEnd ( React Js)",
        uz: "Junior FrontEnd Developer ( React Js )",
      },
    },
  },
  main: {
    pojects: {
      projects: {
        en: "projects",
        ru: "проекты",
        uz: "loyihalar",
      },
      portifolio: {
        Landing: {
          en: "Landing page for frond-end devoloper",
          ru: "Целевая страница для front-end разработчика",
          uz: "Front-end dasturchi uchun ochilish sahifasi",
        },
        Responsive: {
          en: "Responsive React JS layout for landing page for front-end devoloper. React js, tailwind css, daisy UI",
          ru: "Адаптивный макет React JS для целевой страницы для front-end разработчика. React js, tailwind css, daisy UI",
          uz: "Front-end dasturchi uchun ochilish sahifasi uchun javob beruvchi React JS tartibi. React js, tailwind CSS, daisy UI",
        },
        live: {
          en: "live preview",
          ru: "просмотр в реальном времени",
          uz: "jonli ko'rish",
        },
        check: {
          en: "check on gitpub",
          ru: "проверьте на gitpub",
          uz: "gitpubda tekshiring",
        },
      },
    },
    technologies: {
      technologies: {
        en: "technologies",
        ru: "технологии",
        uz: "texnologiyalar",
      },
    },
    About: {
      About: {
        en: "about me",
        ru: "Обо мне",
        uz: "MEN HAQIMDA",
      },
      lorem: {
        en: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa veritatis hic provident voluptates possimus explicabo, accusantium ex? Fugit, cumque ipsum! Dolor atque dolore, numquam explicabo inventore quasi omnis, dignissimos sed ipsa, ab laboriosam doloremque? Deleniti facere sed animi fugit itaque nesciunt esse, inventore est quo! Culpa impedit, expedita corrupti praesentium velit doloribus autem, non nesciunt corporis doloremque architecto excepturi modi perspiciatis facilis a. Eos fugit beatae minus laboriosam doloremque veritatis, ut autem facilis ex consequatur numquam vel quaerat. Esse eum aut corporis praesentium, dolor facere quibusdam nostrum obcaecati. Sit culpa magnam laborum obcaecati hic ab saepe rem, explicabo placeat ea!",
        ru: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa veritatis hic предусмотрительный волюптирует possimus explicabo, accusantium ex? Фугит, cumque ipsum! Dolor atque dolore, numquam explicabo Invente Quasi omnis, dignissimos sed ipsa, Ab Laboriosam Doloremque? Deleniti facere sed animi fugit itaque nesciunt esse, Invente est quo! Culpa Impedit, Expedita Corpori Praesentium velit doloribus autem, Non nesciunt Corporis Doloremque Architecto, исключая моди perspiciatis facilis a. Eos fugit beatae минус трудолюбие, действительно, но autem facilis ex consequatur numquam vel quaerat. Esse eum aut corporis praesentium, dolor facere quibusdam nostrum obcaecati. Сядьте culpa magnam Laborum obcaecati hic ab saepe rem, объясните место!",
        uz: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa veritatis hic provident voluptates possimus explicabo, ex accusantium? Ko'p o'tmay! Dolor atque dolore, numquam explicabo inventore quasi omnis, dignissimos sed ipsa, ab laboriosam doloremque? Deleniti facere sed animi fugit itaque nesciunt esse, inventore est quo! Culpa impedit, expedita corrupti praesentium velit doloribus autem, arxitect to nesciunt bon corporis doloremque architect to exturi modi perspiciatis facilis a. Eos fugit beatae minus laboriosam doloremque datatis, ut aute facilis ex consequatur numquam vel quaerat. Esse eum aut corporis praesentium, dolor facere quibusdam nostrum obcaecati. Sit culpa magnam laborum obcaecati hic ab saepe rem, explicabo placeat ea!",
      },
    },
  },
  footer: {
    Feel: {
      en: "Feel free to contact me",
      ru: "Не стесняйтесь обращаться ко мне",
      uz: "Men bilan bog'lanishingiz mumkin",
    },
  },
};

function App() {
  const language = useRecoilValue(languageAtom);
  const [languages, setLanguages] = useRecoilState(languageAtom);

  const changeLanguage = (lang) => {
    setLanguages(lang);
  };
  return (
    <>
      <header className="px-5 lg:px-20 bg-[#00192a]">
        <nav className="my-4">
          <div className="navbar  text-white">
            <div className="navbar-start">
              <a
                href="#"
                className="btn btn-ghost  text-xl sm:text-1xl md:text-2xl font-bold"
              >
                {translations.header.logo[language]}
              </a>
            </div>
            <div className="navbar-center hidden md:flex">
              <ul className="flex gap-10 px-1">
                <li className="text-xl font-semibold">
                  <a
                    href="#projects"
                    className="bg-[#00192a] hover:pb-0 pb-[3px]"
                  >
                    {translations.header.nav.pojects[language]}
                  </a>
                  <div className="bg-gradient-to-r from-fuchsia-800 from-10% via-sky-300 via-100% h-[1.6px]"></div>
                </li>
                <li className="text-xl font-semibold">
                  <a
                    href="#technologies"
                    className="bg-[#00192a] hover:pb-0 pb-[3px]"
                  >
                    {translations.header.nav.pojects[language]}
                  </a>
                  <div className="bg-gradient-to-r from-fuchsia-800 from-10% via-sky-300 via-100% h-[1.6px]"></div>
                </li>
                <li className="text-xl font-semibold">
                  <a href="#About" className="bg-[#00192a] hover:pb-0 pb-[3px]">
                    {translations.header.nav.About[language]}
                  </a>
                  <div className="bg-gradient-to-r from-fuchsia-800 from-10% via-sky-300 via-100% h-[1.6px]"></div>
                </li>
              </ul>
            </div>
            <div className="navbar-end gap-2 md:gap-5">
              {/* <Link to="https://github.com/hamidillojaloldinov/"> */}
              <a target="_blank" href="https://github.com/hamidillojaloldinov/">
                <FaGithub className="text-[20px] sm:text-3xl md:text-3xl" />
              </a>
              {/* </Link> */}
              {/* <Link to="https://www.linkedin.com/in/hamidillo-jaloldinov/"> */}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/hamidillo-jaloldinov/"
              >
                <IoLogoLinkedin className="text-[20px] sm:text-3xl md:text-4xl" />
              </a>
              {/* </Link> */}
              {/* <Link to="https://www.instagram.com/"> */}
              <a target="_blank" href="https://www.instagram.com/">
                <FaInstagram className="text-[17px] sm:text-2xl md:text-3xl" />
              </a>
              {/* </Link> */}
            </div>
          </div>
          <div className="navbar-center md:hidden flex text-white justify-center">
            <ul className="navbar">
              <li className="navbar-start md:text-[10px] sm:text-[18px]">
                <a href="#projects">projects</a>
              </li>
              <li className="navbar-center md:text-[10px] sm:text-[18px]">
                <a href="#technologies">technologies</a>
              </li>
              <li className="navbar-end md:text-[10px] sm:text-[18px]">
                <a href="#About">About me</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-2 items-center sm:pt-32 pt-10 sm:ml-20 ml-5">
          <div className="">
            <h1 className="sm:text-6xl md:text-4xl lg:text-[55px] text-3xl leading-8 text-white font-medium">
              <span className="text-gradiend pb-4 block">
                {translations.header.headerDiv.hello[language]}
              </span>
              {translations.header.headerDiv.devoloper[language]}
            </h1>
            <p className="text-slate-400 sm:text-xl text-sm py-10">
              {translations.header.headerDiv.FrontEnd[language]}
            </p>
          </div>
          <div className="mask mask-circle sm:w-96 ml-20 w-60">
            <img src={photos} alt="" />
          </div>
        </div>
      </header>
      <main className="px-5 md:px-40 bg-[#00192a]">
        <section id="projects">
          <h3 className="text-white text-4xl font-medium pb-20 pt-40">
            {translations.main.pojects.projects[language]}
          </h3>
          <div className="grid  grid-cols-3 w-full mx-auto gap-20">
            <div className=" bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 card sm:w-[392px] w-[265px]">
              <div className="card flex h-full m-1 sm:w-96 w-64 items-center justify-center bg-[#00192a] text-white  shadow-xl">
                <figure className="px-5 pt-5">
                  <img
                    src={portifolio_img}
                    alt="Shoes"
                    className=" p-4 bg-[#13476a]"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">
                    {translations.main.pojects.portifolio.Landing[language]}
                  </h2>
                  <p className="text-sm text-slate-400">
                    {translations.main.pojects.portifolio.Responsive[language]}
                  </p>
                  <div className="grid grid-cols-2 gap-2 w-full pt-10">
                    <a
                      target="_blank"
                      href="https://github.com/hamidillojaloldinov/Portifolio"
                      className="btn gradiend rounded-full border-0 text-white"
                    >
                      {translations.main.pojects.portifolio.live[language]}
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/hamidillojaloldinov/Portifolio"
                      className="btn bg-[#00192a] rounded-full text-white hover:text-black"
                    >
                      {translations.main.pojects.portifolio.check[language]}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="technologies">
          <h3 className="text-white text-3xl font-medium pb-20 pt-40">
            {translations.main.technologies.technologies[language]}
          </h3>
          <div className="grid grid-cols-3 gap-5">
            <div className="text-white flex gap-2 items-center text-2xl">
              <div className="gradiend w-4 h-4 rounded-full" />
              React js
            </div>
            <div className="text-white flex gap-2 items-center text-2xl">
              <div className="gradiend w-4 h-4 rounded-full" />
              Next js
            </div>
            <div className="text-white flex gap-2 items-center text-2xl">
              <div className="gradiend w-4 h-4 rounded-full" />
              HTML
            </div>
            <div className="text-white flex gap-2 items-center text-2xl">
              <div className="gradiend w-4 h-4 rounded-full" />
              JavaScript
            </div>
            <div className="text-white flex gap-2 items-center text-2xl">
              <div className="gradiend w-4 h-4 rounded-full" />
              TypeScript
            </div>
            <div className="text-white flex gap-2 items-center text-2xl">
              <div className="gradiend w-4 h-4 rounded-full" />
              Css
            </div>
            <div className="text-white flex gap-2 items-center text-2xl">
              <div className="gradiend w-4 h-4 rounded-full" />
              Sass
            </div>
          </div>
        </section>
        <section id="About">
          <h3 className="text-white text-3xl font-medium mb-20 pt-40">
            {translations.main.About.About[language]}
          </h3>
          <div className="text-white">
            {translations.main.About.lorem[language]}
          </div>
        </section>
      </main>
      <footer className="md:flex block m-10 mx-5 md:mx-52 bg-[#00192a] justify-between text-white text-sm md:text-md">
        <div className="flex justify-between">
          <div className="text-gradiend">
            {translations.footer.Feel[language]}
          </div>
          <div className="gap-2 md:gap-5 flex  md:hidden">
            {/* <Link to="https://github.com/hamidillojaloldinov/"> */}
            <a target="_blank" href="https://github.com/hamidillojaloldinov/">
              <FaGithub className="text-[20px] sm:text-2xl md:text-2xl" />
            </a>
            {/* </Link> */}
            {/* <Link to="https://www.linkedin.com/in/hamidillo-jaloldinov/"> */}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/hamidillo-jaloldinov/"
            >
              <IoLogoLinkedin className="text-[20px] sm:text-2xl md:text-2xl" />
            </a>
            {/* </Link> */}
            {/* <Link to="https://www.instagram.com/"> */}
            <a target="_blank" href="https://www.instagram.com/">
              <FaInstagram className="text-[17px] sm:text-2xl md:text-2xl" />
            </a>
            {/* </Link> */}
          </div>
        </div>
        <div className="flex md:text-[15px] text-[12px] gap-2 md:gap-20 pt-2 justify-between">
          <div className="">hamidillojaloldinov@gmail.com</div>
          <div className="">
            Telegram
            <a href="https://t.me/Hamidillo_Jaloldinov">
              @Hamidillo_Jaloldinov
            </a>
          </div>
          <div className="gap-2 md:flex hidden md:gap-5 ">
            {/* <Link to="https://github.com/hamidillojaloldinov/"> */}
            <a target="_blank" href="https://github.com/hamidillojaloldinov/">
              <FaGithub className="text-[20px] sm:text-2xl md:text-2xl" />
            </a>
            {/* </Link> */}
            {/* <Link to="https://www.linkedin.com/in/hamidillo-jaloldinov/"> */}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/hamidillo-jaloldinov/"
            >
              <IoLogoLinkedin className="text-[20px] sm:text-2xl md:text-2xl" />
            </a>
            {/* </Link> */}
            {/* <Link to="https://www.instagram.com/"> */}
            <a target="_blank" href="https://www.instagram.com/">
              <FaInstagram className="text-[17px] sm:text-2xl md:text-2xl" />
            </a>
            {/* </Link> */}
          </div>
        </div>
      </footer>
      <select
        className="text-black fixed right-10 bottom-10"
        onChange={(e) => changeLanguage(e.target.value)}
        value={language}
      >
        <option value="en">en</option>
        <option value="ru">ru</option>
        <option value="uz">uz</option>
        <div></div>
      </select>
    </>
  );
}
export default App;
