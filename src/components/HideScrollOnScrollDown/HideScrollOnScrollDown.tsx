import { throttle } from 'lodash';
import React, { memo, useEffect, useRef, useMemo, useState } from 'react';
import styled from 'styled-components';

export const HideScrollOnScrollDown = memo(() => {
  const ref = useRef<HTMLElement | null>(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        if (typeof window === 'undefined') {
          return;
        }
        if (ref === null || ref.current === null) {
          return;
        }

        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
          ref.current.style.top = '-80px';
        } else {
          ref.current.style.top = '0';
        }
        setLastScrollTop(scrollTop);
        return scrollTop;
      }, 1000),
    [lastScrollTop],
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <NavBar ref={ref}>
        <BrandTitle href="#">Jacob's Playground</BrandTitle>
        <NavItemList>
          <NavItem>
            <Link href="#">Home</Link>
          </NavItem>
          <NavItem>
            <Link href="#">About</Link>
          </NavItem>
          <NavItem>
            <Link href="#">Services</Link>
          </NavItem>
          <NavItem>
            <Link href="#">Portfolio</Link>
          </NavItem>
          <NavItem>
            <Link href="#">Contact</Link>
          </NavItem>
        </NavItemList>
      </NavBar>
      <ContentsContainer>
        <Title>
          Scroll-Down: Header (x) <br />
          Scroll-Up: Header (o)
        </Title>
        <Contents>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          recusandae deserunt natus ut rem blanditiis expedita ipsum ab dolorum
          ratione incidunt error nobis, maiores odit dignissimos ipsa, possimus
          totam ullam ipsam! Eius magnam ratione numquam, hic maiores labore
          expedita error omnis porro. Assumenda ipsam, numquam minima unde quae
          asperiores reprehenderit quibusdam corporis vero sit quas animi, aut
          accusantium quaerat! Vitae repellendus quibusdam accusantium minus
          error at aut nesciunt illum corporis molestias. Exercitationem sunt
          earum non, ex repellat possimus culpa nostrum quibusdam laborum soluta
          ipsa numquam eligendi vel magnam esse nihil fugit optio ab consequatur
          error quaerat dolores laboriosam vitae excepturi. Minima eaque
          voluptates obcaecati porro est. Perferendis ipsam aut minus iure
          delectus voluptates consequuntur. Nostrum sequi maiores necessitatibus
          exercitationem laborum veniam accusamus magni animi quae officia
          quibusdam nulla alias similique dolorum aspernatur vero dolore, unde
          vitae eligendi dignissimos? Quae, ut quos. Ex consequuntur voluptate
          ea hic quae possimus corrupti. Illo qui ducimus commodi sint unde
          corrupti aut pariatur quam facere rem quibusdam excepturi eius,
          delectus ipsam nulla. Neque quasi cupiditate voluptatem in, officia
          asperiores eligendi? Sit laborum quibusdam corrupti nihil ea debitis
          maiores qui, blanditiis ipsum ratione cumque? Atque, consectetur
          excepturi ipsam est iure laborum? Incidunt rem quibusdam hic atque,
          aspernatur itaque. Rerum laudantium omnis maxime eligendi! Reiciendis
          ut exercitationem facilis voluptates quae tempora dignissimos
          blanditiis perspiciatis, in, ad fugit quos debitis ullam beatae,
          temporibus et quisquam modi voluptatum accusantium omnis. Mollitia in
          numquam cum. Voluptatibus dignissimos aperiam ullam incidunt nam
          repudiandae minima quaerat, temporibus beatae repellat omnis cumque
          sit tempora maxime ab, voluptatum sequi, expedita ratione optio quis
          nesciunt? Illo, odit quasi eius libero cum voluptate esse ipsum autem
          exercitationem nihil quia totam voluptas et vitae sed porro itaque
          dolore ab, nisi unde quod doloremque necessitatibus repellendus.
          Ratione illo minima explicabo reiciendis. Ut cumque alias commodi
          beatae distinctio recusandae, illo aliquid nobis tempore soluta
          architecto nostrum facilis pariatur at minus qui tempora blanditiis
          cupiditate maxime quam ab eaque porro asperiores exercitationem!
          Facere molestiae omnis, eius soluta tempore voluptates ducimus ab sint
          beatae vitae laborum molestias odio suscipit culpa quam deleniti at
          excepturi totam assumenda quisquam amet fugiat corrupti! Laudantium,
          dolores expedita. Dolores aut modi officiis architecto quam, mollitia
          eius amet error veritatis? Quam consequatur cupiditate inventore
          itaque alias maiores, voluptates, perferendis asperiores fugiat
          praesentium rerum sed odit saepe facilis incidunt ut natus quo!
          Impedit voluptate distinctio ipsam necessitatibus neque? Placeat illum
          error voluptates nemo voluptate quasi laudantium perspiciatis, quo
          ratione aliquid sit pariatur cum ut atque fugit earum quibusdam ad,
          quos ea exercitationem doloribus asperiores sint? Dolores facilis eum,
          ut architecto voluptatibus nam totam maiores aliquam dolorum eligendi
          qui unde sunt corporis dolore fugiat at incidunt ipsam illo! Earum
          delectus aliquid ipsum unde accusantium eius animi doloribus similique
          id possimus aperiam, exercitationem odit? Nisi quasi facere deserunt
          adipisci, ratione officiis magni nulla minima. Iure, vero qui. Placeat
          quae tempora accusamus architecto minus, libero dolorum repudiandae
          aut corporis dolor cumque et magni earum distinctio totam enim
          voluptatem. Sint illo, fugiat impedit ipsum obcaecati, eaque inventore
          debitis incidunt et voluptatibus iusto aperiam beatae iste! Molestiae
          ducimus commodi rerum optio eum iure! Molestiae consectetur a ad
          sapiente voluptatem modi debitis vero, alias pariatur molestias amet
          porro facere voluptatum tempore blanditiis odit placeat. Itaque sint
          quos magni repellendus quae alias reprehenderit officiis est eius odio
          culpa, ipsa doloremque, mollitia corporis vel tempore laudantium.
          Molestias ea quam maxime ut eos amet debitis quia recusandae
          perferendis adipisci eum minima impedit quaerat in iste, porro
          repellendus excepturi ex sequi quo laudantium illo, quidem voluptatem
          itaque. Dolorem eum itaque esse debitis perspiciatis, quo
          reprehenderit? Maiores fuga autem unde magnam iusto consectetur
          temporibus doloribus quod voluptas culpa aliquid natus reiciendis,
          possimus cupiditate vero illum itaque vitae eos sequi laudantium esse
          maxime excepturi explicabo porro. Atque dolorum nesciunt voluptate
          quos officiis, velit a assumenda fugit numquam esse odit nostrum sequi
          consequuntur vel accusamus! Doloribus atque dolorum non sequi enim,
          rem, consectetur iure, vero commodi assumenda impedit tenetur cum
          architecto maxime eveniet qui et in adipisci autem recusandae
          accusantium soluta ipsa. Officiis excepturi magni, nesciunt
          perspiciatis odio sit temporibus nemo ab eius vitae molestias, labore
          aspernatur velit commodi laborum expedita inventore itaque tempore
          asperiores ipsum provident, incidunt culpa! Sequi, ex! Ipsa aut,
          quisquam magnam iure alias voluptatibus fugit ea molestias repellendus
          dolor illum veniam deserunt sint error ex. Fugit consectetur optio
          aperiam vero ratione quod neque, aspernatur atque adipisci sed
          reprehenderit, enim ea earum cupiditate tenetur perspiciatis nihil
          excepturi animi repellat! Obcaecati, velit deserunt? Nesciunt,
          praesentium dicta iste quis vitae earum eum voluptatem ratione omnis
          labore ab nostrum fuga maiores est. Impedit, ipsa incidunt aperiam
          laudantium dolorem, quod tempora magnam facilis ab sed beatae laborum
          modi libero totam placeat maxime! Quas perspiciatis ex, maxime error
          ullam doloribus odit id dolore, rerum suscipit sapiente quod dolor,
          excepturi asperiores facilis blanditiis molestias similique nesciunt.
          In ipsa quod, ad eligendi vitae repellat perspiciatis aspernatur! Sed
          esse odio ratione, aliquid earum laboriosam porro optio iusto placeat,
          repudiandae rerum debitis totam harum tempora quos neque molestias
          labore magnam dolores. Iure omnis aperiam reprehenderit reiciendis!
          Tenetur unde excepturi corrupti soluta reiciendis doloribus, ullam
          molestiae. Cum ab esse obcaecati voluptatum quisquam est! Provident
          beatae ratione aliquam corrupti suscipit odit magnam delectus, impedit
          iste quo mollitia ea cupiditate, est quod modi similique reiciendis
          nihil! Soluta accusamus, temporibus consequuntur officia esse tempora
          molestias accusantium dolorum nobis blanditiis asperiores fugit
          voluptatibus totam vel nemo deserunt! Numquam, quisquam repellendus
          repudiandae commodi sunt harum consectetur quidem assumenda amet,
          nihil quod consequatur est modi natus doloribus sapiente cumque veniam
          vel enim, voluptate iure hic. Magni optio sunt iusto sit. Sint sed
          nobis dolores veritatis beatae vel alias praesentium. Maiores hic ex
          recusandae, autem est accusamus mollitia deserunt alias voluptate
          nulla repellendus, libero omnis, ullam modi! Eligendi dignissimos
          rerum expedita eaque ullam error sequi modi alias, cum, eveniet,
          cumque ducimus voluptas dolorum asperiores inventore quasi aspernatur.
          Dignissimos, magni voluptatibus assumenda mollitia quasi tempora nam
          sint nobis, optio dolorem quam pariatur voluptas amet accusamus
          praesentium incidunt debitis ullam hic tenetur cum possimus illum!
          Odio corrupti deserunt molestiae consequatur corporis? Dignissimos,
          veniam? Quo facilis aperiam doloribus?
        </Contents>
      </ContentsContainer>
    </>
  );
});

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background: darkcyan;
  padding: 0 48px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
`;

const BrandTitle = styled.a`
  color: white;
  font-size: 1.8em;
  font-weight: 600;
  text-decoration: none;
`;

const NavItemList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
`;

const NavItem = styled.li``;

const Link = styled.a`
  color: white;
  padding: 0 20px;
  font-size: 1.1em;
  text-decoration: none;
  font-weight: 600;
`;

const ContentsContainer = styled.section`
  padding: 150px 100px 100px;
  color: lightgray;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 3em;
`;

const Contents = styled.p`
  font-size: 1.05em;
`;
