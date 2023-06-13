import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css"
import { Suspense, useEffect, useRef, useState } from "react";
import { Shop } from "./components/Shop";
import { EnvironmentMap, OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";

import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import LoadingPage from "./components/Loader/Loader";
import { Scene } from "./components/Scene";
import { Bouquet } from "./components/Bouquet";
import { EffectComposer, Outline, Selection } from "@react-three/postprocessing";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import axios from 'axios'
import ProductList from "./components/ProductList/ProductList";
import { Route, Routes } from "react-router-dom";
import CameraControl from "./components/CameraControl";
import Sidebar from "./components/Sidebar/Sidebar";
import Tray from "./components/Tray/Tray";
function App() {
  axios.defaults.baseURL = 'http://localhost:3001';
  const orbitRef = useRef()
  const startButtonRef = useRef();
  const canvasRef = useRef();
  const instructionRef = useRef();
  const shopRef = useRef();
  // const instruction = [
  //   {
  //     imgSrc: "/assets/instruction-1.gif",
  //     title: "How to navigate in the shop",
  //     desc: "Use your mouse and click on the right/left buttons to switch and explore  all modules and innovations. You can also us the menu button if you are lost!",
  //   },
  //   {
  //     imgSrc: "/assets/instruction-2.gif",
  //     title: "Interact with innovations",
  //     desc: "Don't miss out on innovations by playing with 3D and AR models, scrolling through images and playing videos.",
  //   },
  //   {
  //     imgSrc: "/assets/instruction-3.gif",
  //     title: "",
  //     desc: "Feel free to share to your colleagues and encourage  all these great innovations!",
  //   },
  // ]
  
  const [user, setUser] = useState()

 
  // const [instructionIndex, setInstructionIndex] = useState(0)
  const [started, setStarted] = useState(false)
  const [shopVisible, setShopVisible] = useState(true)
  const [bouquetVisible, setBouquetVisible] = useState(false);
  const [sceneVisible, setSceneVisible] = useState(false)
  const [state, setState] = useState(0)
  const [selectedItems, setSelectedItems] = useState([])
  const [productListVisible, setProductListVisible] = useState(false)
  const [currentCategory, setCurrentCategory] = useState();
  const [trayVisible, setTrayVisible] = useState(false);
 
  // const [cameraReset, setCameraReset] = useState(false)
  // const [selectedItems, setSelectedItems] = useState()
  // useEffect(() => {
  //   if(!instruction[instructionIndex]) instructionRef.current.classList.toggle('closed')
  // }, [instructionIndex])

  // useEffect(() => {
  //   try {
  //     const storage = JSON.parse(localStorage.getItem("user"))
  //     if(storage) setUser(storage)
  //     console.log(storage)
  //   } catch(e) {
  //     console.log("Unable to get the user")
  //   }
  // }, [])
  const Switch = ({initialRef, finalRef}) => {
     if(initialRef) gsap.to(initialRef, {
      opacity: '0',
      display: "none",
      duration: 2,
      ease: "power3.inOut",
      
    })
    if(finalRef) gsap.to(finalRef, {
      opacity: '1',
      display: "flex",
      duration: 2,
      ease: "power3.inOut",
    })
  }

  const Enter = () => {
    setShopVisible(false)
    setState(1)
    gsap.to(canvasRef.current.style, {
      background: "#000",
      duration: 2,
      onComplete: () => {
        gsap.to(canvasRef.current.style, {
          background: "#e6d1b6",
          duration: 2,
        })
        setStarted(true)
        setBouquetVisible(true)
        setSceneVisible(true)
      }
    })
  }
  return (
    <div className="App">

    <Canvas ref={canvasRef} style={{ background: "#e6d1b6" }}  dpr={[1, 2]} camera={{ fov: 50, position: [40,10,-5], far:4000 }}>
      <directionalLight
        intensity={0.8}
        position={[5,4,5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      /> 

      <CameraControl state={state}/>
      
      { !started ? <Suspense fallback={null}>
        <Shop shopVisible={shopVisible}  position={[0 ,0,0]} orbitRef={orbitRef}/>
        <OrbitControls enableZoom={false} enableRotate={false}  target={[-10, 5, 4]}  ref={orbitRef} />
      </Suspense> 
      :
      <Suspense fallback={null}>
          <OrbitControls enableZoom={false} enableRotate={false}  target={[-10, 5, 4]}  ref={orbitRef} />
          <Bouquet setCurrentCategory={setCurrentCategory} setState={setState} setProductListVisible={setProductListVisible} bouquetVisible={bouquetVisible} orbitRef={orbitRef} position={[-10 ,3,6]} />
          <Scene orbitRef={orbitRef} sceneVisible={sceneVisible} canvasRef={canvasRef}  position={[-10 ,2,5]} />
      </Suspense>}

      
    </Canvas> 
    {
      !started ? <button onClick={(e) => Enter()} className="primary-button start-button">  Enter  </button> :
      <Sidebar setTrayVisible={setTrayVisible} selectedItems={selectedItems}/>
    }
     {
      selectedItems && <ProductList setSelectedItems={setSelectedItems} currentCategory={currentCategory} setState={setState} setProductListVisible={setProductListVisible} productListVisible={productListVisible} />
    }
    {/*
    <button onClick={() => !user && Switch({finalRef: ".login-page"})} className="blue-button order-button">Order</button>
    <div ref={instructionRef} className="white-popup closed">
      <img className="gif" src={instruction[instructionIndex]?.imgSrc} alt="error"/>
      <h2>{instruction[instructionIndex]?.title}</h2>
      <p>{instruction[instructionIndex]?.desc}</p>
      <button onClick={() => setInstructionIndex(instructionIndex+1)} className="primary-button">Next</button>
      <button onClick={() => instructionRef.current.classList.toggle("closed")} className="secondary-button skip-button">Skip</button>
    </div>

    

    <Register setUser={setUser} Switch={Switch} />
    <Login user={user} setUser={setUser} Switch={Switch} /> */}
    {
      trayVisible && <Tray user={user} trayVisible={trayVisible} Switch={Switch} setTrayVisible={setTrayVisible} selectedItems={selectedItems} />
    }
    </div>
  );
}

export default App;
