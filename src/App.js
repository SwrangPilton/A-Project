import { lazy, Suspense, Fragment } from 'react';
import './App.css';
import Wall from './components/Wall';
const Shows = lazy(() => import('./components/Shows'));

function App() {
  return (
    <Fragment>
      <Wall />
      <Suspense fallback={<div className='padding text-2xl'>Loading....</div>}>
        <Shows name='Trending' />
      </Suspense>
      <Suspense fallback={<div className='padding text-2xl'>Loading....</div>}>
        <Shows name='TV Shows' />
      </Suspense>
      <Suspense fallback={<div className='padding text-2xl'>Loading....</div>}>
        <Shows name='Movies' />
      </Suspense>
    </Fragment>
  );
}

export default App;
