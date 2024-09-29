export const postjob = async (req, res) => {
    try {
        const { title, description, requirement, salary, location, jobtype, experience, position, comapnyId } = req.body
        const userId = req.id;
        if (!title || !description || !requirement || !salary || !location || !jobtype || !experience || !position || !companyId)
            return res.status(400).json({
                message: "Something is missing.",
                success: false
            })

        //admin
        const job = await job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            jobtype,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId
        });
        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true
        });



    } catch (error) {
        console.log(error);

    }

}

// students 
export const getAlljobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { regrex: keyword, $option: "i" } }
            ]

        };

        const jobs = await job.find(query);
        if (!job) {
            return res.status(404).json({
                message: "jobs not found.",
                success: false
            })
        };
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);

    }
}

// students
export const getJobById = async (req, res) => {
    try {
        const jobId = req.parans.id;
        const job = await job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "jobs not found.",
                success: false
            })
        };


    } catch (error) {
        console.log(error);
    }
}

// admin jitne job create kiye abhi tk 
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await job.find({ created_by: adminId });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);

    }
}