import React, { memo, useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { BoxGeometry, DirectionalLight, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { DomUtils, RefUtils } from '../../utils';
import { WebGLUtils } from '../../utils/WebGLUtils';

/**
 * 반응형 디자인 적용
 */

export const BasicScene3 = memo(() => {
  const ref = useRef<HTMLCanvasElement>(null);
  const scene = useMemo(() => {
    return new Scene();
  }, []);

  const cubes = useMemo(() => {
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new BoxGeometry(boxWidth, boxHeight, boxDepth);

    const instansA = WebGLUtils.makeInstance(scene, geometry, 0x44aa88, 0);
    const instansB = WebGLUtils.makeInstance(scene, geometry, 0x8844aa, -2);
    const instansC = WebGLUtils.makeInstance(scene, geometry, 0xaa8844, 2);

    return [instansA.cube, instansB.cube, instansC.cube];
  }, [scene]);

  useEffect(() => {
    if (!RefUtils.notNull(ref) || !DomUtils.usableWindow()) {
      return;
    }

    const canvas = ref.current!;
    const renderer = new WebGLRenderer({ canvas });

    const fov = 75;
    const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 5;
    const camera = new PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 3;

    // 광원 추가
    const color = 0xffffff;
    const intensity = 1;
    const light = new DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);

    const animate = (time: number) => {
      time *= 0.001; // convert time to seconds

      if (WebGLUtils.resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }

      cubes.forEach((cube, ndx) => {
        const speed = 1 + ndx * 0.1;
        const rot = time * speed;
        cube.rotation.x = rot;
        cube.rotation.y = rot;
      });
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    if (WebGLUtils.isWebGLAvailable()) {
      requestAnimationFrame(animate);
    } else {
      const warning = WebGLUtils.getWebGLErrorMessage();
      ref.current!.appendChild(warning);
    }
  }, [cubes, scene]);

  return <Canvas ref={ref} />;
});

const Canvas = styled.canvas`
  display: block;
  width: 200px;
  height: 120px;
  float: left;
`;
