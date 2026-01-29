// app/api/register/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/database/mongoose';
import User from '@/lib/database/models/user.model';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email } = body;
        if (!email) return NextResponse.json({ message: 'Email is required.' }, { status: 400 });

        await connectToDatabase();

        const existingUser = await User.findOne({ email });
        if (!existingUser) return NextResponse.json({ message: 'User Not Found' }, { status: 404 });


        return NextResponse.json({ message: 'Login successfull', email: existingUser.email }, { status: 201 });
    } catch (error) {
        console.error('Error in register route:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
