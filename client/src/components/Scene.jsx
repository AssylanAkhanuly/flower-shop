
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';
import { gsap } from 'gsap';

export function Scene(props) {
  const { nodes, materials } = useGLTF('/GLTFs/Scene.gltf')
  const {scene} = useThree();
  const {sceneVisible} = props
  const sceneRef = useRef();

  useFrame(({mouse}) => {
    props.orbitRef.current.setAzimuthalAngle(1.7+0.1*mouse.x)
    props.orbitRef.current.setPolarAngle(1.4+ 0.1*mouse.y)
  })

  useEffect(() => {
    if(sceneVisible) Add();
    else Remove();
  }, [sceneVisible])

  const Remove = () => {
    sceneRef?.current?.traverse(child => {
      if(child.isMesh) {
        gsap.to(child.material, {
          transparent: true,
          opacity: 0,
          duration: 2,
          onComplete: () => {
            scene.remove(sceneRef.current)
          }
        })
      }
    })
  }

  const Add = () => {
    sceneRef?.current?.traverse(child => {
      if(child.isMesh) {
        scene.add(sceneRef.current)
        gsap.to(child.material, {
          transparent: false,
          opacity: 1,
          duration: 2,
        })
      }
    })
  }

  return (
    <group ref={sceneRef}  {...props} dispose={null}>
      <group position={[48.048, 146.338, 11.339]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh geometry={nodes.sub01.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.sub02.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.sub03.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.sub04.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.sub05.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.sub06.geometry} material={materials['Material.001']} />
      </group>
      <group position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]}>
        <mesh geometry={nodes['12'].geometry} material={materials['Glass_lamp.001']} position={[0, 0, -0.004]} />
        <mesh geometry={nodes['12001'].geometry} material={materials['Metal.002']} position={[0, 0, -0.004]} />
      </group>
      <group position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]}>
        <mesh geometry={nodes['15'].geometry} material={materials['Glass_lamp.001']} position={[0, 0, -0.004]} />
        <mesh geometry={nodes['15001'].geometry} material={materials['Metal.002']} position={[0, 0, -0.004]} />
      </group>
      <group position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]}>
        <mesh geometry={nodes['18'].geometry} material={materials['Glass_lamp.001']} position={[0, 0, -0.004]} />
        <mesh geometry={nodes['18001'].geometry} material={materials['Metal.002']} position={[0, 0, -0.004]} />
      </group>
      <group position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]}>
        <mesh geometry={nodes['19'].geometry} material={materials['Glass_lamp.001']} position={[0, 0, -0.004]} />
        <mesh geometry={nodes['19001'].geometry} material={materials['Metal.002']} position={[0, 0, -0.004]} />
      </group>
      <group position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]}>
        <mesh geometry={nodes['24'].geometry} material={materials['Glass_lamp.001']} position={[0, 0, -0.004]} />
        <mesh geometry={nodes['24001'].geometry} material={materials['Metal.002']} position={[0, 0, -0.004]} />
      </group>
      <group position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]}>
        <mesh geometry={nodes['12002'].geometry} material={materials['Glass_lamp.001']} position={[0, 0, 0]} />
        <mesh geometry={nodes['12003'].geometry} material={materials['Metal.002']} position={[0, 0, 0]} />
      </group>
      <group position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]}>
        <mesh geometry={nodes['15002'].geometry} material={materials['Glass_lamp.001']} position={[0, 0, 0]} />
        <mesh geometry={nodes['15003'].geometry} material={materials['Metal.002']} position={[0, 0, 0]} />
      </group>
      <group position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]}>
        <mesh geometry={nodes['18002'].geometry} material={materials['Glass_lamp.001']} position={[0, 0, 0]} />
        <mesh geometry={nodes['18003'].geometry} material={materials['Metal.002']} position={[0, 0, 0]} />
      </group>
      <group position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]}>
        <mesh geometry={nodes['19002'].geometry} material={materials['Glass_lamp.001']} position={[0, 0, 0]} />
        <mesh geometry={nodes['19003'].geometry} material={materials['Metal.002']} position={[0, 0, 0]} />
      </group>
      <group position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]}>
        <mesh geometry={nodes['24002'].geometry} material={materials['Glass_lamp.001']} position={[0, 0, 0]} />
        <mesh geometry={nodes['24003'].geometry} material={materials['Metal.002']} position={[0, 0, 0]} />
      </group>
      <group position={[-43.379, 117.015, 84.295]} scale={0.13}>
        <group position={[0.005, 0, 0.01]} scale={9.279}>
          <mesh geometry={nodes.Arch42_010.geometry} material={materials['Material #57']} position={[-10.406, -12.14, -2.477]} />
          <mesh geometry={nodes.Arch42_060.geometry} material={materials['Material #57']} position={[9.297, -12.237, 1.777]} />
          <mesh geometry={nodes.Arch42_061.geometry} material={materials['Material #57']} position={[-1.359, -11.915, -9.395]} />
          <mesh geometry={nodes.Arch42_062.geometry} material={materials['Material #57']} position={[7.125, -11.968, -6.301]} />
          <mesh geometry={nodes.Arch42_063.geometry} material={materials['Material #57']} position={[0.641, -3.123, 3.285]} />
          <mesh geometry={nodes.Arch42_064.geometry} material={materials['Material #57']} position={[-1.094, -3.046, -1.754]} />
          <mesh geometry={nodes.Arch42_065.geometry} material={materials['Material #56']} position={[0.281, -12.78, -0.031]} />
          <mesh geometry={nodes.Arch42_066.geometry} material={materials['Material #58']} position={[-0.203, -3.391, -0.004]} />
          <mesh geometry={nodes.Arch42_067.geometry} material={materials['Ceramiks y ']} position={[-0.203, 7.828, -0.004]} />
          <mesh geometry={nodes.Arch42_068.geometry} material={materials['Material #57']} position={[2.156, -12.35, 10.066]} />
          <mesh geometry={nodes.Arch42_069.geometry} material={materials['Material #57']} position={[-5.859, -10.955, 5.789]} />
        </group>
        <mesh geometry={nodes.Object01.geometry} material={materials['Material #30  ��']} position={[-1.882, 72.638, -0.026]} scale={9.279} />
      </group>
      <group position={[44.583, 105.684, 83.198]} rotation={[0, Math.PI / 2, 0]} scale={0.071}>
        <mesh geometry={nodes.Cylinder00.geometry} material={materials.rope} position={[-55.218, -233.262, 50.112]} rotation={[-0.087, 0.038, -0.136]} />
        <mesh geometry={nodes.Cylinder01.geometry} material={materials.rope} position={[10.464, -233.262, -67.248]} rotation={[-2.984, -1.009, 3.139]} />
        <mesh geometry={nodes.Cylinder02.geometry} material={materials.rope} position={[55.22, -233.262, 67.239]} rotation={[-2.228, 1.45, 2.092]} />
      </group>
      <group position={[19.824, 105.684, 83.198]} rotation={[0, Math.PI / 2, 0]} scale={0.071}>
        <mesh geometry={nodes.Cylinder11.geometry} material={materials['Metal.002']} position={[10.464, -233.262, -67.248]} rotation={[-2.984, -1.009, 3.139]} />
        <mesh geometry={nodes.Cylinder12.geometry} material={materials.rope} position={[-55.218, -233.262, 50.112]} rotation={[-0.087, 0.038, -0.136]} />
        <mesh geometry={nodes.Cylinder13.geometry} material={materials['Metal.002']} position={[55.22, -233.262, 67.239]} rotation={[-2.228, 1.45, 2.092]} />
      </group>
      <mesh geometry={nodes.pot.geometry} material={materials['Material.002']} position={[48.048, 146.338, 11.339]} rotation={[Math.PI / 2, 0, 0]} scale={0.05} />
      <mesh geometry={nodes.mount.geometry} material={materials['Metal.001']} position={[48.048, 146.338, 11.339]} rotation={[Math.PI / 2, 0, 0]} scale={0.05} />
      <mesh geometry={nodes.stem.geometry} material={materials['Material.009']} position={[48.048, 146.338, 11.339]} rotation={[Math.PI / 2, 0, 0]} scale={0.05} />
      <mesh geometry={nodes.ground.geometry} material={materials.Ground} position={[48.048, 146.338, 11.339]} rotation={[Math.PI / 2, 0, 0]} scale={0.05} />
      <mesh geometry={nodes.Helix2301.geometry} material={materials['Steel.001']} position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]} />
      <mesh geometry={nodes.Helix2302.geometry} material={materials['Steel.001']} position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]} />
      <mesh geometry={nodes.Box2131640.geometry} material={materials['Glass.001']} position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]} />
      <mesh geometry={nodes.Helix2303.geometry} material={materials['Steel.001']} position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]} />
      <mesh geometry={nodes.Helix2304.geometry} material={materials['Steel.001']} position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]} />
      <mesh geometry={nodes.Helix2305.geometry} material={materials['Steel.001']} position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]} />
      <mesh geometry={nodes.Helix2306.geometry} material={materials['Steel.001']} position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]} />
      <mesh geometry={nodes.Helix2307.geometry} material={materials['Steel.001']} position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]} />
      <mesh geometry={nodes.Helix2308.geometry} material={materials['Steel.001']} position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]} />
      <mesh geometry={nodes.Helix2309.geometry} material={materials['Steel.001']} position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]} />
      <mesh geometry={nodes.Helix2310.geometry} material={materials['Steel.001']} position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]} />
      <mesh geometry={nodes.Box2131641.geometry} material={materials['Glass.001']} position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]} />
      <mesh geometry={nodes.Tube001.geometry} material={materials['Ceramic.002']} position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]} />
      <mesh geometry={nodes.Tube002.geometry} material={materials['Ceramic.002']} position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]} />
      <mesh geometry={nodes.Box2131642.geometry} material={materials['Glass.001']} position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]} />
      <mesh geometry={nodes.Tube003.geometry} material={materials['Ceramic.002']} position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]} />
      <mesh geometry={nodes.Box2131643.geometry} material={materials['Glass.001']} position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]} />
      <mesh geometry={nodes.Tube004.geometry} material={materials['Ceramic.002']} position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]} />
      <mesh geometry={nodes.Box2131644.geometry} material={materials['Glass.001']} position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]} />
      <mesh geometry={nodes.Tube005.geometry} material={materials['Ceramic.002']} position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]} />
      <mesh geometry={nodes.ChamferCyl.geometry} material={materials['Metal.002']} position={[18.397, 147.067, 41.169]} rotation={[Math.PI / 2, 0, 0]} scale={[0.009, 0.009, 0.004]} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.007']} position={[-10.815, 7.042, 13.913]} scale={[116.922, 0.962, 116.922]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.007']} position={[-7.845, 74.894, 129.112]} rotation={[0, 0, -Math.PI]} scale={[44.327, 44.327, 1.173]} />
      <group position={[-7.845, 102.307, 101.281]} rotation={[Math.PI / 2, 0, 0]} scale={[12.641, 6.225, 12.641]}>
        <mesh geometry={nodes.Circle_1.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Circle_2.geometry} material={materials['Material.008']} />
      </group>
      <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.004']} position={[-10.815, -5.714, 13.913]} rotation={[0, -1.197, 0]} scale={[116.922, 0.962, 116.922]} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials['Material.008']} position={[-5.293, 26.465, 55.512]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-23.231, -17.504, -23.231]} />
      <mesh geometry={nodes.Helix2301001.geometry} material={materials['Steel.001']} position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]} />
      <mesh geometry={nodes.Helix2302001.geometry} material={materials['Steel.001']} position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]} />
      <mesh geometry={nodes.Box2131640001.geometry} material={materials['Glass.001']} position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]} />
      <mesh geometry={nodes.Helix2303001.geometry} material={materials['Steel.001']} position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]} />
      <mesh geometry={nodes.Helix2304001.geometry} material={materials['Steel.001']} position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]} />
      <mesh geometry={nodes.Helix2305001.geometry} material={materials['Steel.001']} position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]} />
      <mesh geometry={nodes.Helix2306001.geometry} material={materials['Steel.001']} position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]} />
      <mesh geometry={nodes.Helix2307001.geometry} material={materials['Steel.001']} position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]} />
      <mesh geometry={nodes.Helix2308001.geometry} material={materials['Steel.001']} position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]} />
      <mesh geometry={nodes.Helix2309001.geometry} material={materials['Steel.001']} position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]} />
      <mesh geometry={nodes.Helix2310001.geometry} material={materials['Steel.001']} position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]} />
      <mesh geometry={nodes.Box2131641001.geometry} material={materials['Glass.001']} position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]} />
      <mesh geometry={nodes.Tube001001.geometry} material={materials['Ceramic.002']} position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]} />
      <mesh geometry={nodes.Tube002001.geometry} material={materials['Ceramic.002']} position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]} />
      <mesh geometry={nodes.Box2131642001.geometry} material={materials['Glass.001']} position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]} />
      <mesh geometry={nodes.Tube003001.geometry} material={materials['Ceramic.002']} position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]} />
      <mesh geometry={nodes.Box2131643001.geometry} material={materials['Glass.001']} position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]} />
      <mesh geometry={nodes.Tube004001.geometry} material={materials['Ceramic.002']} position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]} />
      <mesh geometry={nodes.Box2131644001.geometry} material={materials['Glass.001']} position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]} />
      <mesh geometry={nodes.Tube005001.geometry} material={materials['Ceramic.002']} position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]} />
      <mesh geometry={nodes.ChamferCyl001.geometry} material={materials['Metal.002']} position={[-33.818, 151.769, 34.608]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.012, 0.012, 0.006]} />
      <mesh geometry={nodes.Line002.geometry} material={materials['Metal.002']} position={[20.191, 124.383, 82.452]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.079} />
      <mesh geometry={nodes['712'].geometry} material={materials['Material.001']} position={[20.278, 84.423, 84.643]} rotation={[0.627, 0.163, 0.055]} scale={[0.067, 0.074, 0.044]} />
      <mesh geometry={nodes['713'].geometry} material={materials['wire_135006006.001']} position={[20.298, 77.681, 82.59]} rotation={[0, Math.PI / 2, 0]} scale={[0.044, 0.032, 0.044]} />
      <mesh geometry={nodes.Line001.geometry} material={materials['standart metal']} position={[45.048, 124.367, 82.452]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.079} />
      <mesh geometry={nodes['711'].geometry} material={materials['Material.001']} position={[43.873, 93.604, 83.269]} rotation={[1.34, -1.09, 1.644]} scale={[0.065, 0.073, 0.039]} />
      <mesh geometry={nodes['115'].geometry} material={materials['wire_135006006.001']} position={[45.178, 79.212, 82.617]} rotation={[0, Math.PI / 2, 0]} scale={[0.035, 0.026, 0.035]} />
      <mesh geometry={nodes.Cylinder10.geometry} material={materials['st wood']} position={[58.103, 145.849, 82.505]} rotation={[0, Math.PI / 2, 0]} scale={0.071} />
      <mesh geometry={nodes.Cylinder09.geometry} material={materials['Metal.002']} position={[58.103, 125.712, 82.505]} rotation={[0, Math.PI / 2, 0]} scale={0.071} />
      <mesh geometry={nodes.Cylinder08.geometry} material={materials['Metal.002']} position={[4.56, 125.385, 82.508]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.071} />
      <mesh geometry={nodes.Cylinder07.geometry} material={materials['Metal.002']} position={[4.714, 125.712, 82.505]} rotation={[0, Math.PI / 2, 0]} scale={0.071} />
      <mesh geometry={nodes.Cylinder06.geometry} material={materials['st wood']} position={[4.714, 145.849, 82.505]} rotation={[0, Math.PI / 2, 0]} scale={0.071} />
      <mesh geometry={nodes.Indoor_Plants_Collection_5_planterstand001.geometry} material={materials['wire_135006006.001']} position={[-40.422, 8.714, 87.181]} rotation={[Math.PI / 2, 0, 0]} scale={0.292} />
      <mesh geometry={nodes.Indoor_Plants_Collection_5_pothos001.geometry} material={materials['Material.001']} position={[-40.422, 8.714, 87.181]} rotation={[Math.PI / 2, 0, 0]} scale={0.292} />
      <mesh geometry={nodes.Indoor_Plants_Collection_5_soil4001.geometry} material={materials['wire_135006006.001']} position={[-40.422, 8.714, 87.181]} rotation={[Math.PI / 2, 0, 0]} scale={0.292} />
      <mesh geometry={nodes.Indoor_Plants_Collection_5_planter4001.geometry} material={materials['Material.002']} position={[-40.422, 8.714, 87.181]} rotation={[Math.PI / 2, 0, 0]} scale={0.292} />
      <mesh geometry={nodes.Indoor_Plants_Collection_5_scandens_001.geometry} material={materials['Material.001']} position={[-40.422, 8.714, 87.181]} rotation={[Math.PI / 2, 0, 0]} scale={0.292} />
      <mesh geometry={nodes.Indoor_Plants_Collection_5_soil3001.geometry} material={materials['wire_135006006.001']} position={[-40.422, 8.714, 87.181]} rotation={[Math.PI / 2, 0, 0]} scale={0.292} />
      <mesh geometry={nodes.Indoor_Plants_Collection_5_planter3001.geometry} material={materials['Material.002']} position={[-40.422, 8.714, 87.181]} rotation={[Math.PI / 2, 0, 0]} scale={0.292} />
      <mesh geometry={nodes.Indoor_Plants_Collection_5_scandens_portar_001.geometry} material={materials['Material.001']} position={[-40.422, 8.714, 87.181]} rotation={[Math.PI / 2, 0, 0]} scale={0.292} />
      <mesh geometry={nodes.Indoor_Plants_Collection_5_soil2001.geometry} material={materials['wire_135006006.001']} position={[-40.422, 8.714, 87.181]} rotation={[Math.PI / 2, 0, 0]} scale={0.292} />
      <mesh geometry={nodes.Indoor_Plants_Collection_5_planter2001.geometry} material={materials['Material.002']} position={[-40.422, 8.714, 87.181]} rotation={[Math.PI / 2, 0, 0]} scale={0.292} />
      <mesh geometry={nodes.Indoor_Plants_Collection_5_vine001.geometry} material={materials['Material.001']} position={[-40.422, 8.714, 87.181]} rotation={[Math.PI / 2, 0, 0]} scale={0.292} />
      <mesh geometry={nodes.Indoor_Plants_Collection_5_soil1001.geometry} material={materials['wire_135006006.001']} position={[-40.422, 8.714, 87.181]} rotation={[Math.PI / 2, 0, 0]} scale={0.292} />
      <mesh geometry={nodes.Indoor_Plants_Collection_5_planter1001.geometry} material={materials['Material.002']} position={[-40.422, 8.714, 87.181]} rotation={[Math.PI / 2, 0, 0]} scale={0.292} />
    </group>
  )
}

useGLTF.preload('/Scene.gltf')
