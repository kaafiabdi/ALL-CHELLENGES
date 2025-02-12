
import { createRoot } from 'react-dom/client'
import Header from './components/header'
import Todolist from './components/todolist'
import Tusbax from './components/tusbax'
import Qalafow from './components/qalafowfamily'
import Badid from './components/badid'
import Sawir from './components/sawir'
// import Xarfo from './components/xarfo'
import Readmore from './components/readmore'
import Unread from './components/unread'


let root = createRoot(document.getElementById('root'))
root.render(
 <>
  {/* <Header />
  <Todolist />
  <Sawir />
  <Tusbax />
  <Qalafow
  Header = "kuwani waa magacyada qoyska ilmo cabdilaahi"
  placeholder ="baadh..."
  button = "search"
   />


  <Readmore />
  <Unread /> */}

<Badid />
</>


  
)
