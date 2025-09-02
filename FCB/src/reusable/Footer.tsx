import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-r from-blue-500 to-red-700 text-white py-3">
      <p className="w-full text-center text-sm opacity-80 pr-14 md:pr-16">
        © Barcelona In and Out
      </p>

      <a href="https://github.com/kaloyanYonov" target="_blank" rel="noreferrer"
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-90"
      >
        <FontAwesomeIcon icon={faGithub} className="text-2xl" />
      </a>
    </footer>
  );
}
