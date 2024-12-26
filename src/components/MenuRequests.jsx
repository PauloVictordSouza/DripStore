import Text from "./Text";
import NavbarItem from "./NavbarItem";

export default function MenuRequests() {
  return (
    <div className="flex flex-col w-full max-w-[334px] p-5 bg-white">
      <NavbarItem path="/" title="Meu Perfil" />
      <div className="border-b my-5 border-gray-500"></div>
      <NavbarItem path="/pedidosroutes" title="Meus Pedidos" />
      <div className="border-b my-5 border-gray-500"></div>
      <NavbarItem path="/informations" title="Minhas Informações" />
      <div className="border-b my-5 border-gray-500"></div>
      <NavbarItem path="/" title="Métodos de Pagamento" />
    </div>
  );
}
