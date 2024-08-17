import React from 'react'

const About = () => {
    return (
        <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <div >   {/* my-16 htaa de */}

            <h1 className='text-3xl font-bold mb-5'>About</h1>
            <p className='text-justify text-sm md:text-md'>I am a frontend developer skilled in HTML, CSS, and JavaScript, with a focus on creating responsive and user-friendly web applications. Proficient in React, I build dynamic interfaces that are both visually appealing and functional. I prioritize seamless user experiences and collaborate closely with designers and backend developers to ensure optimized performance across all devices. My goal is to deliver innovative solutions that meet user needs and business objectives.
            </p>
            <br />
            <h1 className='text-red-700 font-semibold text-xl mb-2'>Education</h1>
            <div>
                <h1 className="font-semibold flex justify-between my-2">
                    <span>BACHELOR'S OF COMPUTER APPLICATION</span>
                    <span>[2021 - 2024]</span>
                </h1>
                <p className='text-justify text-sm md:text-md'> Maharaja Agrasen Institute of Management and Technology, Jagadhri , Haryana
                    <p>Kurukshetra University</p>
                </p>
                <h1 className="font-semibold flex justify-between my-2">
                    <span>XII</span>
                    <span>[2020 - 2021]</span>
                </h1>
                <p className='text-justify text-sm md:text-md'> Maharishi Dayanand Vidya Mandir Sr. Sec. School, Hafizpur, Haryana</p>
                <h1 className="font-semibold flex justify-between my-2">
                    <span>X</span>
                    <span>[2018 - 2019]</span>
                </h1>
                <p className='text-justify text-sm md:text-md'>Maharishi Dayanand Vidya Mandir Sr. Sec. School, Hafizpur, Haryana</p>
            </div>
            <br />
            <h1 className='text-red-700 font-semibold text-xl mb-2'>Skills & Expertise</h1>
            <h1 className=" flex my-2">
            <p className="font-semibold mr-1">Languages: </p> <span>HTML5, CSS3, JavaScript.</span></h1>
            <h1 className=" flex my-2">
            <p className="font-semibold mr-1">Libraries/Frameworks: </p> <span>React.Js, Material UI, Bootstrap.</span></h1>
            <h1 className=" flex my-2">
            <p className="font-semibold mr-1">Tools: </p> <span>Git, Github.</span></h1>           
        </div >
        <br />
        <hr />
    </div>
    )
}

export default About