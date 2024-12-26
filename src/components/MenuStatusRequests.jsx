import Text from '../components/Text';
import { cardPedido } from '../utils/PedidosMock';
import Pedido from './Pedido';

export default function MenuStatusRequests() {
  return (
    <div className="flex flex-col w-full max-w-[890px] p-5 bg-white">
      <div className="flex justify-between">
        <Text type="UPgray-description">Meus Pedidos</Text>
        <Text type="UPgray-description">STATUS</Text>
      </div>
      <div className="border-b my-5 border-gray-500"></div>
      <div className="flex flex-col gap-4">
        {cardPedido.map((pedido) => (
          <Pedido
            key={pedido.id}
            numero={pedido.numero}
            produto={pedido.produto}
            status={pedido.status}
            url={pedido.url}
          />
        ))}
      </div>
    </div>
  );
}
