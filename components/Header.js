import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import {useContext, useState} from "react";
import {CartContext} from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";

const StyledHeader = styled.header`
  background-color: #222;
`;
// const Logo = styled(Link)`
//   color:#fff;
//   text-decoration:none;
//   position: relative;
//   z-index: 3;
// `;
const Logo = styled(Link)`
  display: block; /* Ensure the link covers the entire image */
  position: relative;
  z-index: 3;
  width: 200px; /* Adjust the width as needed */
  height: 50px; /* Adjust the height as needed */
  background-image: url('https://automative-parts-website.s3.ap-southeast-2.amazonaws.com/1709314712462.jpg');
  background-size: cover;
  background-position: center;
  text-indent: -9999px; /* Hide the text */
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `
    display: block;
  ` : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color:#aaa;
  text-decoration:none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding:0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border:0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const {cartProducts} = useContext(CartContext);
  const [mobileNavActive,setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}>AutoParts</Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={'/'}>หน้าหลัก</NavLink>
            <NavLink href={'/products'}>สินค้าทั้งหมด</NavLink>
            <NavLink href={'/categories'}>ประเภทสินค้า</NavLink>
            <NavLink href={'/account'}>บัญชีผู้ใช้</NavLink>
            <NavLink href={'/cart'}>ตะกร้า ({cartProducts.length})</NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}