import tShirtCollection from '../assets/images/tShirtCollection.png';
import CollectionCard from '../components/CollectionCard';
import tenisCollection from '../assets/images/tenisCollection.png';
import headPhoneCollection from '../assets/images/headPhoneCollection.png';
import Subtitles from './Subtitles';
import Category from '../components/Categorias';
import iconTshirt from '../assets/images/iconTshirt.svg';
import iconPants from '../assets/images/iconPants.svg';
import iconHeadphones from '../assets/images/iconHeadphones.svg';
import iconSneakers from '../assets/images/iconSneakers.svg';

export default function CollectionCards() {
  return (
    <div className="flex flex-col gap-5 p-5 sm:p-10 md:p-20 bg-[#F9F8FE]">
      <Subtitles type="secondary">Produtos em alta</Subtitles>
      <div className="flex flex-col md:flex-row gap-5 w-full">
        <CollectionCard img={tShirtCollection} title="Supreme drop" />
        <CollectionCard img={tenisCollection} title="Coleção Adidas" />
        <CollectionCard img={headPhoneCollection} title="Novo Beats Bass" />
      </div>

      <div className="flex flex-col w-full justify-center items-center mt-10">
        <Subtitles type="secondary" children="Coleção em Destaques" />
        <div className="w-full overflow-x-auto">
          <div className="flex justify-center gap-5 sm:gap-10 pt-6">
            <Category img={iconTshirt} title="Camiseta" />
            <Category img={iconPants} title="Calça" />
            <Category img={iconPants} title="Boné" />
            <Category img={iconHeadphones} title="Headphone" />
            <Category img={iconSneakers} title="Tênis" />
          </div>
        </div>
      </div>
    </div>
  );
}
