"use client";

import React from "react";
import Image from "next/image";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import SpaIcon from '@mui/icons-material/Spa';
import ImageIcon from '@mui/icons-material/Image';
import CakeIcon from '@mui/icons-material/Cake';
import CreateIcon from '@mui/icons-material/Create';
import FestivalIcon from '@mui/icons-material/Festival';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';

const Home = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-full mx-auto">
      

      {/* Header Section */}
      <header className="flex justify-between h-[70px] bg-white p-10 media1090:p-0">
        <div className="ml-[184px] my-auto hidden media1090:visible">
          <Image src="/statusqueen.png" width={150} height={40} alt="status queen"/>
        </div>
        <HomeIcon className="visible media1090:hidden"/>
        <ul className="flex items-center ml-[196px] hidden media1090:visible">
          <li className="text-[#555555] text-[12px]"><HomeIcon />HOME</li>
          <li className="text-[#555555] text-[12px] ml-[28px]"><SpaIcon />
          <>
            <Button
              id="basic-button"
              className="text-[#555555] text-[12px] ml-[28px]"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              STATUS
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem className="text-[#555555] text-[12px]" onClick={handleClose}><ImageIcon />DP IMAGES</MenuItem>
              <MenuItem className="text-[#555555] text-[12px]" onClick={handleClose}><ImageIcon />IMAGE STATUS</MenuItem>
              <MenuItem className="text-[#555555] text-[12px]" onClick={handleClose}><CreateIcon />ENGLISH STATUS</MenuItem>
              <MenuItem className="text-[#555555] text-[12px]" onClick={handleClose}><CreateIcon />HINDI STATUS</MenuItem>
              <MenuItem className="text-[#555555] text-[12px]" onClick={handleClose}><CreateIcon />PUNJABI STATUS</MenuItem>
            </Menu>
          </>
          </li>
          <li className="text-[#555555] text-[12px] ml-[28px]"><ImageIcon />WALLPAPERS</li>
          <li className="text-[#555555] text-[12px] ml-[28px] mr-[196px]"><CakeIcon />BIRTHDAY WISHES</li>
        </ul>
        <MenuIcon className="visible media1090:hidden"/>
      </header>


      {/* Main Section */}
      <main className="flex justify-center items-center">
       <div className="flex flex-wrap mt-14 mb-24 w-[1114px] h-96">
        <div className="flex flex-col justify-center items-center w-60 h-44 bg-gradient-to-r from-[#F7849A] to-[#FE988B] mr-8 rounded-md shadow-slate-400 shadow-sm">
          <ImageIcon sx={{ color: "white" }}/>
          <span className="text-white">ƊƤ IMAƓƐS</span>
        </div>
        <div className="flex flex-col justify-center items-center w-60 h-44 bg-gradient-to-r from-[#BFEE6C] to-[#9CE799] mr-8 rounded-md shadow-slate-400 shadow-sm">
          <ImageIcon sx={{ color: "white" }}/>
          <span className="text-white">IMAƓƐ SƬAƬUS</span>
        </div>
        <div className="flex flex-col justify-center items-center w-60 h-44 bg-gradient-to-r from-[#84F7B4] to-[#8DDBE8] mr-8 rounded-md shadow-slate-400 shadow-sm">
          <CreateIcon sx={{ color: "white" }}/>
          <span className="text-white">ƬƐXƬ SƬAƬUS</span>
        </div>
        <div className="flex flex-col justify-center items-center w-60 h-44 bg-gradient-to-r from-[#FFD99F] to-[#FF7A9A] rounded-md shadow-slate-400 shadow-sm">
          <CakeIcon sx={{ color: "white" }}/>
          <span className="text-white">ƁIRƬHƊAƳ ƜISHƐS</span>
        </div>
        <div className="flex flex-col justify-center items-center w-60 h-44 bg-gradient-to-r from-[#95F9D7] to-[#48D7FA] mr-8 rounded-md shadow-slate-400 shadow-sm">
          <CreateIcon sx={{ color: "white" }}/>
          <span className="text-white">Quotes</span>
        </div>
        <div className="flex flex-col justify-center items-center w-60 h-44 bg-gradient-to-r from-[#6178CD] to-[#E2A0FE] mr-8 rounded-md shadow-slate-400 shadow-sm">
          <ImageIcon sx={{ color: "white" }}/>
          <span className="text-white">MOƁILƐ ƜALLƤAƤƐR</span>
        </div>
        <div className="flex flex-col justify-center items-center w-60 h-44 bg-gradient-to-r from-[#62DAD3] to-[#CA9FFE] mr-8 rounded-md shadow-slate-400 shadow-sm">
          <ImageIcon sx={{ color: "white" }}/>
          <span className="text-white">ƊƐSƘƬOƤ ƜALLƤAƤƐR</span>
        </div>
        <div className="flex flex-col justify-center items-center w-60 h-44 bg-gradient-to-r from-[#EACCA0] to-[#E6BB83] rounded-md shadow-slate-400 shadow-sm">
          <FestivalIcon sx={{ color: "white" }}/>
          <span className="text-white">ƑƐSƬIƲAL ƜISHƐS</span>
        </div>
       </div>
      </main>


      {/* Hero Section */}
      <section className="flex justify-center items-center mb-20">
        <div className="w-[1412px] h-[400px] rounded-lg shadow-slate-600 shadow-lg">
          <p className="text-[#928f8f] text-center mt-6">LATEST WHATSAPP STATUS</p>
          <div className="flex flex-wrap p-6">
            <div className="w-80 h-32 rounded-md bg-white p-4 mr-6 shadow-slate-400 shadow-sm">
              <span className="text-slate-600 text-sm">ਮੰਜਿਲ ਤੇ ਇਕ ਨਾਂ ਇਕ ਦਿਨ ਮਿਲ ਹੀ ਜਾੳਗੀ ਪਰ ਸਾਥ ਕਿਸ ਕਿਸ ਨੇ ਦਿੱਤਾ, ਯਾਦ ਜ਼ਰੂਰ ਰਹੁਗਾ ।</span>
              <div className="flex justify-between mt-4">
                <button className="text-xs text-white bg-[#FE948B] p-1 rounded-lg">COPY</button>
                <span className="text-[#828080] text-sm"><FavoriteBorderIcon sx={{ color: "#FE948B" }}/>10K</span>
              </div>
            </div>
            <div className="w-80 h-32 rounded-md bg-white p-4 mr-6 shadow-slate-400 shadow-sm">
              <span className="text-slate-600 text-sm">ਮੰਜਿਲ ਤੇ ਇਕ ਨਾਂ ਇਕ ਦਿਨ ਮਿਲ ਹੀ ਜਾੳਗੀ ਪਰ ਸਾਥ ਕਿਸ ਕਿਸ ਨੇ ਦਿੱਤਾ, ਯਾਦ ਜ਼ਰੂਰ ਰਹੁਗਾ ।</span>
              <div className="flex justify-between mt-4">
                <button className="text-xs text-white bg-[#FE948B] p-1 rounded-lg">COPY</button>
                <span className="text-[#828080] text-sm"><FavoriteBorderIcon sx={{ color: "#FE948B" }}/>10K</span>
              </div>
            </div>
            <div className="w-80 h-32 rounded-md bg-white p-4 mr-6 shadow-slate-400 shadow-sm">
              <span className="text-slate-600 text-sm">ਮੰਜਿਲ ਤੇ ਇਕ ਨਾਂ ਇਕ ਦਿਨ ਮਿਲ ਹੀ ਜਾੳਗੀ ਪਰ ਸਾਥ ਕਿਸ ਕਿਸ ਨੇ ਦਿੱਤਾ, ਯਾਦ ਜ਼ਰੂਰ ਰਹੁਗਾ ।</span>
              <div className="flex justify-between mt-4">
                <button className="text-xs text-white bg-[#FE948B] p-1 rounded-lg">COPY</button>
                <span className="text-[#828080] text-sm"><FavoriteBorderIcon sx={{ color: "#FE948B" }}/>10K</span>
              </div>
            </div>
            <div className="w-80 h-32 rounded-md bg-white p-4 shadow-slate-400 shadow-sm">
              <span className="text-slate-600 text-sm">ਮੰਜਿਲ ਤੇ ਇਕ ਨਾਂ ਇਕ ਦਿਨ ਮਿਲ ਹੀ ਜਾੳਗੀ ਪਰ ਸਾਥ ਕਿਸ ਕਿਸ ਨੇ ਦਿੱਤਾ, ਯਾਦ ਜ਼ਰੂਰ ਰਹੁਗਾ ।</span>
              <div className="flex justify-between mt-4">
                <button className="text-xs text-white bg-[#FE948B] p-1 rounded-lg">COPY</button>
                <span className="text-[#828080] text-sm"><FavoriteBorderIcon sx={{ color: "#FE948B" }}/>10K</span>
              </div>
            </div>
            <div className="w-80 h-32 rounded-md bg-white p-4 mr-6 mt-4 shadow-slate-400 shadow-sm">
              <span className="text-slate-600 text-sm">ਮੰਜਿਲ ਤੇ ਇਕ ਨਾਂ ਇਕ ਦਿਨ ਮਿਲ ਹੀ ਜਾੳਗੀ ਪਰ ਸਾਥ ਕਿਸ ਕਿਸ ਨੇ ਦਿੱਤਾ, ਯਾਦ ਜ਼ਰੂਰ ਰਹੁਗਾ ।</span>
              <div className="flex justify-between mt-4">
                <button className="text-xs text-white bg-[#FE948B] p-1 rounded-lg">COPY</button>
                <span className="text-[#828080] text-sm"><FavoriteBorderIcon sx={{ color: "#FE948B" }}/>10K</span>
              </div>
            </div>
            <div className="w-80 h-32 rounded-md bg-white p-4 mr-6 mt-4 shadow-slate-400 shadow-sm">
              <span className="text-slate-600 text-sm">ਮੰਜਿਲ ਤੇ ਇਕ ਨਾਂ ਇਕ ਦਿਨ ਮਿਲ ਹੀ ਜਾੳਗੀ ਪਰ ਸਾਥ ਕਿਸ ਕਿਸ ਨੇ ਦਿੱਤਾ, ਯਾਦ ਜ਼ਰੂਰ ਰਹੁਗਾ ।</span>
              <div className="flex justify-between mt-4">
                <button className="text-xs text-white bg-[#FE948B] p-1 rounded-lg">COPY</button>
                <span className="text-[#828080] text-sm"><FavoriteBorderIcon sx={{ color: "#FE948B" }}/>10K</span>
              </div>
            </div>
            <div className="w-80 h-32 rounded-md bg-white p-4 mr-6 mt-4 shadow-slate-400 shadow-sm">
              <span className="text-slate-600 text-sm">ਮੰਜਿਲ ਤੇ ਇਕ ਨਾਂ ਇਕ ਦਿਨ ਮਿਲ ਹੀ ਜਾੳਗੀ ਪਰ ਸਾਥ ਕਿਸ ਕਿਸ ਨੇ ਦਿੱਤਾ, ਯਾਦ ਜ਼ਰੂਰ ਰਹੁਗਾ ।</span>
              <div className="flex justify-between mt-4">
                <button className="text-xs text-white bg-[#FE948B] p-1 rounded-lg">COPY</button>
                <span className="text-[#828080] text-sm"><FavoriteBorderIcon sx={{ color: "#FE948B" }}/>10K</span>
              </div>
            </div>
            <div className="w-80 h-32 rounded-md bg-white p-4 mt-4 shadow-slate-400 shadow-sm">
              <span className="text-slate-600 text-sm">ਮੰਜਿਲ ਤੇ ਇਕ ਨਾਂ ਇਕ ਦਿਨ ਮਿਲ ਹੀ ਜਾੳਗੀ ਪਰ ਸਾਥ ਕਿਸ ਕਿਸ ਨੇ ਦਿੱਤਾ, ਯਾਦ ਜ਼ਰੂਰ ਰਹੁਗਾ ।</span>
              <div className="flex justify-between mt-4">
                <button className="text-xs text-white bg-[#FE948B] p-1 rounded-lg">COPY</button>
                <span className="text-[#828080] text-sm"><FavoriteBorderIcon sx={{ color: "#FE948B" }}/>10K</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer Section */}
      <footer className="bg-white p-4">
        <div className="flex justify-around">
          <ul className="flex">
            <li className="text-[#555555] text-[12px] hover:text-[#bc4242] mr-3">PRIVACY POLICY</li>
            <li className="text-[#555555] text-[12px] hover:text-[#bc4242] mr-3">SITE MAP</li>
            <li className="text-[#555555] text-[12px] hover:text-[#bc4242]">CONTACT US</li>
          </ul>
          <ul className="flex">
            <li className="text-[#bc4242] mr-7"><TwitterIcon /></li>
            <li className="text-[#bc4242] mr-7"><FacebookIcon /></li>
            <li className="text-[#bc4242]"><InstagramIcon /></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Home;