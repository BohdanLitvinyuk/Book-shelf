import axios from 'axios';

export default async function () {
  const res = await axios(
    'https://books-backend.p.goit.global/books/category?category=Advice How-To and Miscellaneous'
  );
  console.log(res.data);
  return res.data;
}
