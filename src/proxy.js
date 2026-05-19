import { headers } from 'next/headers';
import { auth } from './lib/auth';
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const session =  await auth.api.getSession({
    headers: await headers() // headers containing the user's session token
});
    if(!session && !session?.user){
        return NextResponse.redirect(new URL('/login', request.url))
    }
}
 
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }
 
export const config = {
  matcher: ['/tutors/:id', '/add-tutor', '/my-booked-sessions', '/my-tutors'] 
}