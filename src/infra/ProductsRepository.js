import acucarRefinado from '../images/acucar_refinado.jpg';
import acucar from '../images/acucar.jpg';
import aguaCoco from '../images/agua_de_coco.jpg';
import aguaMineral from '../images/agua_mineral.jpg';
import amaciante from '../images/amaciante.jpg';
import aparelhoBarbear from '../images/aparelho_barbear.jpg';
import arroz from '../images/arroz_branco.jpg';
import azeite from '../images/azeite.jpg';
import azeiteOliva from '../images/azeite_oliva.jpg';
import bacalhau from '../images/bacalhau.jpg';
import bife from '../images/bife.jpg';
import biscoito from '../images/bolacha.jpg';
import budweiser from '../images/budweiser.jpg';
import cafe from '../images/cafe.jpg';
import chivasRegal from '../images/chivas_regal.jpg';
import cocaCola15L from '../images/coca_cola.jpg';
import cocaCola3L from '../images/coca_cola_3l.jpg';
import cremeLeite from '../images/creme_de_leite.jpg';
import desengordurante from '../images/desengordurante.jpg';
import feijao from '../images/feijao.jpg';
import frango from '../images/frango.jpg';
import glade from '../images/glade.jpg';
import guarana from '../images/guarana.jpg';
import packHeineken from '../images/heineken.jpg';
import heinekenLong from '../images/heineken_un.jpg';
import hellmanns from '../images/hellmans.jpg';
import itubaina from '../images/itubaina.jpg';
import jackDaniels from '../images/jack_daniels.jpg';
import leiteMoca from '../images/leite_moca.jpg';
import leiteNinho from '../images/leite_ninho.jpg';
import milhoVerde from '../images/milho_verde.jpg';
import molhoTomate from '../images/molho_de_tomate.jpg';
import paoFatiado from '../images/pao_fatiado.jpg';
import papelHigienico from '../images/papel_higienico.jpg';
import requeijao from '../images/requeijao.jpg';
import salton from '../images/salton.jpg';
import skol from '../images/skol.jpg';
import sucoUva from '../images/suco_uva.jpg';
import torrada from '../images/torrada.jpg';
import smirnoff from '../images/vodka.jpg';

const products = [
  {
    id: 0,
    idCategory: 1,
    name: 'Açúcar União',
    description: 'Açúcar união 1kg',
    price: 2.55,
    image: acucar
  },
  {
    id: 1,
    idCategory: 1,
    name: 'Açúcar União',
    description: 'Açúcar união refinado 1kg',
    price: 1.59,
    image: acucarRefinado
  },
  {
    id: 2,
    idCategory: 0,
    name: 'Água de côco',
    description: 'Água de côco viver 1L',
    price: 6.79,
    image: aguaCoco
  },
  {
    id: 3,
    idCategory: 0,
    name: 'Água mineral',
    description: 'Água mineral em gás 1.5L 8 unidades',
    price: 14.99,
    image: aguaMineral
  },
  {
    id: 4,
    idCategory: 2,
    name: 'Amaciante',
    description: 'Amaciante concentrado Confort 1L',
    price: 14.9,
    image: amaciante
  },
  {
    id: 5,
    idCategory: 3,
    name: 'Aparelho de barbear',
    description: 'Aparelho de barbear Bic sensitive 2 unidades',
    price: 4.99,
    image: aparelhoBarbear
  },
  {
    id: 6,
    idCategory: 1,
    name: 'Arroz branco',
    description: 'Arroz branco Camil 5kg',
    price: 3.49,
    image: arroz
  },
  {
    id: 7,
    idCategory: 1,
    name: 'Azeite',
    description: 'Óleo de girassol Liza 900ml',
    price: 5.99,
    image: azeite
  },
  {
    id: 8,
    idCategory: 1,
    name: 'Azeite de oliva',
    description: 'Azeite português extra-virgem Gallo 500ml',
    price: 16.7,
    image: azeiteOliva
  },
  {
    id: 9,
    idCategory: 1,
    name: 'Lombo de Bacalhau',
    description: 'Lombo de Bacalhau congelado Riberalves 1kg',
    price: 82.9,
    image: bacalhau
  },
  {
    id: 10,
    idCategory: 1,
    name: 'Bife',
    description: 'Bife premium Ancho Wessel congelado 500gr',
    price: 27.99,
    image: bife
  },
  {
    id: 11,
    idCategory: 1,
    name: 'Biscoito',
    description: 'Biscoito de Maizena Marilan 400gr',
    price: 3.49,
    image: biscoito
  },
  {
    id: 12,
    idCategory: 0,
    name: 'Budweiser',
    description: 'Cerveja Budweiser Pilsen Lager 269ml 8 unidades',
    price: 15.92,
    image: budweiser
  },
  {
    id: 13,
    idCategory: 1,
    name: 'Café',
    description: 'Café em pó Mellita 500gr',
    price: 10.99,
    image: cafe
  },
  {
    id: 14,
    idCategory: 0,
    name: 'Chivas Regal',
    description: 'Whisky Chivas Regal Escocês 12 anos 1L',
    price: 119.9,
    image: chivasRegal
  },
  {
    id: 15,
    idCategory: 0,
    name: 'Coca-cola 1.5L',
    description: 'Coca-cola 1.5L',
    price: 5.99,
    image: cocaCola15L
  },
  {
    id: 16,
    idCategory: 0,
    name: 'Coca-cola 3L',
    description: 'Coca-cola 3L',
    price: 8.99,
    image: cocaCola3L
  },
  {
    id: 17,
    idCategory: 1,
    name: 'Creme de leite',
    description: 'Creme de leite Nestlé 300ml',
    price: 4.67,
    image: cremeLeite
  },
  {
    id: 18,
    idCategory: 2,
    name: 'Desengordurante',
    description: 'Desengordurante Cif 500ml',
    price: 8.09,
    image: desengordurante
  },
  {
    id: 19,
    idCategory: 1,
    name: 'Feijão',
    description: 'Feijão carioca tipo 1 Broto Legal 1kg',
    price: 8.55,
    image: feijao
  },
  {
    id: 20,
    idCategory: 1,
    name: 'Filé de frango',
    description: 'Filé de peito de frango congelado sem osso Perdigão 1kg',
    price: 8.99,
    image: frango
  },
  {
    id: 21,
    idCategory: 2,
    name: 'Glade',
    description: 'Refil para odorizador de ambiente Glade 269ml',
    price: 19.19,
    image: glade
  },
  {
    id: 22,
    idCategory: 0,
    name: 'Guaraná',
    description: 'Refrigerante guaraná Antartica 1.5L',
    price: 4.99,
    image: guarana
  },
  {
    id: 23,
    idCategory: 0,
    name: 'Pack Heineken',
    description: 'Cerveja Heineken 350ml 12 unidades',
    price: 35.88,
    image: packHeineken
  },
  {
    id: 24,
    idCategory: 0,
    name: 'Heineken long-neck',
    description: 'Cerveja Heineken 330ml long-neck',
    price: 3.79,
    image: heinekenLong
  },
  {
    id: 25,
    idCategory: 1,
    name: 'Hellmanns',
    description: 'Maionese Hellmanns 500gr',
    price: 6.95,
    image: hellmanns
  },
  {
    id: 26,
    idCategory: 0,
    name: 'Itubaína',
    description: 'Refrigerante Itubaína tutti-frutti 2L',
    price: 4.19,
    image: itubaina
  },
  {
    id: 27,
    idCategory: 0,
    name: 'Jack Daniels',
    description: "Whisky Jack Daniel's Premium 1L",
    price: 109.0,
    image: jackDaniels
  },
  {
    id: 28,
    idCategory: 1,
    name: 'Leite Moça',
    description: 'Leite condensado Moça 395g',
    price: 5.49,
    image: leiteMoca
  },
  {
    id: 29,
    idCategory: 1,
    name: 'Leite Ninho',
    description: 'Leite UHT Ninho 1L',
    price: 4.49,
    image: leiteNinho
  },
  {
    id: 30,
    idCategory: 1,
    name: 'Milho Verde',
    description: 'Milho Verde Lata Conserva Quero 200gr',
    price: 1.49,
    image: milhoVerde
  },
  {
    id: 31,
    idCategory: 1,
    name: 'Molho de tomate',
    description: 'Molho de tomate Heinz 340gr',
    price: 2.09,
    image: molhoTomate
  },
  {
    id: 32,
    idCategory: 1,
    name: 'Pão fatiado',
    description: 'Pão de forma Pullmann 500gr',
    price: 3.69,
    image: paoFatiado
  },
  {
    id: 33,
    idCategory: 3,
    name: 'Papel Higiênico',
    description: 'Papel higiênico folha dupla 30mt',
    price: 16.99,
    image: papelHigienico
  },
  {
    id: 34,
    idCategory: 1,
    name: 'Requeijão',
    description: 'Requeijão cremoso Vigor 200gr',
    price: 4.99,
    image: requeijao
  },
  {
    id: 35,
    idCategory: 0,
    name: 'Salton',
    description: 'Espumante Salton 750ml',
    price: 32.19,
    image: salton
  },
  {
    id: 36,
    idCategory: 0,
    name: 'Skol lata',
    description: 'Cerveja Skol lata 473ml',
    price: 2.29,
    image: skol
  },
  {
    id: 37,
    idCategory: 0,
    name: 'Suco de uva',
    description: 'Suco de uva integral Do Bem 1L',
    price: 9.99,
    image: sucoUva
  },
  {
    id: 38,
    idCategory: 1,
    name: 'Torradas',
    description: 'Torrada salgada Bauduco 160gr',
    price: 3.89,
    image: torrada
  },
  {
    id: 39,
    idCategory: 0,
    name: 'Smirnoff',
    description: 'Vodka Smirnoff Red 998ml',
    price: 32.89,
    image: smirnoff
  }
];

const categories = [
  {
    id: 0,
    name: 'Bebidas'
  },
  {
    id: 1,
    name: 'Alimentos'
  },
  {
    id: 2,
    name: 'Limpeza'
  },
  {
    id: 3,
    name: 'Higiene'
  }
];

const getProducts = () =>
  products;

const getCategories = () =>
  categories;

const ProductsRepository = {
  getProducts,
  getCategories
};

export default ProductsRepository;
