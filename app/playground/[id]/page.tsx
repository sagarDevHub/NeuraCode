'use client';

import { usePlayground } from '@/modules/playground/hooks/usePlayground';
import { useParams } from 'next/navigation';
import React from 'react';

const MainPlaygroundPage = () => {
  const { id } = useParams<{ id: string }>();
  const { playgroundData, templateData, isLoading, error, saveTemplateData } = usePlayground(id);
  console.log('templateData', templateData);
  console.log('playground data', playgroundData);
  return <div className="">Params: {id}</div>;
};

export default MainPlaygroundPage;
