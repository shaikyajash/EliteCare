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
import Post from "../Component/post/post";


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
            path:'/community',
            element:<CommunityPage />,
        },
        {
            path:'/community/:group',
            element: <CommunityChat/>,
        },
        {
            path:'community/:group/post/:postTopic',
            element:<Post/>
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
            path:'/bot',
            element: <Bot />
        },
        {
            path:'*',
            element:<NotFound />
        }
    ]
)

export default router;