import React from 'react';
import { FormattedMessage } from 'react-intl';
import { TagCloud } from 'react-tagcloud';

import Container from '@mui/material/Container';

import { customTagRenderer } from '../../utils/customTagRender';

import { ITag } from '../../types/common';
import ItemCard from '../common/ItemCard';
import Title from '../common/Title';

const data: ITag[] = [
  { value: 'jQuery', count: 25 },
  { value: 'MongoDB', count: 18 },
  { value: 'JavaScript', count: 38 },
  { value: 'React', count: 30 },
  { value: 'Nodejs', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'HTML5', count: 33 },
  { value: 'CSS3', count: 20 },
  { value: 'Webpack', count: 22 },
  { value: 'Babel.js', count: 7 },
  { value: 'ECMAScript', count: 25 },
  { value: 'Jest', count: 15 },
  { value: 'Mocha', count: 17 },
  { value: 'React Native', count: 27 },
  { value: 'Angular.js', count: 30 },
  { value: 'TypeScript', count: 15 },
  { value: 'Flow', count: 30 },
  { value: 'NPM', count: 11 },
];

function Main(): JSX.Element {
  return (
    <Container fixed sx={{ maxWidth: 'xl' }}>
      <Title>
        <FormattedMessage id="main_last" />
      </Title>
      <ItemCard title="du" cardId="09" />
      <Title>
        <FormattedMessage id="main_collections" />
      </Title>
      <TagCloud
        minSize={1}
        maxSize={5}
        tags={data}
        className="simple-cloud"
        renderer={customTagRenderer}
        onClick={(tag: ITag) => alert(`'${tag.value}' was selected!`)}
      />
    </Container>
  );
}

export default Main;
