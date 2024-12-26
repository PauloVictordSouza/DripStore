import { useState } from 'react';
import NavbarItem from './NavbarItem';
import MenuRequests from './MenuRequests'; 
import logoHeader from '../assets/images/logo-header.svg';
import carrinhoCompras from '../assets/images/carrinho.svg';
import iconMenu from '../assets/images/icon-menu.svg';
import iconBusca from '../assets/images/icon-busca.svg';
import PopUp from './PopUp';
import ModalMenuSandwish from './ModalMenuSandwish'; 

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [aberto, setAberto] = useState(false);

  const handleClick = () => setOpen((prev) => !prev);
  const abrirMenu = () => setAberto(!aberto);
  const fecharMenu = () => setAberto(false);

  return (
    <>
      <header className="flex flex-col px-4 md:px-24 py-6 md:py-10 justify-between">
        <section className="flex py-5 items-center justify-between">
          <button className="mr-10 md:hidden" onClick={abrirMenu}>
            <img src={iconMenu} alt="icone de menu" />
          </button>
          <a href="#" className="w-36 md:w-auto">
            <img src={logoHeader} alt="logo digital college" />
          </a>
          <div className="md:w-1/3 mx-6 hidden md:block md:h-12 relative">
            <input
              className="bg-slate-100 pl-2 rounded-md md:w-full md:h-full outline-none"
              type="text"
              placeholder="Pesquisar produto"
            />
            <button type="button" className="absolute right-0 top-0 flex justify-center items-center h-12 md:px-4">
              <img src={iconBusca} alt="icone de busca" />
            </button>
          </div>
          <div className="hidden md:flex items-center">
            <a href="/criar-conta" className="mx-5 underline text-base text-[#474747] whitespace-nowrap">
              Cadastre-se
            </a>
            <button className="bg-pink-600 text-white py-1 px-8 rounded-lg">
              <a href="/">Entrar</a>
            </button>
          </div>
          <button type="button" className="mx-3 md:hidden">
            <img src={iconBusca} alt="icone de busca" />
          </button>
          <button type="button" onClick={handleClick}>
            <img src={carrinhoCompras} alt="carrinho de compras" />
          </button>
        </section>
        <nav className="md:flex hidden md:gap-4 md:font-bold md:text-base">
          <NavbarItem path="/" title="Home" />
          <NavbarItem path="/produtos" title="Produtos" />
          <NavbarItem path="/categorias" title="Categorias" />
          <NavbarItem path="/pedidosroutes" title="Meus Pedidos" />
        </nav>
      </header>
      
      {/* ModalMenu com MenuRequests no mobile */}
      {aberto && (
        <ModalMenuSandwish closeMenu={fecharMenu}>
          <MenuRequests />
        </ModalMenuSandwish>
      )}
      {isOpen && <PopUp />}
    </>
  );
}
