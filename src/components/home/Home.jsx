import React from 'react';
import Navbar from '../nav/Navbar';
import JobCategories from '../jobCategories/JobCategories';
import FectureJobs from '../fectureJobs/FectureJobs';
 

const Home = () => {
    return (
        <div>
            <JobCategories></JobCategories>
            <FectureJobs></FectureJobs>
        </div>
    );
};

export default Home;