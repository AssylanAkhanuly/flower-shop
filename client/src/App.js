import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { Suspense, useEffect, useRef, useState } from "react";
import { EnvironmentMap, OrbitControls, useProgress } from "@react-three/drei";
import { gsap } from "gsap";

import { Scene } from "./components/Scene";
import { Bouquet } from "./components/Bouquet";

import axios from "axios";
import ProductList from "./components/ProductList/ProductList";
import CameraControl from "./components/CameraControl";
import Sidebar from "./components/Sidebar/Sidebar";
import Tray from "./components/Tray/Tray";
import { BouquetBox } from "./components/BouquetBox";
import Arrow from "./components/Arrow/Arrow";
import Loader from "./components/Loader/Loader";
function App() {
  axios.defaults.baseURL = "https://flower-shop-l3um.onrender.com/";
  const orbitRef = useRef();
  const canvasRef = useRef();
  const instructionRef = useRef();
  const { progress } = useProgress();
  

  const [user, setUser] = useState();

  const [started, setStarted] = useState(false);
  const [shopVisible, setShopVisible] = useState(true);
  const [bouquetVisible, setBouquetVisible] = useState(false);
  const [sceneVisible, setSceneVisible] = useState(true);
  const [state, setState] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [productListVisible, setProductListVisible] = useState(false);
  const [currentCategory, setCurrentCategory] = useState();
  const [trayVisible, setTrayVisible] = useState(false);
  const [move, setMove] = useState(0);

  useEffect(() => {
    try {
      const storage = JSON.parse(localStorage.getItem("user"))
      if(storage) setUser(storage)
      console.log(storage)
    } catch(e) {
      console.log("Unable to get the user")
    }
  }, [])
  const Switch = ({ initialRef, finalRef }) => {
    if (initialRef)
      gsap.to(initialRef, {
        opacity: "0",
        display: "none",
        duration: 2,
        ease: "power3.inOut",
      });
    if (finalRef)
      gsap.to(finalRef, {
        opacity: "1",
        display: "flex",
        duration: 2,
        ease: "power3.inOut",
      });
  };

  useEffect(() => {
    if(progress === 100) {
        setShopVisible(false);
        setState(1);
        setStarted(true);
        setBouquetVisible(true);
        setSceneVisible(true);
    }
  }, [progress])

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Canvas
          ref={canvasRef}
          style={{ background: "#e6d1b6" }}
          dpr={[1, 2]}
          camera={{ fov: 50, position: [40, 10, -5], far: 4000 }}
        >
          <pointLight
            intensity={0.8}
            position={[0, 7, 0]}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <EnvironmentMap preset="city"/>
          <CameraControl controlsRef={orbitRef} state={state} />
            <OrbitControls
              enableZoom={false}
              enableRotate={false}
              target={[-10, 5, 4]}
              ref={orbitRef}
            />
            <Bouquet
              move={move}
              setMove={setMove}
              setCurrentCategory={setCurrentCategory}
              setState={setState}
              setProductListVisible={setProductListVisible}
              bouquetVisible={bouquetVisible}
              orbitRef={orbitRef}
              position={[-8, 3.5, 2.5]}
            />
            <Scene
              scale={[0.08,0.08,0.08]}
              rotation={[0,-1.8,0]}
              orbitRef={orbitRef}
              sceneVisible={sceneVisible}
              canvasRef={canvasRef}
              position={[-5, 0, 4]}
            />
            <BouquetBox
              setCurrentCategory={setCurrentCategory}
              setState={setState}
              setProductListVisible={setProductListVisible}
              move={move}
              setMove={setMove}
              scale={[1.3, 1.3, 1.3]}
              position={[-9, 4.5, 22.5]}
            />
        </Canvas>
      </Suspense>
      {started && (
        progress === 100 &&
        <>
          <Sidebar
            setTrayVisible={setTrayVisible}
            selectedItems={selectedItems}
          />
          <Arrow
            onClick={() => {
              setMove(0);
            }}
            transform="rotate(180deg)"
            left={"70px"}
            top={"50%"}
          />
          <Arrow
            onClick={() => {
              setMove(1);
            }}
            left={"calc(100% - 85px)"}
            top={"50%"}
          />
        </>
      )}
      {selectedItems && (
        <ProductList
          setSelectedItems={setSelectedItems}
          currentCategory={currentCategory}
          setState={setState}
          setProductListVisible={setProductListVisible}
          productListVisible={productListVisible}
        />
      )}

      {trayVisible && (
        <Tray
          setSelectedItems={setSelectedItems}
          user={user}
          trayVisible={trayVisible}
          Switch={Switch}
          setTrayVisible={setTrayVisible}
          selectedItems={selectedItems}
        />
      )}
    </div>
  );
}

export default App;
