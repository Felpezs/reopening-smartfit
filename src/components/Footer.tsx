import Logo from "./Logo";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="text-white flex h-44 w-full flex-col items-center gap-4 bg-dark-grey bg-opacity-90 p-10">
      <span className="w-32">
        <Logo />
      </span>

      <span>Todos os direitos reservados - {date.getFullYear()}</span>
    </footer>
  );
};

export default Footer;
