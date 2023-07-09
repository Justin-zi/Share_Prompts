//import React from 'react' ---- REACT import unncessary in next
import Feed from "@components/Feed"
// An underscore_ classname is from our custom defined CSS
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> AI Powered Prompts</span>
        </h1>
        <p className="desc text-center">
                Promptopia is an open-source AI prompting tool
                for the mordern world to discover, create and share creative AI prompts
        </p>

        <Feed/>
        {/* Feed */}
    </section>

  )
}

export default Home