import { basicInfo } from "../../data/basicInfo";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";

const { phone, email, linkedin, github, upwork } = basicInfo;

const links = [
  {
    link: `https://wa.me/${phone.replace("+", "")}`,
    icon: <BsWhatsapp />,
    text: phone,
  },
  {
    link: `mailto:${email}`,
    icon: <TfiEmail />,
    text: email,
  },
  {
    link: `https://linkedin.com/in/${linkedin}`,
    icon: <BsLinkedin />,
    text: linkedin,
  },
  {
    link: `https://github.com/${github}`,
    icon: <BsGithub />,
    text: github,
  },
  {
    link: `https://www.upwork.com/freelancers/~${upwork}`,
    icon: <SiUpwork />,
    text: "Upwork Profile",
  },
];

function ContactSection() {
  return (
    <section id="Contact-Me" className="py-5 text-gray-900">
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-24 container px-4 mx-auto">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300"
          >
            <span className="text-xl">{link.icon}</span>
            <span>{link.text}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ContactSection;
