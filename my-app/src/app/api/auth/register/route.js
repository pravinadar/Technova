
import { hash } from "bcryptjs";
import db from "@/utils/db";
import User from "@/app/models/User";

export async function POST(request) {
  try {
    // Connect to database
    await db();

    // Get request body
    const { name, email, password } = await request.json();
    console.log(name, email, password)

    // Validate input
    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "Email already registered" }),
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, parseInt( process.env.BCRYPT_SALT));
    console.log(hashedPassword)

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Return success response without password
    const { password: _, ...userWithoutPassword } = user.toObject();
    
    return new Response(
      JSON.stringify({ message: "User registered successfully", user: userWithoutPassword }), 
      { status: 201 }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Internal Server Error" ,e:error.message}), 
      { status: 500 }
    );
  }
}