/* Small, critically damped pointer springs. No dependency or idle animation loop. */
(() => {
  const allowed = matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
  const controllers = [];
  document.querySelectorAll('.magnetic').forEach(el => el.classList.remove('magnetic'));
  document.querySelectorAll('[data-depth-surface], .website-project').forEach(surface => {
    const object = surface.querySelector('[data-depth-object]') || surface;
    let x=0, y=0, vx=0, vy=0, tx=0, ty=0, frame=0, last=0;
    const reset = () => { cancelAnimationFrame(frame); frame=0; x=y=vx=vy=tx=ty=0; object.style.removeProperty('transform'); object.style.removeProperty('will-change'); };
    function tick(now) {
      const dt=Math.min((now-last)/1000 || .016,.032); last=now;
      // Critical damping: c = 2 sqrt(k), with unit mass.
      vx+=(240*(tx-x)-31*vx)*dt; vy+=(240*(ty-y)-31*vy)*dt;
      x+=vx*dt; y+=vy*dt;
      object.style.transform=`perspective(1100px) rotateX(${y}deg) rotateY(${x}deg)`;
      if (Math.abs(tx-x)+Math.abs(ty-y)+Math.abs(vx)+Math.abs(vy)>.015) frame=requestAnimationFrame(tick);
      else { frame=0; object.style.removeProperty('will-change'); if (!tx&&!ty) object.style.removeProperty('transform'); }
    }
    const start=()=>{if(!frame){last=performance.now();object.style.willChange='transform';frame=requestAnimationFrame(tick);}};
    surface.addEventListener('pointermove',e=>{
      if(!allowed.matches || e.pointerType==='touch')return;
      const r=surface.getBoundingClientRect();
      const amplitude=surface.matches('.website-project')?2:5;
      tx=((e.clientX-r.left)/r.width-.5)*amplitude;
      ty=-((e.clientY-r.top)/r.height-.5)*amplitude; start();
    });
    surface.addEventListener('pointerleave',()=>{tx=ty=0;if(allowed.matches)start();else reset();});
    controllers.push(reset);
  });
  const resetAll=()=>controllers.forEach(reset=>reset());
  allowed.addEventListener('change',resetAll);
  document.addEventListener('portfolio:before-route',resetAll);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)resetAll();});
})();
