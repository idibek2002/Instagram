import "./Home.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Keyboard, Pagination, Navigation } from "swiper/modules";
import person from "../../assets/profile.jpg";
import person2 from "../../assets/2.jpg";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const Home = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="">
    <div className="max-w-[1000px] mx-auto pt-[30px] md:pt-[50px] flex justify-between  bg-[#000]">
      <div className="py-[20px] w-[80%] idi:mx-auto sm:w-full">
        <div className="stories w-[80%] sm:w-full mx-auto relative overflow-x-scroll flex items-center gap-x-[20px]">
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" className="border-[50%]"/>
                </div>  
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        <div className=" ">
                <div className="w-[60px] h-[60px] rounded-[50%] border-2 overflow-hidden person">
                  <img src={person} alt="" />
                </div>
                <h1 className="text-[12px] font-[500] text-[#F5F5F5] pt-[5px]">
                  idibek_02
                </h1>
              </div>
        </div>
        <div className="post w-[100%] py-[40px] flex flex-col gap-y-[20px] relative justify-center items-center">
          <div className="grid grid-cols-1 gap-y-[20px]">
          <div className="max-w-[400px] mx-auto sm:w-full">
            <div className="flex items-center justify-between sm1:px-[10px]">
              <div className="flex items-center gap-x-[15px]">
                <div className="w-[32px] h-[32px] rounded-[50%]">
                  <img src={person} alt="" className="rounded-[50%]" />
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <h1 className="text-[#FFF] font-[500]">idibek_02</h1>
                  <span className="text-[30px] text-[#A8A8A8]">•</span>
                  <span className="text-[#A8A8A8]">17 ч.</span>
                </div>
              </div>
              <div onClick={handleClickOpen} className="cursor-pointer">
                <svg
                  aria-label="Дополнительно"
                  class="_ab6-"
                  color="rgb(168, 168, 168)"
                  fill="rgb(168, 168, 168)"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <circle cx="12" cy="12" r="1.5"></circle>
                  <circle cx="6" cy="12" r="1.5"></circle>
                  <circle cx="18" cy="12" r="1.5"></circle>
                </svg>
              </div>
            </div>
            <div className="py-[10px] relative">
              
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                style={{ borderRadius: "3px"}}
                keyboard={{
                  enabled: true,
                }}
                // pagination={{
                //   clickable: true,
                // }}
                // navigation={true}
                // modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide className="w-full">
                  <div className="flex items-center justify-center">
                    <img src={person} alt="" className="w-full" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="w-full">
                  <div className="flex items-center justify-center">
                    <img src={person} alt="" className="w-full" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="flex items-center justify-between sm1:px-[10px]">
              <div className="flex items-center gap-x-[15px] py-[5px]">
                <button>
                  <svg
                    aria-label="Нравится"
                    class="x1lliihq x1n2onr6"
                    color="rgb(245, 245, 245)"
                    fill="rgb(245, 245, 245)"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Нравится</title>
                    <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                  </svg>
                </button>
                <button>
                  <svg
                    aria-label="Комментировать"
                    class="x1lliihq x1n2onr6"
                    color="rgb(245, 245, 245)"
                    fill="rgb(245, 245, 245)"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Комментировать</title>
                    <path
                      d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                </button>
                <button>
                  <svg
                    aria-label="Поделиться публикацией"
                    class="x1lliihq x1n2onr6"
                    color="rgb(245, 245, 245)"
                    fill="rgb(245, 245, 245)"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Поделиться публикацией</title>
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="22"
                      x2="9.218"
                      y1="3"
                      y2="10.083"
                    ></line>
                    <polygon
                      fill="none"
                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>
                  </svg>
                </button>
              </div>
              <div>
                <button>
                  <svg
                    aria-label="Сохранить"
                    class="x1lliihq x1n2onr6"
                    color="rgb(168, 168, 168)"
                    fill="rgb(168, 168, 168)"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Сохранить</title>
                    <polygon
                      fill="none"
                      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>
                  </svg>
                </button>
              </div>
            </div>
            <div className="sm1:px-[10px]">
              <h1 className="text-[#FFF] font-[600] py-[10px]">
                417 отметок "Нравится"
              </h1>
            </div>
            <div className="description sm1:px-[15px] text-[#FFF] flex items-center gap-x-[10px] leading-[15px]">
              <h1>idibek_02 </h1>
              <span className="text-[30px] text-[#A8A8A8]">•</span>
              <p>Лайк ...</p>
            </div>
            <div className="sm1:px-[10px]">
              <button className="text-[#7F7F7F]">ещё</button>
            </div>
            <div>
              <h1 className="text-[#7F7F7F] sm1:px-[10px]">
                Посмотреть все комментарии (42)
              </h1>
            </div>
            <div className="py-[5px] sm1:px-[10px]">
              <input
                placeholder="Добавьте комментариий..."
                className="pb-[15px] w-full text-[14px] outline-none bg-transparent text-[#F5F5F5] placeholder:text-[#7F7F7F] placeholder:text-[14px] border-b border-[#262626]"
              ></input>
            </div>
          </div>
          <div className="max-w-[400px] mx-auto sm:w-full ">
            <div className="flex items-center justify-between sm1:px-[10px]">
              <div className="flex items-center gap-x-[15px]">
                <div className="w-[32px] h-[32px] rounded-[50%]">
                  <img src={person} alt="" className="rounded-[50%]" />
                </div>
                <div className="flex items-center gap-x-[10px]">
                  <h1 className="text-[#FFF] font-[500]">idibek_02</h1>
                  <span className="text-[30px] text-[#A8A8A8]">•</span>
                  <span className="text-[#A8A8A8]"> 17 ч.</span>
                </div>
              </div>
              <div onClick={handleClickOpen} className="cursor-pointer">
                <svg
                  aria-label="Дополнительно"
                  class="_ab6-"
                  color="rgb(168, 168, 168)"
                  fill="rgb(168, 168, 168)"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <circle cx="12" cy="12" r="1.5"></circle>
                  <circle cx="6" cy="12" r="1.5"></circle>
                  <circle cx="18" cy="12" r="1.5"></circle>
                </svg>
              </div>
            </div>
            <div className="py-[10px]">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                style={{ borderRadius: "3px" }}
                keyboard={{
                  enabled: true,
                }}
                // pagination={{
                //   clickable: true,
                // }}
                // navigation={true}
                // modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide className="w-full max-h-[585px]">
                  <div className="flex items-center justify-center">
                    <img src={person2} alt="" className="w-full" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="w-full max-h-[585px]">
                  <div className="flex items-center justify-center">
                    <img src={person} alt="" className="object-contain" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="flex items-center justify-between sm1:px-[10px]">
              <div className="flex items-center gap-x-[15px] py-[5px]">
                <button>
                  <svg
                    aria-label="Нравится"
                    class="x1lliihq x1n2onr6"
                    color="rgb(245, 245, 245)"
                    fill="rgb(245, 245, 245)"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Нравится</title>
                    <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                  </svg>
                </button>
                <button>
                  <svg
                    aria-label="Комментировать"
                    class="x1lliihq x1n2onr6"
                    color="rgb(245, 245, 245)"
                    fill="rgb(245, 245, 245)"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Комментировать</title>
                    <path
                      d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                </button>
                <button>
                  <svg
                    aria-label="Поделиться публикацией"
                    class="x1lliihq x1n2onr6"
                    color="rgb(245, 245, 245)"
                    fill="rgb(245, 245, 245)"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Поделиться публикацией</title>
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="22"
                      x2="9.218"
                      y1="3"
                      y2="10.083"
                    ></line>
                    <polygon
                      fill="none"
                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>
                  </svg>
                </button>
              </div>
              <div>
                <button>
                  <svg
                    aria-label="Сохранить"
                    class="x1lliihq x1n2onr6"
                    color="rgb(168, 168, 168)"
                    fill="rgb(168, 168, 168)"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Сохранить</title>
                    <polygon
                      fill="none"
                      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>
                  </svg>
                </button>
              </div>
            </div>
            <div>
                <h1 className="text-[#FFF] font-[600] py-[10px] sm1:px-[10px]">417 отметок "Нравится"</h1>
            </div>
            <div className="description sm1:px-[10px] text-[#FFF] flex items-center gap-x-[10px] leading-[15px]">
                <h1>idibek_02</h1>
                <span className="text-[30px] text-[#A8A8A8]">•</span>
                <p>Лайк ...</p>
            </div>
            <div>
                <button className="text-[#7F7F7F] sm1:px-[10px]">ещё</button>
            </div>
            <div>
                    <h1 className="text-[#7F7F7F] sm1:px-[10px]">Посмотреть все комментарии (42)</h1>
            </div>
            <div className="py-[5px] sm1:px-[10px]">
                <input placeholder="Добавьте комментариий..." className="pb-[15px] w-full text-[14px] outline-none bg-transparent text-[#F5F5F5] placeholder:text-[#7F7F7F] placeholder:text-[14px] border-b border-[#262626]"></input>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="flex w-[50%] justify-center idi:hidden">
    <div className="max-w-[350px] py-[30px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-[10px]">
          <div className="w-[44px] h-[44px]">
            <img src={person} alt="" className="rounded-[50%]" />
          </div>
          <div className="flex flex-col leading-[18px]">
            <h1 className="text-[#FFF]">idibek_02</h1>
            <h1 className="text-[#A8A8A8] text-[14px]">idibek_02</h1>
          </div>
        </div>
        <div className="flex items-center justify-end ">
          <button className="text-[#0095F6] font-[500]">
            Переключиться
          </button>
        </div>
      </div>
      <div className="py-[10px] flex items-center justify-between">
        <h1 className="text-[#A8A8A8] font-[500]">Рекомендации для вас</h1>
        <button className="text-[#F5F5F5] font-[500]">Все</button>
      </div>
      <div className="flex flex-col gap-y-[10px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[10px]">
            <div className="w-[44px] h-[44px]">
              <img src={person} alt="" className="rounded-[50%]" />
            </div>
            <div className="flex flex-col leading-[18px]">
              <h1 className="text-[#FFF]">idibek_02</h1>
              <h1 className="text-[#A8A8A8] text-[14px]">
                Подписан(а) raabovnaaa_
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-end ">
            <button className="text-[#0095F6] font-[500]">
              Подписаться
            </button>
          </div>
        </div>
      </div>
      <div className="py-[30px]">
        <ul className="flex items-center gap-[5px] flex-wrap">
          <Link className="hover:underline text-[#A8A8A8] text-[12px]">
            Информация
          </Link>
          <Link className="hover:underline text-[#A8A8A8] text-[12px]">
            Помощь
          </Link>
          <Link className="hover:underline text-[#A8A8A8] text-[12px]">
            Пресса
          </Link>
          <Link className="hover:underline text-[#A8A8A8] text-[12px]">
            API
          </Link>
        </ul>
      </div>
    </div>
  </div>
    </div>
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent sx={{padding:0,width:"400px",backgroundColor:"#2f2f2f",borderRadius:"10px"}}>
          <ul className="flex flex-col rounded-[10px]">
          <Link className="py-[15px] border-b border-[#414141] text-center text-[#e55151] font-[600]">Пожаловаться</Link>
          <Link className="py-[15px] border-b border-[#414141] text-center text-[#FFF] font-[600]">Отменить</Link>
          <Link className="py-[15px] border-b border-[#414141] text-center text-[#FFF] font-[600]">Пожаловаться</Link>
          <Link className="py-[15px] border-b border-[#414141] text-center text-[#FFF] font-[600]">Пожаловаться</Link>
          <Link className="py-[15px] border-b border-[#414141] text-center text-[#FFF] font-[600]">Пожаловаться</Link>
          <Link className="py-[15px] border-b border-[#414141] text-center text-[#FFF] font-[600]">Пожаловаться</Link>
          <Link className="py-[15px] text-center text-[#FFF]">Пожаловаться</Link>
          </ul>
        </DialogContent>
      </Dialog>
    </div>
    </div>
  );
};

export default Home;
