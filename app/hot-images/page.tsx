'use client'

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import FetcHotImages from "../../components/FetcHotImages";

type Props = {};

const queryClient = new QueryClient();

function HotImages({}: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <FetcHotImages />
    </QueryClientProvider>
  );
}

export default HotImages;
