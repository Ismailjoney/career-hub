import React, { useEffect, useState } from 'react';
import Job from './job/Job';

const Jobs = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className=' max-w-68'>
            <div className='grid md:grid-cols-2 gap-6 '>
                {
                    jobs.slice(0, dataLength).map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : ''}>
                    <button onClick={() =>setDataLength(jobs.length) } className='btn btn-primary'>See More</button>
            </div>
        </div>
    );
};

export default Jobs;