"use client";
import React from 'react';
import Header from './Header/Header';
import Tabs from './Tabs/Tabs';
import ReviewsContainer from '../Blog/Reviews/ReviewsContainer';
function Media() {
  return (
    <>
      <Header />
      <Tabs />
      <ReviewsContainer />
    </>
  )
}

export default Media