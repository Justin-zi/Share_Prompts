import '@styles/globals.css';

import Nav from '@components/Nav'; 
import Provider from '@components/Provider';

/* 
The LayoutJS is used to define global componeents
i.e If we render our Nav or Footer here it will be displayed
in all the app routes inlcuding the root and children
*/

//Meta Data tags
export const metadata = {
    title: "Prompt Share",
    description: 'Discover & Share AI Prompts',
    author: 'Justin Ling',
    keywords: 'AI, ChatGPT, Prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'></div>
            </div>
            <main className='app'>
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout