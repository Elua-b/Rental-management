var Userdb = require('../models/rentalModels');

// create and save new user
const createTenant= (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const user = new Userdb({
        names : req.body.names,
        amount_paid: req.body.amount_paid,
        dateOf_payment: req.body.dateOf_payment,
        house_type : req.body.house_type,
        location : req.body.location
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.status(200).send({message:"Tenant created successfully"})
            // res.redirect('/add-user');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all users/ retrive and return a single user
const findTenant=async(req,res)=>{
    try {
        const userdata = await Userdb.find();
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    };
}
const getTenant=async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await Userdb.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
}

// Update a new idetified user by user id
const updateTenant =async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await Userdb.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
}

// Delete a user with specified user id in the request
 const deleteTenant =async(req,res)=>{
    try {
        const {id} = req.params;

        const deletuser = await Userdb.findByIdAndDelete({_id:id})
        console.log(deletuser);
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(422).json({message:error.message});
    }
}
        module.exports ={ 
        deleteTenant,
        findTenant,
        createTenant,
        updateTenant,
        getTenant
    // module.exports = getUser;
    }