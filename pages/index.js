/** 
 * 
 * index.js
 * 
 * 
 */

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React,{useState} from 'react';

import { css, jsx } from '@emotion/react';
import { Box,Input,Select,Center,Button, ButtonGroup,Link,Spinner } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Home() {

  let [mode,setMode] = useState("form");
  let [res,setRes] = useState("");

  let [destAddress,setDestAddress] = useState("");
  let [remindStr,setRemindStr] = useState("");
  let [sendingAtYe,setSendingAtYe] = useState("");
  let [sendingAtMo,setSendingAtMo] = useState("");
  let [sendingAtDa,setSendingAtDa] = useState("");
  let [sendingAtHo,setSendingAtHo] = useState("");
  let [sendingAtMi,setSendingAtMi] = useState("");

  const daChange = (event) => setDestAddress(event.target.value);
  const rsChange = (event) => setRemindStr(event.target.value);
  const saYeChange = (event) => setSendingAtYe(event.target.value);
  const saMoChange = (event) => setSendingAtMo(event.target.value);
  const saDaChange = (event) => setSendingAtDa(event.target.value);
  const saHoChange = (event) => setSendingAtHo(event.target.value);
  const saMiChange = (event) => setSendingAtMi(event.target.value);

  //const [numForRandomText,setNumForRandomText] = useState(999);

  const randomText = ()=>{
    const t = ["ソシャゲをやる","買い物に行く","イベントがある"];
    // if(numForRandomText==999){setNumForRandomText(Math.floor(Math.random()*t.length))}
    return "sending str ※平文で保存されます example:" + t[0];
  }

  const onSent = ()=>{
    setMode("sent");
    postMailr();
  }

  const onBack = ()=>{
    setMode("form");
    setRes("");

    setDestAddress("");
    setRemindStr("");
    setSendingAtYe("");
    setSendingAtMo("");
    setSendingAtDa("");
    setSendingAtHo("");
    setSendingAtMi("");
  }

  const postMailr = async event =>{

    // event.preventDefault();

    const res = await fetch(process.env.NEXT_PUBLIC_ENDPOINTROOT+'/api/create',{
      body: JSON.stringify({
        destAddress: destAddress,
        remindStr: remindStr,
        sendingAtYe: sendingAtYe,
        sendingAtMo: sendingAtMo,
        sendingAtDa: sendingAtDa,
        sendingAtHo: sendingAtHo,
        sendingAtMi: sendingAtMi
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      mode:'cors'
    })

    const result = await res.json();
    setRes(result);
    console.log(result);


  }


  if(mode=="sent"){

    if(res==""){

      return(
        <Box position="absolute" w="100%" h="100%" bg="red.50">
          <Center><Spinner color="red.400" /></Center>
        </Box>
      )
    }else{
      return(
        <Box position="absolute" w="100%" h="100%" bg="red.50">
  
          <Center>
            <Box w="400px" h="40%" mb="10px">          
              <Box color="red.400" mt="10px" mb="10px"><h1>{res.r ? res.r :"メールを予約しました！"}</h1></Box>
              宛先 : {destAddress}<br />
              内容 : {remindStr}<br />
              {sendingAtYe}年{sendingAtMo}月{sendingAtDa}日 {sendingAtHo}時{sendingAtMi}分
            </Box>
          </Center>

          <Center><Button color="red.400" bg="white" size="xs" onClick={onBack}>return</Button></Center>

        </Box>
        
      );

    }

  }

  if(mode=="form"){

    return (
      <Box position="absolute" w="100%" h="100%" bg="red.50">
  
        <Center>
          <Box w="400px" h="40%">
            <Box color="red.400" mt="10px" mb="10px"><h1>mailrail.c - 未来の自分にメールを送るアプリ</h1></Box>
            <Input placeholder="your address sample:sample@sample.com"
             size="sm" bg="white" value={destAddress} onChange={daChange} />
            <Input placeholder={randomText()}
             size="sm" bg="white" mb="10px" value={remindStr} onChange={rsChange} />
  
            <Input placeholder="year sample:2021"
             size="sm" bg="white" value={sendingAtYe} onChange={saYeChange} />

            <Select placeholder="month"
             size="sm" bg="white" value={sendingAtMo} onChange={saMoChange} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </Select>
            <Select placeholder="day"
             size="sm" bg="white" value={sendingAtDa} onChange={saDaChange} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </Select>
            <Select placeholder="hour" size="sm" bg="white" value={sendingAtHo} onChange={saHoChange} >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
            </Select>
            <Select placeholder="time ※1分単位の正確な動作は保証されません"
             size="sm" bg="white"  mb="10px" value={sendingAtMi} onChange={saMiChange} >
              <option value="0">0</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </Select>
  
            <Center><Button color="red.400" bg="white" size="xs" onClick={onSent}>reserve</Button></Center>
  
            <Box textAlign="right">
              <Link href="https://github.com/kisihara-c" isExternal>
                <IconButton aria-label="twitter link"
                  icon={<ExternalLinkIcon />} bg="red.100" color="white" textAlign="center" size="sm"/>
              </Link>
            </Box>
  
          </Box>
        </Center>
      </Box>
    )

  }
}
