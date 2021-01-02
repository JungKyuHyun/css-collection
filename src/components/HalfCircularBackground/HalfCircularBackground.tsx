import React, { memo } from 'react';
import styled from 'styled-components';

export const HalfCircularBackground = memo(() => {
  return (
    <Section>
      <ContentContainer>
        <Title>Jacob's Playground</Title>
        <Contents>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam omnis
          minima ipsum deleniti illo officiis optio culpa. Dicta ducimus qui
          pariatur commodi minima, voluptatem maiores voluptatum repellendus non
          odio nihil vel est ut, dolores tempora. Laudantium architecto in dolor
          nemo, beatae doloremque aliquid, voluptates blanditiis repellendus
          harum, accusantium facilis! Maiores a voluptate eligendi at dolor est
          laborum animi explicabo minus cum? Voluptates labore ipsum facilis
          saepe nisi maiores molestiae dolores ea! Rerum, accusantium eius
          voluptates ducimus similique corrupti hic debitis est sapiente,
          necessitatibus nihil, corporis error velit excepturi fugit illum
          praesentium ipsa sint adipisci iure et? Ex velit dolores quo quod,
          reprehenderit, recusandae ipsa harum delectus iusto quidem ipsum
          tempore? Quaerat blanditiis beatae possimus earum quia odio facere,
          illo provident illum est cupiditate! Ducimus deserunt porro facere
          quod quis, excepturi voluptatem nihil error quos accusantium, vero
          earum ad sit consectetur ipsam fugiat nam, saepe necessitatibus
          voluptatum beatae nesciunt dignissimos corrupti odio? Adipisci veniam
          eius, sint minima dignissimos magni ut suscipit illum debitis! Ratione
          ipsa, laborum, nihil sint laudantium optio fuga exercitationem alias
          repellat quod ipsum aperiam ut voluptates at, quia dolore? Fugit ea
          earum atque quasi laboriosam hic fugiat voluptate soluta nostrum ex
          rerum, necessitatibus in corporis. Accusamus, quaerat quo. Aliquam,
          sint veritatis voluptatum facilis iusto id maxime, quaerat repellendus
          nulla nobis eligendi aperiam sapiente quisquam culpa! Quis non,
          eligendi corporis sint eaque, vero harum eveniet nihil sed doloribus
          rerum totam fuga quae nisi nemo deserunt! Odio itaque vitae adipisci
          commodi illum! Incidunt debitis placeat eligendi facere iste voluptate
          commodi? Repudiandae, soluta odit placeat architecto, nemo iste eum
          assumenda porro eos dolores optio esse maiores at cumque saepe veniam
          mollitia aliquid atque blanditiis, voluptate quo eius accusantium ex?
          Asperiores quibusdam blanditiis eligendi rerum sed explicabo deleniti
          tenetur beatae rem officia accusamus quidem, modi, repudiandae
          expedita quasi eos doloribus, incidunt velit doloremque magni tempora!
          Cumque eum ab aliquid optio ea nisi, iure soluta. Impedit, nobis harum
          architecto obcaecati repellat eaque aperiam placeat, illum aliquam
          officia inventore! Aut, distinctio laborum magnam quam error rem
          debitis mollitia, adipisci quos quia ut tenetur nulla nemo quasi
          molestiae? Veritatis natus dolores voluptates facilis omnis cumque
          voluptatem blanditiis qui. Vero voluptas ad, quibusdam provident
          commodi facilis autem placeat. Exercitationem ad repudiandae totam
          incidunt ea, odit at officia minima necessitatibus reiciendis magni
          nemo quidem omnis nostrum eveniet fugit temporibus inventore hic rerum
          tenetur mollitia! Assumenda nostrum nulla velit dignissimos iure
          aspernatur? Perferendis veniam minus totam iste deserunt?
        </Contents>
      </ContentContainer>
    </Section>
  );
});

const Section = styled.section`
  padding: 54px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100vh;
    height: 100vh;
    background-color: cyan;
    border-radius: 50%;
    transform-origin: bottom;
    transform: translateX(-50%) scale(3);
  }
`;

const Title = styled.h2`
  font-size: 3em;
`;

const ContentContainer = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
  max-width: 800px;
`;

const Contents = styled.p``;
