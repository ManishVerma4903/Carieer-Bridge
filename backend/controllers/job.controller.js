export const postjob =async (req, res) => {
    try {
        const {title, description,requirement, salary, location , jobtype,experience, position, comapnyId} = req.body
        const userId= req.id;
        if(!title || !description || !requirement || !salary || !location || !jobtype || !experience || !position ||! companyId)
            return res.status(400).json({
        message:"something is missing.",
        success:false
        })
    const job = await job.create({
        title,
        description,
        requirements: require
        salary:Number(salary)
    })


    } catch (error) {
        console.log(error);
        
    }

}
