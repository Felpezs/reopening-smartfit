import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex h-24 w-full items-center justify-center bg-dark-grey">
      <span className="w-44">
        <Logo />
      </span>
    </header>
  );
};

export default Header;
