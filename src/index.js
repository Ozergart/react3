import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {EpisodeNameProvider} from "./hoc/episodeNameContext";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EpisodeNameProvider>
   <RouterProvider router={router}/>
  </EpisodeNameProvider>
);


