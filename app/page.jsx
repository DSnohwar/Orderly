import React from 'react'
import axios from 'axios'
import ListProducts from '@/components/products/ListProducts'
import queryString from 'query-string';

const getProducts = async ({ searchParams }) => {
  const urlparams = {
    keyword: searchParams.keyword,
    page: searchParams.page,
    category: searchParams.category,
    "ratings[gte]": searchParams.ratings,
    "price[gte]": searchParams.min,
    "price[lte]": searchParams.max,
  };
  const searchQuery = queryString.stringify(urlparams);
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products?${searchQuery}`)
  return data;

};

const HomePage = async ({ searchParams }) => {
  const productsData = await getProducts({ searchParams });

  return (<>
    <ListProducts data={productsData} />
  </>)

};

export default HomePage;
