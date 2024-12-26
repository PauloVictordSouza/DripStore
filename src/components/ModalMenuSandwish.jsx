import React from 'react';
import NavbarItem from './NavbarItem';
import Text from './Text';
import Button from './Button';
import iconMenu from '../assets/images/icon-menu.svg';

const ModalMenuSandwish = ({ closeMenu, children }) => {
  return (
    <div className="h-[702px] flex flex-col w-48 p-[30px] bg-white absolute top-0 left-0 z-50">
      
      <button
        onClick={closeMenu}
        className="absolute top-4 left-4 md:hidden" // Alterado para 'left-4' para posicionar à esquerda
      >
        <img src={iconMenu} alt="Fechar menu" className="w-6 h-6" /> {/* Ajuste de tamanho se necessário */}
      </button>

      <div className="flex flex-col justify-between h-screen">
        <nav>
          <ul className="gap-2 flex flex-col font-bold text-base">
            <li>
              <Text type="UPgray-description" className="text-[16px]" title="Páginas" />
            </li>
            <li>
              <NavbarItem path="/" title="Home" />
            </li>
            <li>
              <NavbarItem path="/produtos" title="Produtos" />
            </li>
            <li>
              <NavbarItem path="/categorias" title="Categorias" />
            </li>
            <li>
              <NavbarItem path="/pedidosroutes" title="Meus Pedidos" />
            </li>
          </ul>
        </nav>
        <div className="mt-auto">
          <hr className="border-t-2 border-gray-300 my-6" />
          <div className="gap-2 flex flex-col font-bold text-base">
            <Button color="pink" type="default" title="Entrar" />
            <Button type="link" title="Cadastre-se" className="text-[#474747]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMenuSandwish;
