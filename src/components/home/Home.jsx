import React from 'react';
import JobCategories from '../jobCategories/JobCategories';
import FectureJobs from '../fectureJobs/FectureJobs';
import Jobs from '../jobs/Jobs';
import Banner from '../banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='w-3/4 mx-auto  '>
                <JobCategories></JobCategories>
                <FectureJobs></FectureJobs>
                <Jobs></Jobs>
            </div>

        </div>
    );
};

export default Home;