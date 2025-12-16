"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Lightweight Three.js aurora-style point field to give the ember-final page a
 * modern, textured motion without affecting other routes. Runs client-side only.
 */
export function EmberAuroraCanvas() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 2000);
    camera.position.set(0, 0, 450);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const numPoints = 900;
    const positions = new Float32Array(numPoints * 3);
    const colors = new Float32Array(numPoints * 3);

    const colorA = new THREE.Color("#7c3aed");
    const colorB = new THREE.Color("#1d4ed8");
    const colorC = new THREE.Color("#a855f7");
    const colorD = new THREE.Color("#d97706"); // amber/orange
    const colorE = new THREE.Color("#b45309"); // golden brown
    for (let i = 0; i < numPoints; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 700;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 400;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 700;

      const mixed = colorA
        .clone()
        .lerp(colorB, Math.random() * 0.6 + 0.2)
        .lerp(colorC, Math.random() * 0.4)
        .lerp(colorD, Math.random() * 0.25)
        .lerp(colorE, Math.random() * 0.15);
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 4,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Diverging/converging ray fans
    const rayGroup = new THREE.Group();
    const rayMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#a855f7"),
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide
    });

    const makeRay = (angle: number, hue: string) => {
      const shape = new THREE.Shape();
      shape.moveTo(-8, 0);
      shape.lineTo(8, 0);
      shape.lineTo(0, 260);
      shape.lineTo(-8, 0);
      const geo = new THREE.ShapeGeometry(shape);
      const mat = rayMaterial.clone();
      mat.color = new THREE.Color(hue);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.z = -120;
      mesh.rotation.z = angle;
      mesh.scale.set(1.4, 1, 1);
      return mesh;
    };

    const hues = ["#7c3aed", "#4f46e5", "#22d3ee", "#a855f7", "#f59e0b", "#b45309"];
    for (let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 * i) / 10;
      const ray = makeRay(angle, hues[i % hues.length]);
      rayGroup.add(ray);
    }
    scene.add(rayGroup);

    // Minimalist end rays / light beans across space
    const beams = new THREE.Group();
    const beamMeshes: THREE.Mesh<THREE.CylinderGeometry, THREE.MeshBasicMaterial>[] = [];
    const beamMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#fbbf24"),
      transparent: true,
      opacity: 0.06,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    for (let i = 0; i < 20; i++) {
      const geo = new THREE.CylinderGeometry(0.2, 1.8, 180, 6, 1, true);
      const mat = beamMaterial.clone();
      mat.color = new THREE.Color(i % 2 === 0 ? "#f59e0b" : "#9a3412");
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set((Math.random() - 0.5) * 400, (Math.random() - 0.5) * 300, -80 - Math.random() * 120);
      mesh.rotation.z = Math.random() * Math.PI * 2;
      mesh.rotation.y = Math.random() * Math.PI * 2;
      beams.add(mesh);
      beamMeshes.push(mesh);
    }
    scene.add(beams);

    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      points.rotation.y = t * 0.05;
      points.rotation.x = Math.sin(t * 0.2) * 0.1;
      rayGroup.rotation.z = t * 0.07;
      rayGroup.rotation.x = Math.sin(t * 0.3) * 0.2;
      rayGroup.children.forEach((child, idx) => {
        child.rotation.z += Math.sin(t * 0.5 + idx) * 0.0015;
        child.position.z = -120 + Math.sin(t * 0.6 + idx) * 15;
      });
      beams.rotation.y = t * 0.04;
      beamMeshes.forEach((mesh, idx) => {
        mesh.rotation.x = Math.sin(t * 0.3 + idx) * 0.2;
        mesh.material.opacity = 0.04 + Math.abs(Math.sin(t * 0.6 + idx)) * 0.05;
      });
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      const w = mount.clientWidth || window.innerWidth;
      const h = mount.clientHeight || window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none opacity-70 blur-[1px]" aria-hidden />;
}
