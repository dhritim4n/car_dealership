import Form from "../models/form.model.js";

const submit_form = async (req, res) => {
    var {name, email, subject, message } = req.body;
    try {
        await Form.create({
            name,
            email,
            subject,
            message
        })
        return res.status(200).json({ 
            success: true,
            message: "Form submitted successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}


export {
    submit_form
}
