import React from 'react';
import { text } from '@storybook/addon-knobs';

import GalleryItem from './GalleryItem';

export default {
  component: GalleryItem,
  title: 'GalleryItem',
};

export const Default = () => (
  <GalleryItem image="https://images.unsplash.com/photo-1588614478415-f25a77edc40f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=683&q=80" description="react project for customer x" title={text('title', 'case study 1')} />
);
