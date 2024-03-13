const Header = () => {
  return (
    <header className="px-4 md:px-10 lg:px-20">
      <nav className="py-4 flex flex-col md:flex-row justify-between items-center border-b border-[#11111126]">
        <h1 className="bg-[#111} text-4xl font-bold">Knowledge Cafe</h1>
        <img
          className="size-16"
          src="https://i.ibb.co/Y0GXDXB/profile.png"
          alt="User_Profile"
        />
      </nav>
    </header>
  );
};

export default Header;
