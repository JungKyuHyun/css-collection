import React, { memo, useEffect, useMemo, useRef } from 'react';
import { BoxGeometry, DirectionalLight, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { DomUtils, RefUtils } from '../../utils';
import { WebGLUtils } from '../../utils/WebGLUtils';

/**
 * BasicScene을 개선. 광원 추가, 메테리얼 변경
 */

export const BasicScene2 = memo(() => {
  const ref = useRef<HTMLDivElement>(null);
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

    const fov = 100;
    const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 5;
    const camera = new PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 3;

    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    ref.current!.appendChild(renderer.domElement);

    // 광원 추가
    const color = 0xffffff;
    const intensity = 1;
    const light = new DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);

    const animate = (time: number) => {
      time *= 0.001; // convert time to seconds

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

  return <div ref={ref} />;
});
