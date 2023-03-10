import Layout from '@/components/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import {  StateContext } from '../context/statecontex'
export default function App({ Component, pageProps }: AppProps) {
  return  (
    <StateContext>

    <Layout>
    <Component {...pageProps} />
    </Layout>
    </StateContext>
  )
}
