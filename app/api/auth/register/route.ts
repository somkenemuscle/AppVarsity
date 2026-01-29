// app/api/register/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/database/mongoose';
import User from '@/lib/database/models/user.model';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, username } = body;
        if (!email || !username) return NextResponse.json({ message: 'Email and username are required.' }, { status: 400 });

        await connectToDatabase();

        const existingEmail = await User.findOne({ email });
        const existingUsername = await User.findOne({ username });

        if (existingEmail) return NextResponse.json({ message: 'Email is already in use' }, { status: 400 });
        if (existingUsername) return NextResponse.json({ message: 'Username is already taken' }, { status: 400 });

        const newUser = await User.create({ email, username });

        return NextResponse.json({ message: 'User created successfully', email: newUser.email }, { status: 201 });
    } catch (error) {
        console.error('Error in register route:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
