import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import Categorys from './adminPage/Category';
import CreatCard from './adminPage/CreatCard';

import axios from 'axios';
import { useMutation } from 'react-query';

function AdminBody(props) {
  // const PostData = () => {
  //   const posting = async () => {
  //     const url = 'localhost:3000/post/create';
  //     const payload = { data };
  //     axios
  //       .post(url, payload)
  //       .then((el) => console.log(el.data))
  //       .catch((err) => console.log(err));
  //   };
  //   const { mutate, isLoading, isError, error, isSuccess } = useMutation(PostData);
  //   console.log(`isLoading: ${isLoading}, isError: ${isError}, error: ${error}, isSuccess: ${isSuccess}`);
  //   // useMutation의 리턴값을 출력한다.
  //   return <button onClick={mutate}>데이터 포스팅!</button>;
  // };
  return (
    <>
      <div className="grid col-span-3 row-span-full grid-cols-4 grid-rows-6 lg:col-span-2 bg-garden1">
        <div className="flex flex-wrap justify-between col-span-full p-6 pb-8 bg-leftSide text-garden2 ">
          <img className="m-1" src="/src/assets/profile.png" alt="profile_img" />
          <ul className="flex flex-col justify-center">
            <li className="text-l mb-2 md:text-xl font-semibold">관리자</li>
            <li className="text-l md:text-xl font-semibold">Lv.Admin</li>
          </ul>
        </div>
        <div className="col-span-full row-start-2 row-span-full p-6 bg-leftSide text-garden2 ">
          <Categorys name="admin" />
        </div>
      </div>
      <div className="flex flex-col p-6 col-start-4 col-span-full row-span-full bg-garden2 lg:col-start-3">
        <div className="flex flex-row justify-between p-4 item-bottom">
          <h2 className="flex text-4xl font-bold mb-5">동물카드 관리</h2>
        </div>
        <div className="flex flex-wrap flex-row">
          <CreatCard />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
export default AdminBody;
