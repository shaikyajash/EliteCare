import React from "react";
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Component/homepage/homepage';
import CommunityPage from "../Component/communitypage/communitypage";
import AuthenticationPage from "../Component/authenticationpage/authenticationpage";
import NGOPage from "../Component/ngopage/ngopage";
import NotFound from '../Component/notfound/notfound';
import AnalysisPage from "../Component/analysispage/analysispage";
import CommunityChat from "../Component/communitychat/communitychat";
import Bot from "../Component/ChatBot/Bot";


const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <HomePage/>,
        },
        {
            path:'/ngo',
            element: <NGOPage />
        },
        {
            path:'/communtiy',
            element:<CommunityPage />,
        },
        {
            path:'/authenticate',
            element:<AuthenticationPage />
        },
        {
            path:'/analysis',
            element:<AnalysisPage />,
        },
        {
<<<<<<< HEAD
            path:'/community/:group',
            element: <CommunityChat/>,
=======
            path:'/bot',
            element: <Bot />
>>>>>>> 2636795d8a9a26a9b2d7ad4caa799faec92e50db
        },
        {
            path:'*',
            element:<NotFound />
        }
    ]
)

export default router;