import React, { memo, useRef, useCallback, useEffect } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';

export const ScrollProgressBar = memo(() => {
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (ref === null || ref.current === null) {
      return;
    }
    if (typeof window === 'undefined') {
      return;
    }
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progressHeight = (window.pageYOffset / totalHeight) * 100;
    ref.current.style.height = progressHeight + '%';
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <GlobalStyle />
      <Progressbar ref={ref} />
      <ScrollPath />
      <Section>
        <Title>Scroll을 내려 보세요</Title>
        <Contents>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          aliquam deserunt? Distinctio quisquam ducimus libero assumenda harum
          quae deserunt fugit quaerat earum facilis, hic vitae sit! Debitis
          deserunt mollitia atque corrupti at. Quis beatae quaerat illum,
          maiores architecto eveniet. Aliquid quae fugiat vel iste, cumque omnis
          tempora repudiandae unde, cum architecto eaque possimus minima
          laboriosam illum laborum accusantium voluptatibus. Hic necessitatibus
          quas distinctio quos suscipit commodi, et in explicabo sapiente vitae
          saepe, culpa voluptatem praesentium? Quaerat voluptate dolores ipsa
          esse cupiditate? Magnam iste, itaque eligendi, quos, inventore
          temporibus atque voluptate reprehenderit doloremque nisi reiciendis
          illum laudantium pariatur recusandae laboriosam sint fuga. Similique
          perspiciatis, aperiam dicta a quidem commodi labore odit ullam
          blanditiis sapiente? Neque, voluptatem. Ipsum nobis labore deserunt,
          dolor tempora nemo, totam adipisci asperiores accusantium quisquam hic
          ipsam numquam est necessitatibus, veniam veritatis rerum. Facere nobis
          molestias rem. Nihil perspiciatis a odio, reiciendis, iusto
          reprehenderit aut cum quaerat distinctio dignissimos harum quidem hic
          sint dolores error expedita sequi, ad autem fugit nam? Dolore esse quo
          et accusantium enim tenetur iure quidem ipsa odio, deserunt non quas
          accusamus aliquid ab sapiente eum. Rem culpa, aliquam laboriosam quos
          voluptas laudantium aspernatur labore consequuntur, sed quis ad ea
          commodi fugit dicta repellendus voluptatem molestias officiis odit
          exercitationem repudiandae, mollitia amet accusamus quasi animi. Ex
          veniam, eos, cum porro itaque laudantium eaque similique neque sequi
          placeat ratione. Culpa voluptatem velit veniam officia nisi deserunt
          voluptatum maxime! Illo repellat necessitatibus ratione? Neque
          sapiente cupiditate veritatis sunt delectus debitis consequatur,
          tempore ullam soluta optio vitae? Nostrum libero voluptates quisquam
          numquam quaerat iusto perspiciatis dolorum! Qui odit omnis, minus
          possimus ab animi odio officiis eum quos sequi. Repellat mollitia
          impedit minima? Quas distinctio architecto placeat. Odit, recusandae
          saepe facere expedita veniam vitae est similique provident esse
          delectus placeat ut quis perspiciatis vero ea ipsum reiciendis rerum
          quasi voluptate! Minima officiis sapiente ad harum modi porro natus?
          Eius ducimus reiciendis, necessitatibus eveniet magni nobis, error
          dolores asperiores voluptatem exercitationem numquam, inventore quo
          saepe repudiandae qui sequi repellat eaque nisi labore. Eveniet
          necessitatibus similique excepturi nostrum aliquid qui fuga id nisi
          odit nihil atque magni nemo voluptate rerum aut, at dolorem
          perferendis illum enim! Nihil cum odit dicta autem corrupti debitis,
          blanditiis hic est id laborum, vero nesciunt eveniet eaque distinctio
          mollitia assumenda repudiandae aliquam inventore fugit accusamus ullam
          alias officia commodi. Tempore culpa assumenda fuga, laboriosam
          necessitatibus cumque adipisci omnis cum maxime nisi sequi dicta ullam
          aliquid, ea accusamus ut, odio porro explicabo quibusdam
          exercitationem obcaecati eligendi aperiam ipsa sunt. Cumque iste, vel
          accusantium sequi totam hic dolor? Vel impedit nostrum totam adipisci
          qui veniam, reiciendis fuga odio neque corporis delectus. Doloribus
          laudantium culpa facilis quod aut, non neque nulla harum voluptate est
          iure praesentium eos quam pariatur tempore accusantium corporis sed
          ipsum placeat repellendus eligendi debitis sequi consequatur. Iusto
          explicabo autem aperiam fugiat, doloremque repudiandae modi saepe,
          recusandae omnis, sunt sit culpa harum? Laudantium excepturi maiores
          eum aliquid. Quaerat, deserunt explicabo. Deserunt facere quaerat qui
          repellat nisi sunt et culpa expedita molestias vero totam adipisci,
          maiores laboriosam consectetur. Reiciendis eaque dolorum esse ipsum
          nobis soluta nostrum ratione tenetur consectetur earum, fugit
          doloribus dolorem ad ab, optio hic eos ea, provident libero molestias
          a. Minus ut ex molestias repudiandae error ipsam maiores incidunt
          neque iusto delectus vel mollitia debitis explicabo itaque ipsum sit
          excepturi velit harum alias aliquam, obcaecati quibusdam autem. Soluta
          error voluptas placeat laudantium quo rem, quisquam at excepturi
          deleniti ut, eaque cupiditate amet facere quae dolor laborum ducimus
          architecto non perspiciatis commodi sequi officia. Natus voluptatibus
          magnam, distinctio corrupti possimus eligendi voluptas quaerat eveniet
          velit optio adipisci ducimus temporibus, consequuntur et illo alias
          deserunt numquam ratione molestias ab? Laboriosam hic autem fuga
          veniam ut, blanditiis voluptatum a, earum iusto distinctio dolores
          tempore repudiandae pariatur sed debitis. Cum, ad omnis provident
          illum nemo magnam nesciunt natus mollitia magni totam similique odio
          sit quis alias rerum quibusdam ullam quaerat repellat porro, unde,
          eligendi voluptatem labore. Beatae, consequuntur dolorum. Non
          cupiditate, dolore veritatis, dolores molestias soluta illo aut
          necessitatibus quas voluptatibus eius velit mollitia atque. Omnis
          fugit ipsum itaque facilis beatae culpa nobis adipisci voluptatum
          illum nam repellat iure, possimus architecto asperiores harum ipsa
          reiciendis cum cumque ullam fugiat quaerat rem enim ducimus? Minima
          suscipit at natus cum inventore et minus voluptas ab, nemo corrupti
          aliquam quibusdam qui quod labore dignissimos fugit aspernatur, autem
          unde? Quia facilis minus sunt ducimus cupiditate. Voluptatem maiores
          eveniet consequuntur porro quia dolorem quis sit aliquid assumenda
          autem saepe vel fugit recusandae quae, perspiciatis, unde numquam
          delectus, earum ratione! Voluptatibus sapiente officia doloremque,
          amet iusto animi repellendus rerum ab sequi ea porro? Modi dicta
          perspiciatis ratione repellat voluptatum rem natus dignissimos
          aspernatur nobis vitae distinctio, eveniet, doloribus illum vel ad
          quod. Repudiandae fuga vitae mollitia asperiores deserunt, accusantium
          laborum temporibus nihil corrupti explicabo vel, error autem
          excepturi. Nesciunt tempora dolore voluptatem minus.
        </Contents>
      </Section>
    </>
  );
});

const GlobalStyle = createGlobalStyle`
  body {
    ::-webkit-scrollbar {
      width: 0;
    }
  }
`;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  padding: 100px;
  box-sizing: border-box;
`;

const ScrollPath = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 10px;
  height: 100%;
  background: rgba(255, 255, 255, 0.07);
`;

const animate = keyframes`
  0%, 100% {
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(360deg);
  }
`;

const Progressbar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 10px;
  background: linear-gradient(to top, #008aff, #00ffe7);
  animation: ${animate} 5s linear infinite;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    width: 10px;
    height: 100%;
    background: linear-gradient(to top, #008aff, #00ffe7);
    filter: blur(10px);
  }

  &::after {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    width: 10px;
    height: 100%;
    background: linear-gradient(to top, #008aff, #00ffe7);
    filter: blur(30px);
  }
`;

const Title = styled.h2`
  color: white;
  font-size: 4em;
  margin-bottom: 20px;
`;

const Contents = styled.p`
  color: lightgray;
  font-size: 1.2em;
`;
