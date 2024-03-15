import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { saveJobApplication } from '../utilites/localStorage';
import { ToastContainer, toast } from 'react-toastify';

const JobDetails = () => {
    const jobInfo = useLoaderData([])
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobInfo.find(job => job.id === idInt)


    const handleApplyJob = () => {

       saveJobApplication(idInt) 

           

        } 

    



    return (
        <div>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details coming here</h2>
                    <h2>Job Details of: {job.job_title}</h2>
                    <p>{job.company_name}</p>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Side things</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;