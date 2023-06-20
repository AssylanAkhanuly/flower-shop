import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import {
  EffectComposer,
  Outline,
  Select,
  Selection,
} from "@react-three/postprocessing";
import { gsap } from "gsap";
import { useThree } from "@react-three/fiber";

export function BouquetBox(props) {
  const { nodes, materials } = useGLTF("/GLTFs/BouquetBox.gltf");
  const {
    setState,
    bouquetBoxVisible,
    move,
    setMove,
    setCurrentCategory,
    setProductListVisible,
  } = props;
  const [outline, setOutline] = useState(false);
  const bouquetBoxRef = useRef();
  const { scene } = useThree();
  useEffect(() => {
    let dir = 20;
    if (!move) dir = -20;
    if (bouquetBoxRef.current)
      gsap.to(bouquetBoxRef.current.position, {
        z: bouquetBoxRef.current.position.z + dir,
        duration: 2,
        ease: "power3.inOut",
      });
  }, [move]);

  return (
    <Selection>
      <EffectComposer multisampling={8} autoClear={false}>
        <Outline blur visibleEdgeColor="white" edgeStrength={10} width={500} />
      </EffectComposer>
      <group
        ref={bouquetBoxRef}
        onClick={() => {
          setState(2);
          setProductListVisible(true);
          setCurrentCategory("bouquetBox");
        }}
        {...props}
        dispose={null}
        onPointerOver={() => setOutline(true)}
        onPointerOut={() => setOutline(false)}
      >
        <Select enabled={outline}>
          <group dispose={null}>
            <group
              position={[0.143, -0.628, -0.841]}
              rotation={[2.539, 0.52, 0.078]}
              scale={[-0.001, -0.002, -0.001]}
            >
              <mesh
                geometry={nodes.Mesh003.geometry}
                material={materials["Lilac 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh003_1.geometry}
                material={materials["Lilac 050119 4"]}
              />
              <mesh
                geometry={nodes.Mesh003_2.geometry}
                material={materials["Lilac 090119 12.001"]}
              />
            </group>
            <group
              position={[0.465, 1.53, 0.606]}
              rotation={[-2.219, 0.563, -2.25]}
              scale={0.006}
            >
              <mesh
                geometry={nodes.Mesh004.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119"]}
              />
              <mesh
                geometry={nodes.Mesh004_1.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
              <mesh
                geometry={nodes.Mesh004_2.geometry}
                material={materials["TEXTURE STVOL Bouquet Paeonia 2905"]}
              />
            </group>
            <group
              position={[0.324, 1.675, 0.026]}
              rotation={[-0.746, 0.999, 0.628]}
              scale={0.009}
            >
              <mesh
                geometry={nodes.Mesh005.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119"]}
              />
              <mesh
                geometry={nodes.Mesh005_1.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
              <mesh
                geometry={nodes.Mesh005_2.geometry}
                material={materials["TEXTURE STVOL Bouquet Paeonia 2905"]}
              />
            </group>
            <group
              position={[0.321, 0.821, -0.475]}
              rotation={[-2.589, 1.366, 2.032]}
              scale={0.008}
            >
              <mesh
                geometry={nodes.Mesh006.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
              <mesh
                geometry={nodes.Mesh006_1.geometry}
                material={materials["TEXTURE STVOL Bouquet Paeonia 2905"]}
              />
              <mesh
                geometry={nodes.Mesh006_2.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119 2 "]}
              />
            </group>
            <group
              position={[0.523, 1.196, 0.73]}
              rotation={[-0.014, 0.657, -0.07]}
              scale={0.008}
            >
              <mesh
                geometry={nodes.Mesh007.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119"]}
              />
              <mesh
                geometry={nodes.Mesh007_1.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
              <mesh
                geometry={nodes.Mesh007_2.geometry}
                material={materials["TEXTURE STVOL Bouquet Paeonia 2905"]}
              />
            </group>
            <group
              position={[0.12, 1.343, -0.63]}
              rotation={[-2.846, 1.124, 2.647]}
              scale={0.008}
            >
              <mesh
                geometry={nodes.Mesh008.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119 8"]}
              />
              <mesh
                geometry={nodes.Mesh008_1.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
              <mesh
                geometry={nodes.Mesh008_2.geometry}
                material={materials["TEXTURE STVOL Bouquet Paeonia 2905"]}
              />
            </group>
            <group
              position={[0.45, 1.524, -0.463]}
              rotation={[-1.128, 0.793, 0.496]}
              scale={0.008}
            >
              <mesh
                geometry={nodes.Mesh009.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119 8"]}
              />
              <mesh
                geometry={nodes.Mesh009_1.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
              <mesh
                geometry={nodes.Mesh009_2.geometry}
                material={materials["TEXTURE STVOL Bouquet Paeonia 2905"]}
              />
            </group>
            <group
              position={[0.65, 1.39, 0.026]}
              rotation={[2.748, 0.753, -1.782]}
              scale={0.01}
            >
              <mesh
                geometry={nodes.Mesh010.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119 8"]}
              />
              <mesh
                geometry={nodes.Mesh010_1.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
              <mesh
                geometry={nodes.Mesh010_2.geometry}
                material={materials["TEXTURE STVOL Bouquet Paeonia 2905"]}
              />
            </group>
            <group
              position={[0.539, 1.208, 0.409]}
              rotation={[-1.754, 0.048, -1.629]}
              scale={0.008}
            >
              <mesh
                geometry={nodes.Mesh011.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119 8"]}
              />
              <mesh
                geometry={nodes.Mesh011_1.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
              <mesh
                geometry={nodes.Mesh011_2.geometry}
                material={materials["TEXTURE STVOL Bouquet Paeonia 2905"]}
              />
            </group>
            <group
              position={[-0.864, 1.533, -0.034]}
              rotation={[0.769, -0.677, 1.989]}
              scale={0.011}
            >
              <mesh
                geometry={nodes.Mesh012.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119"]}
              />
              <mesh
                geometry={nodes.Mesh012_1.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
              <mesh
                geometry={nodes.Mesh012_2.geometry}
                material={materials["TEXTURE STVOL Bouquet Paeonia 2905"]}
              />
            </group>
            <group
              position={[-0.544, 1.839, 0.224]}
              rotation={[-2.602, -1.113, -3.065]}
              scale={0.009}
            >
              <mesh
                geometry={nodes.Mesh013.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119 8"]}
              />
              <mesh
                geometry={nodes.Mesh013_1.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
              <mesh
                geometry={nodes.Mesh013_2.geometry}
                material={materials["TEXTURE STVOL Bouquet Paeonia 2905"]}
              />
            </group>
            <mesh
              geometry={nodes.Paeonia_petals003.geometry}
              material={materials["TEXTURE Bouquet Paeonia 090119"]}
              position={[0.358, 0.567, -0.048]}
              rotation={[2.137, 0.481, -1.725]}
              scale={0.007}
            />
            <group
              position={[-0.117, 0.935, 0.895]}
              rotation={[0.875, -0.58, 0.068]}
              scale={0.003}
            >
              <mesh
                geometry={nodes.Mesh015.geometry}
                material={materials["oleander 260119 FLOWER "]}
              />
              <mesh
                geometry={nodes.Mesh015_1.geometry}
                material={materials["oleander 230119 FLOWER 3"]}
              />
              <mesh
                geometry={nodes.Mesh015_2.geometry}
                material={materials["oleander 230119 FLOWER 2"]}
              />
              <mesh
                geometry={nodes.Mesh015_3.geometry}
                material={materials["oleander 210119   STVOL112"]}
              />
            </group>
            <group
              position={[-0.507, 0.42, 0.223]}
              rotation={[-2.166, 0.295, 2.472]}
              scale={[-0.006, -0.006, -0.008]}
            >
              <mesh
                geometry={nodes.Mesh016.geometry}
                material={materials["oleander 260119 1"]}
              />
              <mesh
                geometry={nodes.Mesh016_1.geometry}
                material={materials["oleander 260119  BACK"]}
              />
              <mesh
                geometry={nodes.Mesh016_2.geometry}
                material={materials["oleander 210119   STVOL112"]}
              />
            </group>
            <group
              position={[-0.485, 0.535, 0.194]}
              rotation={[-1.656, 0.954, -0.69]}
              scale={[-0.006, -0.006, -0.008]}
            >
              <mesh
                geometry={nodes.Mesh017.geometry}
                material={materials["oleander 260119 1"]}
              />
              <mesh
                geometry={nodes.Mesh017_1.geometry}
                material={materials["oleander 260119  BACK"]}
              />
              <mesh
                geometry={nodes.Mesh017_2.geometry}
                material={materials["oleander 210119   STVOL112"]}
              />
            </group>
            <group
              position={[-0.224, 1.606, -0.737]}
              rotation={[-0.834, -0.204, 0.313]}
              scale={0.003}
            >
              <mesh
                geometry={nodes.Mesh018.geometry}
                material={materials["oleander 260119 FLOWER "]}
              />
              <mesh
                geometry={nodes.Mesh018_1.geometry}
                material={materials["oleander 230119 FLOWER 3"]}
              />
              <mesh
                geometry={nodes.Mesh018_2.geometry}
                material={materials["oleander 230119 FLOWER 2"]}
              />
              <mesh
                geometry={nodes.Mesh018_3.geometry}
                material={materials["oleander 210119   STVOL112"]}
              />
            </group>
            <group
              position={[-0.15, 0.51, 0.134]}
              rotation={[-2.091, -0.683, 1.544]}
              scale={[-0.006, -0.006, -0.008]}
            >
              <mesh
                geometry={nodes.Mesh019.geometry}
                material={materials["oleander 260119 1"]}
              />
              <mesh
                geometry={nodes.Mesh019_1.geometry}
                material={materials["oleander 260119  BACK"]}
              />
              <mesh
                geometry={nodes.Mesh019_2.geometry}
                material={materials["oleander 210119   STVOL112"]}
              />
            </group>
            <group
              position={[-0.622, 1.833, 0.58]}
              rotation={[0.271, 0.377, 0.591]}
              scale={0.002}
            >
              <mesh
                geometry={nodes.Mesh020.geometry}
                material={materials["oleander 260119 FLOWER "]}
              />
              <mesh
                geometry={nodes.Mesh020_1.geometry}
                material={materials["oleander 230119 FLOWER 3"]}
              />
              <mesh
                geometry={nodes.Mesh020_2.geometry}
                material={materials["oleander 230119 FLOWER 2"]}
              />
              <mesh
                geometry={nodes.Mesh020_3.geometry}
                material={materials["oleander 210119   STVOL112"]}
              />
            </group>
            <group
              position={[0.605, 0.903, 0.115]}
              rotation={[0.798, 0.279, -0.889]}
              scale={0.003}
            >
              <mesh
                geometry={nodes.Mesh021.geometry}
                material={materials["oleander 260119 FLOWER "]}
              />
              <mesh
                geometry={nodes.Mesh021_1.geometry}
                material={materials["oleander 230119 FLOWER 3"]}
              />
              <mesh
                geometry={nodes.Mesh021_2.geometry}
                material={materials["oleander 230119 FLOWER 2"]}
              />
              <mesh
                geometry={nodes.Mesh021_3.geometry}
                material={materials["oleander 210119   STVOL112"]}
              />
            </group>
            <group
              position={[0.056, 1.504, -0.462]}
              rotation={[-0.966, -0.217, -0.323]}
              scale={0.003}
            >
              <mesh
                geometry={nodes.Mesh022.geometry}
                material={materials["oleander 260119 FLOWER "]}
              />
              <mesh
                geometry={nodes.Mesh022_1.geometry}
                material={materials["oleander 230119 FLOWER 3"]}
              />
              <mesh
                geometry={nodes.Mesh022_2.geometry}
                material={materials["oleander 230119 FLOWER 2"]}
              />
              <mesh
                geometry={nodes.Mesh022_3.geometry}
                material={materials["oleander 210119   STVOL112"]}
              />
            </group>
            <group
              position={[0.606, 0.733, -0.091]}
              rotation={[0.388, 0.253, -1.236]}
              scale={0.003}
            >
              <mesh
                geometry={nodes.Mesh023.geometry}
                material={materials["oleander 260119 FLOWER "]}
              />
              <mesh
                geometry={nodes.Mesh023_1.geometry}
                material={materials["oleander 230119 FLOWER 3"]}
              />
              <mesh
                geometry={nodes.Mesh023_2.geometry}
                material={materials["oleander 230119 FLOWER 2"]}
              />
              <mesh
                geometry={nodes.Mesh023_3.geometry}
                material={materials["oleander 210119   STVOL112"]}
              />
            </group>
            <group
              position={[-0.538, 0.842, 0.661]}
              rotation={[2.427, -1.04, 1.66]}
              scale={0.002}
            >
              <mesh
                geometry={nodes.Mesh024.geometry}
                material={materials["oleander 260119 FLOWER "]}
              />
              <mesh
                geometry={nodes.Mesh024_1.geometry}
                material={materials["oleander 230119 FLOWER 3"]}
              />
              <mesh
                geometry={nodes.Mesh024_2.geometry}
                material={materials["oleander 230119 FLOWER 2"]}
              />
              <mesh
                geometry={nodes.Mesh024_3.geometry}
                material={materials["oleander 210119   STVOL112"]}
              />
            </group>
            <group
              position={[0.305, 0.808, 0.566]}
              rotation={[1.213, -0.044, -0.683]}
              scale={0.003}
            >
              <mesh
                geometry={nodes.Mesh025.geometry}
                material={materials["oleander 260119 FLOWER "]}
              />
              <mesh
                geometry={nodes.Mesh025_1.geometry}
                material={materials["oleander 230119 FLOWER 3"]}
              />
              <mesh
                geometry={nodes.Mesh025_2.geometry}
                material={materials["oleander 230119 FLOWER 2"]}
              />
              <mesh
                geometry={nodes.Mesh025_3.geometry}
                material={materials["oleander 210119   STVOL112"]}
              />
            </group>
            <group
              position={[0.594, 1.06, -0.487]}
              rotation={[-0.796, 0.014, -0.739]}
              scale={0.003}
            >
              <mesh
                geometry={nodes.Mesh026.geometry}
                material={materials["oleander 260119 FLOWER "]}
              />
              <mesh
                geometry={nodes.Mesh026_1.geometry}
                material={materials["oleander 230119 FLOWER 3"]}
              />
              <mesh
                geometry={nodes.Mesh026_2.geometry}
                material={materials["oleander 230119 FLOWER 2"]}
              />
              <mesh
                geometry={nodes.Mesh026_3.geometry}
                material={materials["oleander 210119   STVOL112"]}
              />
            </group>
            <group
              position={[-1.093, 1.047, -0.169]}
              rotation={[-2.536, -0.541, 2.312]}
              scale={0.012}
            >
              <mesh
                geometry={nodes.Mesh027.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119 8"]}
              />
              <mesh
                geometry={nodes.Mesh027_1.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
              <mesh
                geometry={nodes.Mesh027_2.geometry}
                material={materials["TEXTURE STVOL Bouquet Paeonia 2905"]}
              />
            </group>
            <group
              position={[-0.16, 0.398, -0.202]}
              rotation={[-1.777, 0.89, 0.246]}
              scale={[-0.006, -0.006, -0.008]}
            >
              <mesh
                geometry={nodes.Mesh028.geometry}
                material={materials["oleander 260119 1"]}
              />
              <mesh
                geometry={nodes.Mesh028_1.geometry}
                material={materials["oleander 260119  BACK"]}
              />
              <mesh
                geometry={nodes.Mesh028_2.geometry}
                material={materials["oleander 210119   STVOL112"]}
              />
            </group>
            <group
              position={[-0.063, 1.405, 0.939]}
              rotation={[-0.513, 0.926, 1.468]}
              scale={0.009}
            >
              <mesh
                geometry={nodes.Mesh029.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119"]}
              />
              <mesh
                geometry={nodes.Mesh029_1.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
            </group>
            <group
              position={[-0.149, 0.468, 0.13]}
              rotation={[-2.835, 0.278, -1.081]}
              scale={[-0.006, -0.006, -0.008]}
            >
              <mesh
                geometry={nodes.Mesh030.geometry}
                material={materials["oleander 260119 1"]}
              />
              <mesh
                geometry={nodes.Mesh030_1.geometry}
                material={materials["oleander 260119  BACK"]}
              />
              <mesh
                geometry={nodes.Mesh030_2.geometry}
                material={materials["oleander 210119   STVOL112"]}
              />
            </group>
            <group
              position={[-0.425, 0.433, -0.094]}
              rotation={[-1.399, -1.012, 1.087]}
              scale={[-0.006, -0.006, -0.008]}
            >
              <mesh
                geometry={nodes.Mesh031.geometry}
                material={materials["oleander 260119 1"]}
              />
              <mesh
                geometry={nodes.Mesh031_1.geometry}
                material={materials["oleander 260119  BACK"]}
              />
              <mesh
                geometry={nodes.Mesh031_2.geometry}
                material={materials["oleander 210119   STVOL112"]}
              />
            </group>
            <group
              position={[-0.466, 0.654, -0.183]}
              rotation={[-2.157, 0.199, 0.931]}
              scale={[-0.006, -0.006, -0.008]}
            >
              <mesh
                geometry={nodes.Mesh032.geometry}
                material={materials["oleander 260119 1"]}
              />
              <mesh
                geometry={nodes.Mesh032_1.geometry}
                material={materials["oleander 260119  BACK"]}
              />
              <mesh
                geometry={nodes.Mesh032_2.geometry}
                material={materials["oleander 210119   STVOL112"]}
              />
            </group>
            <group
              position={[-0.173, 0.804, -0.182]}
              rotation={[0.877, 0.308, 2.809]}
              scale={[-0.006, -0.006, -0.008]}
            >
              <mesh
                geometry={nodes.Mesh033.geometry}
                material={materials["oleander 260119 1"]}
              />
              <mesh
                geometry={nodes.Mesh033_1.geometry}
                material={materials["oleander 260119  BACK"]}
              />
              <mesh
                geometry={nodes.Mesh033_2.geometry}
                material={materials["oleander 210119   STVOL112"]}
              />
            </group>
            <group
              position={[-1.014, 0.844, -0.052]}
              rotation={[0.295, -0.735, 1.688]}
              scale={0.01}
            >
              <mesh
                geometry={nodes.Mesh034.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119"]}
              />
              <mesh
                geometry={nodes.Mesh034_1.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
              <mesh
                geometry={nodes.Mesh034_2.geometry}
                material={materials["TEXTURE STVOL Bouquet Paeonia 2905"]}
              />
            </group>
            <group
              position={[0.166, 1.141, 1.173]}
              rotation={[1.81, 0.457, -0.826]}
              scale={0.003}
            >
              <mesh
                geometry={nodes.Mesh035.geometry}
                material={materials["oleander 260119 FLOWER "]}
              />
              <mesh
                geometry={nodes.Mesh035_1.geometry}
                material={materials["oleander 230119 FLOWER 3"]}
              />
              <mesh
                geometry={nodes.Mesh035_2.geometry}
                material={materials["oleander 230119 FLOWER 2"]}
              />
              <mesh
                geometry={nodes.Mesh035_3.geometry}
                material={materials["oleander 210119   STVOL112"]}
              />
            </group>
            <group
              position={[-0.779, 0.908, -1.064]}
              rotation={[2.69, 0.134, 2.581]}
              scale={0.011}
            >
              <mesh
                geometry={nodes.Mesh036.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119 8"]}
              />
              <mesh
                geometry={nodes.Mesh036_1.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
              <mesh
                geometry={nodes.Mesh036_2.geometry}
                material={materials["TEXTURE STVOL Bouquet Paeonia 2905"]}
              />
            </group>
            <group
              position={[-0.837, 0.278, -0.578]}
              rotation={[1.067, -0.612, 3.101]}
              scale={0.009}
            >
              <mesh
                geometry={nodes.Mesh037.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119 8"]}
              />
              <mesh
                geometry={nodes.Mesh037_1.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
              <mesh
                geometry={nodes.Mesh037_2.geometry}
                material={materials["TEXTURE STVOL Bouquet Paeonia 2905"]}
              />
            </group>
            <group
              position={[-0.299, 1.017, -0.886]}
              rotation={[-2.373, 0.878, 1.986]}
              scale={0.011}
            >
              <mesh
                geometry={nodes.Mesh038.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119 8"]}
              />
              <mesh
                geometry={nodes.Mesh038_1.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
              <mesh
                geometry={nodes.Mesh038_2.geometry}
                material={materials["TEXTURE STVOL Bouquet Paeonia 2905"]}
              />
            </group>
            <group
              position={[0.298, 0.13, 0.777]}
              rotation={[-2.038, 0.691, -2.062]}
              scale={[0.006, 0.006, 0.008]}
            >
              <mesh
                geometry={nodes.Mesh039.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh039_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
              <mesh
                geometry={nodes.Mesh039_2.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119"]}
              />
              <mesh
                geometry={nodes.Mesh039_3.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
            </group>
            <group
              position={[0.067, 0.678, 1.282]}
              rotation={[0.687, 0.813, 0.945]}
              scale={0.007}
            >
              <mesh
                geometry={nodes.Mesh040.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119"]}
              />
              <mesh
                geometry={nodes.Mesh040_1.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
              <mesh
                geometry={nodes.Mesh040_2.geometry}
                material={materials["TEXTURE STVOL Bouquet Paeonia 2905"]}
              />
            </group>
            <group
              position={[-0.98, 0.388, 0.608]}
              rotation={[0.498, -0.05, 2.1]}
              scale={0.009}
            >
              <mesh
                geometry={nodes.Mesh041.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119 8"]}
              />
              <mesh
                geometry={nodes.Mesh041_1.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
              <mesh
                geometry={nodes.Mesh041_2.geometry}
                material={materials["TEXTURE STVOL Bouquet Paeonia 2905"]}
              />
            </group>
            <group
              position={[-0.123, 0.694, -0.962]}
              rotation={[2.248, 0.784, 2.995]}
              scale={0.009}
            >
              <mesh
                geometry={nodes.Mesh042.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119"]}
              />
              <mesh
                geometry={nodes.Mesh042_1.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
              <mesh
                geometry={nodes.Mesh042_2.geometry}
                material={materials["TEXTURE STVOL Bouquet Paeonia 2905"]}
              />
            </group>
            <group
              position={[0.553, 0.477, 0.295]}
              rotation={[2.445, 0.678, -0.749]}
              scale={0.007}
            >
              <mesh
                geometry={nodes.Mesh043.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119 8"]}
              />
              <mesh
                geometry={nodes.Mesh043_1.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
              <mesh
                geometry={nodes.Mesh043_2.geometry}
                material={materials["TEXTURE STVOL Bouquet Paeonia 2905"]}
              />
            </group>
            <group
              position={[0.572, 0.892, 0.9]}
              rotation={[0.243, 0.246, -0.544]}
              scale={0.007}
            >
              <mesh
                geometry={nodes.Mesh044.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119 2 "]}
              />
              <mesh
                geometry={nodes.Mesh044_1.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
              <mesh
                geometry={nodes.Mesh044_2.geometry}
                material={materials["TEXTURE STVOL Bouquet Paeonia 2905"]}
              />
            </group>
            <group
              position={[0.446, 0.821, 0.494]}
              rotation={[2.038, 1.136, -1.027]}
              scale={0.008}
            >
              <mesh
                geometry={nodes.Mesh045.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119 2 "]}
              />
              <mesh
                geometry={nodes.Mesh045_1.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
              <mesh
                geometry={nodes.Mesh045_2.geometry}
                material={materials["TEXTURE STVOL Bouquet Paeonia 2905"]}
              />
            </group>
            <group
              position={[-0.79, 1.088, 0.624]}
              rotation={[2.05, -1.515, 1.539]}
              scale={0.012}
            >
              <mesh
                geometry={nodes.Mesh046.geometry}
                material={materials["TEXTURE Bouquet Paeonia 090119 8"]}
              />
              <mesh
                geometry={nodes.Mesh046_1.geometry}
                material={materials["Texture Bouquet Paeonia 2905 leafe"]}
              />
              <mesh
                geometry={nodes.Mesh046_2.geometry}
                material={materials["TEXTURE STVOL Bouquet Paeonia 2905"]}
              />
            </group>
            <mesh
              geometry={nodes.Plane247.geometry}
              material={materials["GOLD Bouquet 260119"]}
              position={[0.409, -0.239, 0.034]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.081, 0.041, 0.073]}
            />
            <mesh
              geometry={nodes.Plane246.geometry}
              material={materials["260119 TEXTURE"]}
              position={[0.406, 0.014, 0.039]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.041, 0.041, 0.037]}
            />
            <group
              position={[0.282, -0.51, 0.723]}
              rotation={[0.542, 1.219, -1.395]}
              scale={[0.007, 0.011, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh049.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
              <mesh
                geometry={nodes.Mesh049_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[0.655, -0.5, 0.791]}
              rotation={[0.679, 0.31, -1.319]}
              scale={[0.01, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh050.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh050_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <mesh
              geometry={nodes.Plane037.geometry}
              material={materials["TEXTURE Hydrangea WHITE 090119"]}
              position={[0.532, -0.503, 0.514]}
              rotation={[0.529, -0.003, -0.312]}
              scale={[0.008, 0.01, 0.007]}
            />
            <group
              position={[-0.814, -0.503, 0.116]}
              rotation={[0.529, -0.003, -0.312]}
              scale={[0.008, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh052.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119"]}
              />
              <mesh
                geometry={nodes.Mesh052_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[0.428, -0.5, -0.368]}
              rotation={[0.679, 0.31, -1.319]}
              scale={[0.01, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh053.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh053_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[0.055, -0.51, -0.436]}
              rotation={[0.542, 1.219, -1.395]}
              scale={[0.007, 0.011, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh054.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
              <mesh
                geometry={nodes.Mesh054_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[0.304, -0.503, -0.645]}
              rotation={[0.529, -0.003, -0.312]}
              scale={[0.008, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh055.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119"]}
              />
              <mesh
                geometry={nodes.Mesh055_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[0.343, -0.5, 0.253]}
              rotation={[0.836, -0.634, -0.498]}
              scale={[0.01, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh056.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh056_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[0.561, -0.503, 0.042]}
              rotation={[1.046, -0.948, 0.638]}
              scale={[0.008, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh057.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119"]}
              />
              <mesh
                geometry={nodes.Mesh057_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[0.28, -0.51, -0.12]}
              rotation={[0.179, 0.044, -0.889]}
              scale={[0.007, 0.011, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh058.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
              <mesh
                geometry={nodes.Mesh058_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.667, -0.5, -0.018]}
              rotation={[0.836, -0.634, -0.498]}
              scale={[0.01, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh059.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh059_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.449, -0.503, -0.229]}
              rotation={[1.046, -0.948, 0.638]}
              scale={[0.008, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh060.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119"]}
              />
              <mesh
                geometry={nodes.Mesh060_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.731, -0.51, -0.391]}
              rotation={[0.179, 0.044, -0.889]}
              scale={[0.007, 0.011, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh061.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
              <mesh
                geometry={nodes.Mesh061_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.841, -0.5, 0.579]}
              rotation={[2.127, -0.79, 1.212]}
              scale={[0.01, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh062.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh062_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.568, -0.503, 0.712]}
              rotation={[2.491, -0.585, 2.43]}
              scale={[0.008, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh063.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119"]}
              />
              <mesh
                geometry={nodes.Mesh063_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.512, -0.51, 0.392]}
              rotation={[0.439, -1.14, -0.477]}
              scale={[0.007, 0.011, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh064.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
              <mesh
                geometry={nodes.Mesh064_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.277, -0.5, 0.661]}
              rotation={[2.478, -0.242, 1.879]}
              scale={[0.01, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh065.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh065_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.178, -0.503, 0.947]}
              rotation={[2.61, 0.078, 2.874]}
              scale={[0.008, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh066.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119"]}
              />
              <mesh
                geometry={nodes.Mesh066_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[0.089, -0.51, 0.761]}
              rotation={[2.7, -1.142, 1.855]}
              scale={[0.007, 0.011, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh067.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
              <mesh
                geometry={nodes.Mesh067_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.541, -0.5, -0.462]}
              rotation={[2.127, -0.79, 1.212]}
              scale={[0.01, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh068.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh068_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.268, -0.503, -0.329]}
              rotation={[2.491, -0.585, 2.43]}
              scale={[0.008, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh069.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119"]}
              />
              <mesh
                geometry={nodes.Mesh069_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <mesh
              geometry={nodes.Plane192.geometry}
              material={materials["TEXTURE Hydrangea 090119 2"]}
              position={[-0.212, -0.51, -0.649]}
              rotation={[0.439, -1.14, -0.477]}
              scale={[0.007, 0.011, 0.007]}
            />
            <group
              position={[0.564, -0.5, -0.55]}
              rotation={[2.043, 0.835, 3.032]}
              scale={[0.01, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh071.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh071_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[0.287, -0.503, -0.426]}
              rotation={[1.565, 1.041, -1.878]}
              scale={[0.008, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh072.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119"]}
              />
              <mesh
                geometry={nodes.Mesh072_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[0.496, -0.51, -0.177]}
              rotation={[2.955, 0.299, 2.317]}
              scale={[0.007, 0.011, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh073.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
              <mesh
                geometry={nodes.Mesh073_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[0.386, -0.5, 0.1]}
              rotation={[2.043, 0.835, 3.032]}
              scale={[0.01, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh074.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh074_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.749, -0.503, -0.147]}
              rotation={[1.565, 1.041, -1.878]}
              scale={[0.008, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh075.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119"]}
              />
              <mesh
                geometry={nodes.Mesh075_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.67, -0.51, 0.267]}
              rotation={[2.955, 0.299, 2.317]}
              scale={[0.007, 0.011, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh076.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
              <mesh
                geometry={nodes.Mesh076_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.502, -0.5, -0.361]}
              rotation={[2.043, 0.835, 3.032]}
              scale={[0.01, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh077.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh077_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.376, -0.503, -0.538]}
              rotation={[1.565, 1.041, -1.878]}
              scale={[0.008, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh078.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119"]}
              />
              <mesh
                geometry={nodes.Mesh078_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.678, -0.51, -0.538]}
              rotation={[2.955, 0.299, 2.317]}
              scale={[0.007, 0.011, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh079.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
              <mesh
                geometry={nodes.Mesh079_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.521, -0.5, 0.693]}
              rotation={[2.043, 0.835, 3.032]}
              scale={[0.01, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh080.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh080_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.395, -0.503, 0.516]}
              rotation={[1.565, 1.041, -1.878]}
              scale={[0.008, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh081.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119"]}
              />
              <mesh
                geometry={nodes.Mesh081_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.503, -0.5, 0.047]}
              rotation={[2.127, -0.79, 1.212]}
              scale={[0.01, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh082.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh082_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[0.143, -0.503, -0.205]}
              rotation={[1.565, 1.041, -1.878]}
              scale={[0.008, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh083.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119"]}
              />
              <mesh
                geometry={nodes.Mesh083_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.053, -0.51, -0.308]}
              rotation={[2.955, 0.299, 2.317]}
              scale={[0.007, 0.011, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh084.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
              <mesh
                geometry={nodes.Mesh084_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.05, -0.5, -0.593]}
              rotation={[0.836, -0.634, -0.498]}
              scale={[0.01, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh085.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh085_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[0.348, -0.51, 0.55]}
              rotation={[2.955, 0.299, 2.317]}
              scale={[0.007, 0.011, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh086.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
              <mesh
                geometry={nodes.Mesh086_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[0.656, -0.5, 0.499]}
              rotation={[0.836, -0.634, -0.498]}
              scale={[0.01, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh087.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh087_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[0.505, -0.51, 0.281]}
              rotation={[0.542, 1.219, -1.395]}
              scale={[0.007, 0.011, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh088.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
              <mesh
                geometry={nodes.Mesh088_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.495, -0.51, 0.25]}
              rotation={[0.542, 1.219, -1.395]}
              scale={[0.007, 0.011, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh089.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
              <mesh
                geometry={nodes.Mesh089_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.562, -0.51, -0.74]}
              rotation={[0.542, 1.219, -1.395]}
              scale={[0.007, 0.011, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh090.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
              <mesh
                geometry={nodes.Mesh090_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[0.362, -0.503, 0.961]}
              rotation={[0.529, -0.003, -0.312]}
              scale={[0.008, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh091.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119"]}
              />
              <mesh
                geometry={nodes.Mesh091_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[0.612, -0.5, -0.36]}
              rotation={[0.836, -0.634, -0.498]}
              scale={[0.01, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh092.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh092_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[0.479, -0.51, -0.75]}
              rotation={[2.955, 0.299, 2.317]}
              scale={[0.007, 0.011, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh093.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
              <mesh
                geometry={nodes.Mesh093_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[0.753, -0.51, -0.49]}
              rotation={[0.542, 1.219, -1.395]}
              scale={[0.007, 0.011, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh094.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
              <mesh
                geometry={nodes.Mesh094_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[0.707, -0.51, 0]}
              rotation={[0.542, 1.219, -1.395]}
              scale={[0.007, 0.011, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh095.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
              <mesh
                geometry={nodes.Mesh095_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.177, -0.5, -0.504]}
              rotation={[2.043, 0.835, 3.032]}
              scale={[0.01, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh096.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh096_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.128, -0.51, -0.824]}
              rotation={[2.955, 0.299, 2.317]}
              scale={[0.007, 0.011, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh097.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
              <mesh
                geometry={nodes.Mesh097_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[0.119, -0.503, -0.792]}
              rotation={[0.529, -0.003, -0.312]}
              scale={[0.008, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh098.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119"]}
              />
              <mesh
                geometry={nodes.Mesh098_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.947, -0.51, -0.184]}
              rotation={[2.955, 0.299, 2.317]}
              scale={[0.007, 0.011, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh099.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
              <mesh
                geometry={nodes.Mesh099_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.688, -0.5, 0.426]}
              rotation={[0.836, -0.634, -0.498]}
              scale={[0.01, 0.01, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh100.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh100_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.882, -0.51, 0.347]}
              rotation={[0.439, -1.14, -0.477]}
              scale={[0.007, 0.011, 0.007]}
            >
              <mesh
                geometry={nodes.Mesh101.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
              <mesh
                geometry={nodes.Mesh101_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
            </group>
            <group
              position={[-0.286, 2.061, 0.391]}
              rotation={[2.882, 0.547, 2.632]}
              scale={[0.008, 0.009, 0.012]}
            >
              <mesh
                geometry={nodes.Mesh102.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh102_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
              <mesh
                geometry={nodes.Mesh102_2.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119"]}
              />
              <mesh
                geometry={nodes.Mesh102_3.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
            </group>
            <mesh
              geometry={nodes.Cylinder003.geometry}
              material={materials["Lilium Hydrangea  Stvol 2"]}
              position={[-0.042, 0.243, 0.181]}
              rotation={[-0.036, -0.842, -0.029]}
              scale={0.055}
            />
            <group
              position={[-0.785, 2.125, -0.443]}
              rotation={[-0.938, -1.11, 1.515]}
              scale={-0.001}
            >
              <mesh
                geometry={nodes.Mesh104.geometry}
                material={materials["Lilac 090119 12.001"]}
              />
              <mesh
                geometry={nodes.Mesh104_1.geometry}
                material={materials["Lilac 050119 4.002"]}
              />
            </group>
            <mesh
              geometry={nodes.branch_014.geometry}
              material={materials["Lilac 050119  Stvol 2"]}
              position={[-0.482, 1.181, -0.171]}
              rotation={[1.24, 0.248, -0.071]}
              scale={[0.006, 0.006, 0.017]}
            />
            <mesh
              geometry={nodes.Cylinder012.geometry}
              material={materials["Lilium Hydrangea  Stvol 2"]}
              position={[0.11, 1.15, 0.115]}
              rotation={[-1.697, 0.505, 0.773]}
              scale={0.04}
            />
            <group
              position={[-0.567, 1.702, -0.894]}
              rotation={[1.048, -0.578, 1.487]}
              scale={[0.006, 0.007, 0.009]}
            >
              <mesh
                geometry={nodes.Mesh107.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh107_1.geometry}
                material={materials["TEXTURE Lilium 2506 7"]}
              />
              <mesh
                geometry={nodes.Mesh107_2.geometry}
                material={materials["TEXTURE Hydrangea WHITE 090119"]}
              />
              <mesh
                geometry={nodes.Mesh107_3.geometry}
                material={materials["TEXTURE Hydrangea 090119 2"]}
              />
            </group>
            <group
              position={[-0.698, 1.896, 0.975]}
              rotation={[-2.197, -0.195, -1.639]}
              scale={-0.001}
            >
              <mesh
                geometry={nodes.Mesh108.geometry}
                material={materials["Lilac 090119 12.001"]}
              />
              <mesh
                geometry={nodes.Mesh108_1.geometry}
                material={materials["Lilac 050119 4.002"]}
              />
            </group>
            <mesh
              geometry={nodes.branch_012.geometry}
              material={materials["Lilac 050119  Stvol 2"]}
              position={[-0.149, 1.015, 0.583]}
              rotation={[2.068, 0.499, 1.962]}
              scale={[0.007, 0.007, 0.018]}
            />
            <group
              position={[-0.12, 0.302, -0.831]}
              rotation={[-2.679, -0.976, -1.623]}
              scale={0.001}
            >
              <mesh
                geometry={nodes.Mesh110.geometry}
                material={materials["Lilac 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh110_1.geometry}
                material={materials["Lilac 050119 4"]}
              />
            </group>
            <mesh
              geometry={nodes.branch_005.geometry}
              material={materials["Lilac 050119  Stvol 2"]}
              position={[-0.169, 0.861, -0.211]}
              rotation={[-0.742, 0.011, -1.648]}
              scale={[0.009, 0.009, 0.019]}
            />
            <group
              position={[-0.137, 0.298, 1.335]}
              rotation={[1.139, -0.792, 1.122]}
              scale={-0.001}
            >
              <mesh
                geometry={nodes.Mesh112.geometry}
                material={materials["Lilac 090119 12.001"]}
              />
              <mesh
                geometry={nodes.Mesh112_1.geometry}
                material={materials["Lilac 050119 4.002"]}
              />
            </group>
            <mesh
              geometry={nodes.branch_016.geometry}
              material={materials["Lilac 050119  Stvol 2"]}
              position={[-0.214, 0.773, 0.57]}
              rotation={[-2.638, -0.134, -0.136]}
              scale={[0.005, 0.005, 0.015]}
            />
            <group
              position={[0.538, 0.28, -0.506]}
              rotation={[0.411, 0.755, 2.473]}
              scale={0}
            >
              <mesh
                geometry={nodes.Mesh114.geometry}
                material={materials["Lilac 090119 1"]}
              />
              <mesh
                geometry={nodes.Mesh114_1.geometry}
                material={materials["Lilac 050119 4"]}
              />
            </group>
            <mesh
              geometry={nodes.branch_004.geometry}
              material={materials["Lilac 050119  Stvol 2"]}
              position={[0.285, 0.596, -0.218]}
              rotation={[-0.842, -0.603, 1.24]}
              scale={[0.005, 0.005, 0.011]}
            />
          </group>
        </Select>
      </group>
    </Selection>
  );
}

useGLTF.preload("/BouquetBox.gltf");
