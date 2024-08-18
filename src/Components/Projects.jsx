import React from 'react'
import pic from '../assets/TODO.png'
import photo from '../assets/Youtube.png'

const Projects = () => {
  return (
    <div name="Projects" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <h1 className='text-3xl font-bold mb-5'>Projects</h1>

      {/* Todo list Project Details  */}
      <h1 className='text-2xl text-red-800 mb-5'>TODO List</h1>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2'>
          <abbr title="Visit on TODO list">
            <a href="https://prs4902.github.io/todoapp/" target='_blank'>
              <img
                src={pic}
                alt="TODO list image"
                className="w-full h-auto object-contain cursor-pointer hover:scale-110 duration-200"
              />
            </a>
          </abbr>
        </div>
        <div className='md:w-1/2 flex flex-col justify-center md:ml-10 mt-10 md:mt-0'>

          <div className='flex '>
            <h1 className="font-bold mr-1">Technologies Used:</h1>
            <p>React.js | HTML5 | CSS3 | Bootstrap | Material UI</p>
          </div>
          <div className='flex '>
            <h1 className="font-bold mr-1">Task Management:</h1>
            <p className='text-justify md:text-md'>Allowed users to create, delete, and mark tasks as complete.</p>
          </div>
          <p className='text-justify md:text-md mt-2'>The UI is crafted to be clean and user-centric, making use of Material-UI components for a
            consistent and visually appealing design. Bootstrap is employed to ensure the layout is
            flexible and easy to adapt.</p>
          <mark> <p className='text-justify text-xl md:text-md'>*If you'd like to see the TODO List in action, just click on the image*</p></mark>
        </div>
      </div>

      {/* Youtube Project Details  */}
      <h1 className='text-2xl text-red-800 my-5'>Youtube Clone</h1>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2'>
          <abbr title="Visit on TODO list">
            <a href="https://prs4902.github.io/youtubeapp/" target='_blank'>
              <img
                src={photo}
                alt="TODO list image"
                className="w-full h-auto object-contain cursor-pointer hover:scale-110 duration-200"
              />
            </a>
          </abbr>
        </div>
        <div className='md:w-1/2 flex flex-col justify-center md:ml-10 mt-10 md:mt-0'>

          <div className='flex '>
            <h1 className="font-bold mr-1">Technologies Used:</h1>
            <p className='text-justify md:text-md'>React.js | HTML5 | Material-UI | Axios | RapidAPI | CSS.
            </p>
          </div>
          <div className='flex '>
            <h1 className="font-bold mr-1">API Integration:</h1>
            <p className='text-justify md:text-md'>Fetched and displayed video data using Axios for seamless API integration.</p>
          </div>
          <p className='text-justify md:text-md mt-2'>This project replicates YouTube's core features, offering video search and recommendations. Built with React, and Material-UI, it provides a user-friendly interface similar to the original platform, allowing users to explore and watch videos seamlessly.
          </p>
          <mark> <p className='text-justify text-xl md:text-md'>*If you'd like to see the YouTube Clone in action, just click on the image*</p></mark>
        </div>
      </div>
      <br />
      <hr />
    </div>
  )
}

export default Projects
