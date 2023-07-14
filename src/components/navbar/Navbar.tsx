import { useState } from "react";
import { navLinks } from "../../constants";
import { Link } from "react-router-dom";
import { Container, NavLinkWrapper, MenuIconWrapper, Logo } from "./styles";
import { AiOutlineMenu, AiOutlineClose  } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Container>
        <Logo>
          <Link to="/"><h1>Logo</h1></Link>
        </Logo>
        <MenuIconWrapper>
          {isOpen ? (
            <AiOutlineClose onClick={toggleMenu} size={30} />
          ) : (
            <AiOutlineMenu onClick={toggleMenu} size={30} />
          )}
        </MenuIconWrapper>
        <NavLinkWrapper>
          {navLinks.map((link) => (
            <ul key={link.id}>
              <li>
                <Link to={link.url}>{link.title}</Link>
              </li>
            </ul>
          ))}
        </NavLinkWrapper>
      </Container>
    </>
  );
};

export default Navbar;
