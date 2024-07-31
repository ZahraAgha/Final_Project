import User from '../models/user.model.js';
import Cart from '../models/cart.model.js';
import Order from '../models/order.model.js';

//NODEMAILER 
import nodemailer from "nodemailer";



//Bcrypt
import bcrypt from 'bcrypt';

//Token
import { generateTokenAndSetCookie } from '../utils/generatetokenandsetcookie.js';

//Transport
const transport = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io",
    port: 587,
    auth: {
        user: "api",
        pass: "********f626"
    }
});



export const signup = async (request, response) => {
    try {
        const { fullName, password, email } = request.body;
        //check if all fields are filled
        if (!fullName || !password || !email) {
            return response.status(400).send('Please fill all fields');
        }
        //check if email already exists
        const exsistingUser = await User.findOne({ email: email })
        if (exsistingUser) {
            return response.status(400).send({ error: 'Email already exists' });
        }
        //hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            fullName,
            password: hashedPassword,
            email
        });
        if (!newUser) {
            return response.status(400).send({ error: "User not created" })
        }
        await Cart.create({ userId: newUser._id, cartItems: [] })
        await Order.create({ userId: newUser._id, orderItems: [], totalPrice: 0 })

        generateTokenAndSetCookie(newUser._id, response);
        response.status(201).send(newUser);

    } catch (error) {
        return response.status(500).send('Internal server error signup');
    }
};


export const signin = async (request, response) => {

    try {
        const { email, password } = request.body
        if (!password || !email) {
            return response.status(400).send("Please filled all fields")
        }
        const user = await User.findOne({ email })
        if (!user) {
            return response.status(400).send("You dont have an account")
        }
        const correctedpassword = await bcrypt.compare(password, user?.password)
        if (!correctedpassword || !email) {
            return response.status(400).send("wrong password or email")
        }
        generateTokenAndSetCookie(user._id, response);

        response.status(200).send(user)
    } catch (error) {
        return response.status(500).send({ error: "Internal server error" })
    }
}

export const logout = async (request, response) => {
    try {
        response.cookie("jwt", "")
        response.status(200).send({ message: "Succesfully logout" })
    } catch (error) {
        return response.status(500).send({ error: "Internal server error" })
    }
}


export const resetPassword = async (request, response) => {
    const { email, newPassword, confirmPassword } = request.body;

    //Check empty values
    if (!email || !newPassword || !confirmPassword) {
        return response.status(404).send({ error: "Please fill all fields" });
    }

    //Check existing email
    const user = await User.findOne({ email });

    console.log(email, newPassword, confirmPassword);

    if (!user) {
        return response.status(404).send({ error: "Email not found!" });
    }

    //Check matching passwords
    if (newPassword !== confirmPassword) {
        return response.status(404).send({ error: "Password do not match" });
    }

    //HASH the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    const updatedUser = await User.findOneAndUpdate({ email }, { $set: { password: hashedPassword } })

    if (!updatedUser) {

        return response.status(404).send({ error: "Couldn't update the password" });
    }

    return response.status(202).send(updatedUser);
}



export const forgetPassword = async (request, response) => {
    const { email } = request.body;

    //Check Empty values
    if (!email) {
        return response.status(404).send({ error: "Please fill all required fields" })
    }

    //Check existing user
    const existingUser = await User.findOne({ email })

    if (!existingUser) {
        return response.status(404).send({ error: "You are not signed up.Please create an account" })
    }

    transport.sendMail({
        from: "demomailtrap.com",
        to: email,
        subject: "Forget Password",
        // html: "<a href="http://localhost:3000/reset">Reset Password Link</a>",
    })
}

export const getCurrentUser = async (request, response) => {
    response.send({
        email: request.user.email,
        fullName: request.user.fullName,
        isAdmin: request.user.isAdmin,
    })
}