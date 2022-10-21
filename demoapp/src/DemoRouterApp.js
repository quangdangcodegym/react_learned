import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import DemoRouterApp1 from './DemoRouterApp1';
import DemoRouterApp2 from './DemoRouterApp2';
import DemoRouterAdmin from './DemoRouterAdmin';
import DemoRouterSubApp1 from './DemoRouterSubApp1';
import DemoRouterSubApp2 from './DemoRouterSubApp2';
import DemoRouterUseParam from './DemoRouterUseParam';
import DemoRouterUseSearchParam from './DemoRouterUseSearchParam';
/**
    Sử dụng Route kèm thẻ Link
    Sử dụng path: "/admin/*":  để ánh xa đường dẫn
    Trong admin có đường dẫn con + thẻ Outlet
 */
const DemoRouterApp = ()=>{
    return (
        <BrowserRouter>
        <ul>
            <li><Link to="/demo1">Go to App1</Link></li>
            <li><Link to="/demo2">Go to App2</Link></li>
            <li><Link to="/demo3">Go to App3</Link></li>
            <li><Link to="/demo4">Go to App4</Link></li>
        </ul>
            <Routes>
                <Route path="/demo1" element={<DemoRouterApp1 />} />
                <Route path="/demo2" element={<DemoRouterApp2 />} />
                <Route path="/demo3" element={<DemoRouterUseSearchParam />} />
                <Route path="/demo4/:userId" element={<DemoRouterUseParam />} />
                
                <Route path="/admin/*" element={<DemoRouterAdmin />} >
                    <Route path="sub1" element={<DemoRouterSubApp1 />} />
                    <Route path="sub2" element={<DemoRouterSubApp2 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default DemoRouterApp;