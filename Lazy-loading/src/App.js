import React, {  Suspense, useState } from 'react';

const LazyComponent = React.lazy(() => import('./components/HeavyComponent'));

function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{padding:'20'}}>
      <h1>React.lazy() 예제 (JS)</h1>
      <button onClick = {()=>setShow(true)}>컴포넌트 불러오기</button>

      {/* suspense로 fallback ui 지정 */}
      <Suspense fallback= {<div>Loading...</div>}>
      {show && <LazyComponent />}
      </Suspense>
    </div>
  )
}

export default App;