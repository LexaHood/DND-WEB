import FpsCounter from "src/Tools/FpsCounter";
import "./Components.css"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useCallback, useEffect, useState } from 'react';


function ScrollImage() {
  // console.log('test common interface', test);
  const [imageSrc, setImageSrc] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        // Убедитесь, что reader.result - это строка, прежде чем вызывать setImageSrc
        if (typeof reader.result === 'string') {
          setImageSrc(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDown = useCallback((event: { clientX: number; clientY: number; }) => {
    setIsDragging(true);
    setDragStart({
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    });
  }, [position]);

  const handleMouseMove = useCallback((event: { clientX: number; clientY: number; }) => {
    if (isDragging) {
      setPosition({
        x: event.clientX - dragStart.x,
        y: event.clientY - dragStart.y,
      });
    }
  }, [isDragging, dragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleWheel = useCallback((event: React.WheelEvent<HTMLDivElement>) => {
    setScale((prevScale) => {
      event.preventDefault();
      return prevScale + event.deltaY * -0.01;
    })
  }, []);

  // useEffect(() => {
  //   if (imageSrc) {
  //     console.log("Image source updated!", imageSrc);
  //   }
  // }, [imageSrc])
  FpsCounter();



  return (
    <div>
      <h1>Hello</h1>
      <input type="file" onChange={handleImageChange} />
      <button onClick={() => setImageSrc("")}>Clear</button>
      {imageSrc && (
        <div
          id="imageContainer"
          style={{
            backgroundRepeat: 'no-repeat', // предотвратить замощение
            backgroundAttachment: 'fixed', // фон остаётся неподвижным при масштабировании
            backgroundColor: 'var(--main-color)', // серый фон вне картинки
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: `${scale * 100}%`,
            backgroundPosition: 'center',
            width: '100vw',
            height: '100vh',
            transform: `translate(${position.x}px, ${position.y}px)`,
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
        />
      )}
    </div>
  );
}

export default ScrollImage;




