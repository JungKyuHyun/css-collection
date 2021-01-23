import React, { memo, useEffect, useRef } from 'react';
import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { DomUtils, RefUtils } from '../../utils';
import { WebGLUtils } from '../../utils/WebGLUtils';

export const BasicScene = memo(() => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!RefUtils.notNull(ref) || !DomUtils.usableWindow()) {
      return;
    }
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    ref.current!.appendChild(renderer.domElement);

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    if (WebGLUtils.isWebGLAvailable()) {
      animate();
    } else {
      const warning = WebGLUtils.getWebGLErrorMessage();
      ref.current!.appendChild(warning);
    }
  }, []);

  return <div ref={ref} />;
});
