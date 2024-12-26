import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cardsInfo } from '../utils/cardsMock';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
import fotoSapato from '../assets/images/fotoSapato.svg'; // Foto principal do sapato (SVG)
import starVazia from '../assets/images/starVazia.png';
import star from '../assets/images/star.png';
import Button from '../components/Button';

const ProductDetail = () => {
  let { itemId } = useParams();
  let cardItem = cardsInfo.filter(item => item.id == itemId);
  const [color, setColor] = useState('#CECDF5'); // Cor do background inicial
  const totalAvaliacoes = 90;

  // Função para mudar a cor do fundo
  const changeColor = (colorCode) => {
    setColor(colorCode);
  };

  return (
    <>
      <Header />
      <div className='bg-[#f5f5f5] w-full pt-4'>
        <div className='px-6 md:px-24'>
          <h2 className='mb-8'>Home / Produtos / {cardItem[0].category} / Nike / {cardItem[0].productName}</h2>
          <div className='flex flex-col md:flex-row gap-8'>
            {/* Imagem do produto */}
            <div className='w-full md:w-1/2 flex justify-center'>
              <div 
                className="flex justify-center items-center bg-gray-200" 
                style={{ backgroundColor: color }}
              >
                <img 
                  src={fotoSapato} 
                  alt="foto do produto" 
                  className="w-3/4 md:w-2/3 object-contain"
                />
              </div>
            </div>

            {/* Detalhes do produto */}
            <div className='flex flex-col gap-4 w-full md:w-1/2'>
              <h2 className='text-3xl text-[#474747] font-bold'>{cardItem[0].productName}</h2>
              <p className='text-gray-600 tracking-wider'>Casual | {cardItem[0].category} | REF:{cardItem[0].id}</p>

              <div className='flex gap-1'>
                <div className='flex'>
                  <img src={star} alt="estrela" width={10} />
                  <img src={star} alt="estrela" />
                  <img src={star} alt="estrela" />
                  <img src={star} alt="estrela" />
                  <img src={starVazia} alt="estrela" />
                </div>
                <div className='bg-yellow-500 flex text-blue-400 ml-5 rounded-lg'>
                  <p className='text-white font-bold'>4.7</p>
                  <img src={starVazia} alt="estrela" />
                </div>
                <p className='text-[#474747] tracking-wider'>({totalAvaliacoes} avaliações)</p>
              </div>

              <div className='flex items-center'>
                <div className='text-[#474747] text-3xl font-black'>R$ 219,00</div>
                <div className='text-slate-400 text-sm ml-2 font-black line-through'>R$ 219,00</div>
              </div>

              <p className='text-gray-400 tracking-wider font-bold'>Descrição do produto</p>
              <p className='text-[#474747]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              
              <p className='text-gray-600 tracking-wider'>Tamanho</p>
              <div className='flex justify-between gap-2'>
                <button className='border border-gray-300 p-3 rounded-md'>39</button>
                <button className='border border-gray-300 p-3 rounded-md'>40</button>
                <button className='border border-gray-300 p-3 rounded-md'>41</button>
                <button className='border border-gray-300 p-3 rounded-md'>42</button>
                <button className='border border-gray-300 p-3 rounded-md'>43</button>
              </div>

              <p className='text-gray-600 tracking-wider mt-4'>Cor</p>
              <div className='flex gap-2'>
                <button 
                  onClick={() => changeColor('#CECDF5')} 
                  className='w-8 h-8 bg-blue-200 rounded-full' 
                  style={{ backgroundColor: '#CECDF5' }}
                ></button>
                <button 
                  onClick={() => changeColor('#FFB6C1')} 
                  className='w-8 h-8 bg-orange-200 rounded-full' 
                  style={{ backgroundColor: '#FFB6C1' }}
                ></button>
                <button 
                  onClick={() => changeColor('#FF6347')} 
                  className='w-8 h-8 bg-red-200 rounded-full' 
                  style={{ backgroundColor: '#FF6347' }}
                ></button>
                <button 
                  onClick={() => changeColor('#FFD700')} 
                  className='w-8 h-8 bg-yellow-200 rounded-full' 
                  style={{ backgroundColor: '#FFD700' }}
                ></button>
              </div>

              <Button type='default' color='yellow'>COMPRAR</Button>
            </div>
          </div>

          {/* Produtos Relacionados */}
          <div className='mt-5'>
            <div className='flex justify-between'>
              <h3 className='text-[#474747] font-extrabold text-xl tracking-wide mb-4'>Produtos Relacionados</h3>
              <div><Link>ver todos</Link></div>
            </div>

            <div className='flex overflow-x-auto gap-4'>
              {cardsInfo.map((card, i) => {
                return (
                  i < 4 ? <Card
                    key={card.id}
                    discountPercentual={card.discountPercentual}
                    category={card.category}
                    productName={card.productName}
                    discountPrice={card.discountPrice}
                    price={card.price}
                    isDiscount={card.isDiscount}
                    url={card.url}
                  /> : ''
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
