import React, { memo } from 'react';
import styled from 'styled-components';

export const CustomScrollbar = memo(() => {
  return (
    <Section>
      <Title>Custom Scrollbar</Title>
      <Contents>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quae
        soluta molestias blanditiis incidunt libero ex esse culpa explicabo
        delectus quasi recusandae pariatur, iure doloribus cum vero deleniti
        saepe obcaecati natus voluptatem error dolorem enim suscipit? Adipisci
        cumque eum quisquam eligendi ea sed aperiam exercitationem, fugit,
        consectetur optio itaque ratione illo maiores? Odit recusandae dolores
        nam, quaerat sed eos similique officiis maiores. Atque consequuntur
        voluptate nobis impedit cupiditate iste doloribus error autem mollitia,
        nihil quia, officia velit cumque quisquam saepe! Eligendi sed officia
        quidem, rem possimus quos iste quisquam porro error placeat laudantium
        temporibus reprehenderit dolor recusandae facilis velit tempora
        exercitationem, maxime, qui minus officiis. Sequi illo expedita
        obcaecati amet. Tenetur totam cumque ab deleniti. Autem, deserunt iusto
        eius placeat cupiditate inventore. Eius adipisci beatae soluta ut cum
        maxime illo distinctio placeat repellat fuga! Praesentium facilis aut
        illum eius dolore iste ratione sint dolor tenetur blanditiis
        necessitatibus doloremque reprehenderit, quidem totam cumque obcaecati
        voluptatum natus debitis ullam nihil dignissimos! Nemo quibusdam velit
        natus sed veritatis earum maxime amet commodi officiis quod! Alias
        architecto, perspiciatis placeat obcaecati eos quibusdam iusto illo
        consectetur quod delectus aliquid soluta laboriosam ut, iste dolores
        praesentium recusandae odio? Tenetur mollitia ipsum velit qui explicabo
        magni hic, quaerat nisi. Necessitatibus corporis itaque distinctio ab
        tempora perferendis sequi saepe quasi deleniti. Provident, inventore
        nam! Adipisci error labore quasi iure obcaecati quo voluptates neque
        vero dolore necessitatibus. Repudiandae suscipit voluptatibus debitis
        quasi. Quasi sunt magni esse dolor placeat recusandae totam sit hic ea?
        Est, ab error necessitatibus earum obcaecati nam, nostrum quasi et dicta
        maxime ut voluptatem iusto? Magnam alias natus et quae repudiandae
        ratione nisi consequatur fuga ad, praesentium est sint saepe maiores
        rerum! Labore dolor repellat quae hic asperiores ipsa natus tempore
        consequatur voluptatibus, iusto reiciendis nostrum odit, voluptates
        autem? Qui, consequatur natus perferendis amet obcaecati incidunt aut
        aperiam autem alias facere sequi deserunt expedita dolorem blanditiis
        nam ex esse quasi voluptate consectetur. Dolores, praesentium porro vero
        pariatur commodi quas placeat provident, est atque eius temporibus
        repudiandae consequatur debitis at? Saepe magnam sapiente facere illum,
        velit vitae! Dolorum ex ducimus neque dolor optio explicabo dolores
        officia maxime odio, asperiores quae voluptatum, fugiat eos vitae? Nam
        a, consequatur reiciendis, sapiente, accusantium illum animi nostrum
        voluptate dolor explicabo et fugit laborum commodi! Illum deleniti
        vitae, repellat dicta et, maxime magnam dolor quam quae quidem officiis
        saepe, nobis tempore recusandae cum nesciunt laboriosam commodi fugiat
        animi consequatur? Numquam cupiditate deserunt minus doloremque. Quis,
        odio quam? Ullam tempora maiores soluta adipisci vero autem perspiciatis
        dolore rem dolorum. Consequatur repudiandae laborum harum ex, recusandae
        corrupti provident tempore corporis repellat ut, rem culpa ipsum eius
        reiciendis dolore, cupiditate voluptatibus nam velit distinctio! Quod
        labore ducimus neque voluptate omnis ad iusto quas porro provident quos.
        Illo officia maiores laudantium quis suscipit eos non, illum, nobis
        consequatur alias a possimus odio assumenda? Tempore consequatur minus
        incidunt eligendi natus vero eum consectetur, magni repellendus nihil,
        necessitatibus numquam facere in ipsam! Tempora quos sunt asperiores
        repellat rem repudiandae velit aut, alias quasi natus, aperiam magni
        facilis exercitationem!
      </Contents>
    </Section>
  );
});

const Section = styled.section`
  width: 100%;
  height: 100vh;
  padding: 100px;
  overflow: scroll;
  box-sizing: border-box;

  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background: cyan;
    border-radius: 6px;
    &:hover {
      background: red;
    }
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
