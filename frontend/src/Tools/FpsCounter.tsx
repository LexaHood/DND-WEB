export default function FpsCounter() {
  let lastTime = performance.now();
  let frameCount = 0;

  function update(time: number) {
    // Увеличиваем счетчик кадров
    frameCount++;

    // Вычисляем разницу во времени
    let delta = time - lastTime;
    if (delta >= 1000) { // Когда прошла секунда или больше
      // Рассчитываем fps (количество кадров разделенное на количество секунд)
      let fps = frameCount / (delta / 1000);

      // Выводим FPS в консоль
      console.log(`FPS: ${fps.toFixed(2)}`);

      // Сбрасываем счетчик кадров и обновляем время последнего обновления
      frameCount = 0;
      lastTime = time;
    }

    // Запланировать следующий вызов
    requestAnimationFrame(update);
  }

  // Начинаем цикл измерения FPS
  requestAnimationFrame(update);
}