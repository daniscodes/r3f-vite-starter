import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <group>
        <Avatar frustumCulled={false} />
      </group>
      <ambientLight intensity={1} />
    </>
  );
};
